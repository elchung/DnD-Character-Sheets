//programming--
//pb3 (pin 17) mosi
//pb4 (pin 18) miso
//pb5 (pin 19) sck

#include "RTClib.h"
#include <Adafruit_NeoPixel.h>

RTC_DS3231 rtc;

//switch pins
const int swLED = 5;  // switches are pull down resistors ( low, activate on high )
const int swMin = 11;
const int swHr = 12;
int lastSwLEDState = 0;
int lastSwMinState = 0;
int lastSwHrState = 0;

//shift register pins
const int dataPin = 25;
const int latchPin = 26; // srclk, storage register clock pin
const int clockPin = 27;
const int serialClear = 28;  //keep high
int lastSec = 0;
int lastMin = 0;
int lastHr = 0;

//led data pin
const int ledData = 24;
const int numLEDs = 6;
const char ledType[] = 'WS2812B';
const int ledBrightness = 50;
Adafruit_NeoPixel strip = Adafruit_NeoPixel(ledBrightness, ledData, NEO_GRB + NEO_KHZ800);
enum ledStates {
  RED = 0,
  MAROON,
  GREEN,
  TEAL,
  BLUE,
  SEABLUE,
  YELLOW,
  PEACH,
  MAGENTA,
  INDIGO,
  BLACK,
  WHITE,
  LAST
};
ledStates ledState = BLUE;

//rtc pins
const rtcData = 'somepin';  //  TODO check which pins
const rtcClk = 'somepin';

// create an array that translates decimal numbers into an appropriate byte for sending to the shift register
int dcbadcba[] = {  // TODO check whic order its in
  0,  1,  2,  3,  4,  5,  6,  7,  8,  9,
  16, 17, 18, 19, 20, 21, 22, 23, 24, 25,
  32, 33, 34, 35, 36, 37, 38, 39, 40, 41,
  48, 49, 50, 51, 52, 53, 54, 55, 56, 57,
  64, 65, 66, 67, 68, 69, 70, 71, 72, 73,
  80, 81, 82, 83, 84, 85, 86, 87, 88, 89
};
int abcdabcd[] = {
  0,   8,   4,   12,  2,   10,  6,   14,  1,   9,
  128, 136, 132, 140, 130, 138, 134, 142, 129, 137,
  64,  72,  68,  76,  66,  74,  70,  78,  65,  73,
  192, 200, 196, 204, 194, 202, 198, 206, 193, 201,
  32,  40,  36,  44,  34,  42,  38,  46,  33,  41,
  160, 168, 164, 172, 162, 170, 166, 174, 161, 169
};


byte nixies = 255; //initiate the byte to be sent to the shift register and set it to blank the nixies

void setup(){
  pinMode(swLED, INPUT);
  pinMode(swMin, INPUT);
  pinMode(swHr, INPUT);

  pinMode(latchPin, OUTPUT);
  pinMode(dataPin, OUTPUT);
  pinMode(clockPin, OUTPUT);
  pinMode(serialClear, OUTPUT); //keep high
  digitalWrite(serialClear, HIGH);

  pinMode(ledData, OUTPUT);

  delay(1000);
  strip.begin();
  strip.setBrightness(ledBrightness);
  strip.show();

  Serial.begin(9600);

  //rtc setup
  if(!rtc.begin()) {
      Serial.println("Couldn't find RTC!");
      Serial.flush();
      abort();
  }
  if(rtc.lostPower()) {
    // this will adjust to the date and time at compilation
    rtc.adjust(DateTime(2020, 8, 20, 0, 0, 0))
  }
  rtc.disable32K();
}

void loop() {
  buttonMinState = digitalRead(swMin);
  buttonHrState = digitalRead(swHr);
  buttonLEDState = digitalRead(swLED);

  if (buttonMinState != lastSwMinState) {
    if (buttonMinState == HIGH) {
      incrementRTCMinute();
    }
    lastSwMinState = buttonMinState;
  }

  if (buttonHrState != lastSwHrState) {
    if (buttonMinState == HIGH) {
      incrementRTCHour();
    }
    lastSwHrState = buttonHrState;
  }

  if (buttonLEDState != lastSwLEDState) {
    if (buttonLEDState == HIGH) {
      incrementLEDState();
    }
  }

  delay(5);
  DateTime now = rtc.now();
  if (lastHr != now.hour() || lastMin != now.minute() || lastSec != now.second()) {
    lastHr = now.hour();
    lastMin = now.minute();
    lastSec = now.second();
    updateShiftRegister(now);
  }
}

void updateShiftRegister(DateTime now) {
  digitalWrite(latchPin, LOW);
  shiftOut(dataPin, clockPin, LSBFIRST, combineTime(now));
  digitalWrite(latchPin, HIGH);
}

int combineTime(DateTime now) {
  int hour = now.hour();
  int min = now.minute();
  int second = now.second();
  return hour<<16 + min<<8 + second;
}

void incrementRTCMinute() {
  DateTime now = rtc.now();
  rtc.adjust(DateTime(
    now.year(),
    now.month(),
    now.day(),
    now.hour(),
    now.minute() + 1,
    0
  ));
}

void incrementRTCHour() {
  DateTime now = rtc.now();
  rtc.adjust(DateTime(
    now.year(),
    now.month(),
    now.day(),
    now.hour() + 1,
    now.minute(),
    0
  ));
}

void incrementLEDState() {
  ledState++;
  if (ledState == LAST) {
    ledState = RED;
  }

  switch(ledState) {
    case RED:
      colorWipe(strip.color(255, 0, 0), ledBrightness);
      break;
    case MAROON:
      colorWipe(strip.color(128, 0, 0), ledBrightness);
      break;
    case GREEN:
      colorWipe(strip.color(0, 255, 0), ledBrightness);
      break;
    case TEAL:
      colorWipe(strip.color(0, 255, 127), ledBrightness);
      break;
    case BLUE:
      colorWipe(strip.color(0, 0, 255), ledBrightness);
      break;
    case SEABLUE:
      colorWipe(strip.color(32, 178, 170), ledBrightness);
      break;
    case YELLOW:
      colorWipe(strip.color(255, 255, 0), ledBrightness);
      break;
    case PEACH:
      colorWipe(strip.color(255, 218, 181), ledBrightness);
      break;
    case MAGENTA:
      colorWipe(strip.color(255, 0, 255), ledBrightness);
      break;
    case INDIGO:
      colorWipe(strip.color(75, 0, 130), ledBrightness);
      break;
    case BLACK:
      colorWipe(strip.color(0, 0, 0), ledBrightness);
      break;
    case WHITE:
    default:
      colorWipe(strip.color(255, 255, 255), ledBrightness);
      break;
  }
};

/*
nixie truth table
SHIFT REGISTER INPUT TO 2 NIXIE OUTPUT
OUT IN (assuming DCBADCBA output)
00 | 00000000 | 00000000
01 | 00000001 | 00001000
02 | 00000010 | 00000100
03 | 00000011 | 00001100
04 | 00000100 | 00000010
05 | 00000101 | 00001010
06 | 00000110 | 00000110
07 | 00000111 | 00001110
08 | 00001000 | 00000001
09 | 00001001 | 00001001
10 | 00010000 | 10000000
11 | 00010001 | 10001000
12 | 00010010 | 10000100
13 | 00010011 | 10001100
14 | 00010100 | 10000010
15 | 00010101 | 10001010
16 | 00010110 | 10000110
17 | 00010111 | 10001110
18 | 00011000 | 10000001
19 | 00011001 | 10001001
20 | 00100000 | 01000000
21 | 00100001 | 01001000
22 | 00100010 | 01000100
23 | 00100011 | 01001100
24 | 00100100 | 01000010
25 | 00100101 | 01001010
26 | 00100110 | 01000110
27 | 00100111 | 01001110
28 | 00101000 | 01000001
29 | 00101001 | 01001001
30 | 00110000 | 11000000
31 | 00110001 | 11001000
32 | 00110010 | 11000100
33 | 00110011 | 11001100
34 | 00110100 | 11000010
35 | 00110101 | 11001010
36 | 00110110 | 11000110
37 | 00110111 | 11001110
38 | 00111000 | 11000001
39 | 00111001 | 11001001
40 | 01000000 | 00100000
41 | 01000001 | 00101000
42 | 01000010 | 00100100
43 | 01000011 | 00101100
44 | 01000100 | 00100010
45 | 01000101 | 00101010
46 | 01000110 | 00100110
47 | 01000111 | 00101110
48 | 01001000 | 00100001
49 | 01001001 | 00101001
50 | 01010000 | 10100000
51 | 01010001 | 10101000
52 | 01010010 | 10100100
53 | 01010011 | 10101100
54 | 01010100 | 10100010
55 | 01010101 | 10101010
56 | 01010110 | 10100110
57 | 01010111 | 10101110
58 | 01011000 | 10100001
59 | 01011001 | 10101001
dcbadcba = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89]
abcdabcd = [0, 8, 4, 12, 2, 10, 6, 14, 1, 9, 128, 136, 132, 140, 130, 138, 134, 142, 129, 137, 64, 72, 68, 76, 66, 74, 70, 78, 65, 73, 192, 200, 196, 204, 194, 202, 198, 206, 193, 201, 32, 40, 36, 44, 34, 42, 38, 46, 33, 41, 160, 168, 164, 172, 162, 170, 166, 174, 161, 169]
*/
