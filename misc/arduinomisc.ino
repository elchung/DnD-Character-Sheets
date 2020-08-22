//programming--
//pb3 (pin 17) mosi
//pb4 (pin 18) miso
//pb5 (pin 19) sck

#include "RTClib.h"
#include <Adafruit_NeoPixel.h>

RTC_DS3231 rtc;

//switch pins
const int swLED = 3;  // switches are pull down resistors ( low, activate on high )
const int swMin = 5;
const int swHr = 6;
int lastSwLEDState = LOW;
int lastSwMinState = LOW;
int lastSwHrState = LOW;

//shift register pins
const int dataPin = A2;
const int latchPin = A3; // srclk, storage register clock pin
const int clockPin = 1;
const int serialClear = 0;  //keep high
int lastSec = 0;
int lastMin = 0;
int lastHr = 0;

//led data pin
const int ledData = A1;
const int numLEDs = 6;
const int ledBrightness = 50;
Adafruit_NeoPixel strip = Adafruit_NeoPixel(numLEDs, ledData, NEO_GRB + NEO_KHZ800);
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
const int rtcScl = 8;  // serial clock  should be pc5
const int rtcRst = 9;  // active low reset (keep high)
const int rtcSda = 10;  // serial data io  should be pc4

int abcdabcd[] = {
  0,   8,   4,   12,  2,   10,  6,   14,  1,   9,  128, 136, 132, 140, 130, 138, 134, 142, 129, 137,
  64,  72,  68,  76,  66,  74,  70,  78,  65,  73, 192, 200, 196, 204, 194, 202, 198, 206, 193, 201,
  32,  40,  36,  44,  34,  42,  38,  46,  33,  41, 160, 168, 164, 172, 162, 170, 166, 174, 161, 169
};


void checkButtonPress(void (*)());
void incrementLEDState();
void incrementRTCMinute();
void incrementRTCHour()

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

  pinMode(rtcRst, OUTPUT);
  digitalWrite(rtcRst, HIGH);

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
    rtc.adjust(DateTime(2020, 8, 20, 0, 0, 0));
  }
  rtc.disable32K();
}

void loop() {
  checkButtonPress(swLED, lastSwLEDState, incrementLEDState);
  checkButtonPress(swMin, lastSwMinState, incrementRTCMinute);
  checkButtonPress(swHr,  lastSwHrState,  incrementRTCHour);

  delay(5);  
  DateTime now = rtc.now();
  if (lastHr != now.hour() || lastMin != now.minute() || lastSec != now.second()) {
    lastHr = now.hour();
    lastMin = now.minute();
    lastSec = now.second();
    updateShiftRegister(now);
  }
}

void checkButtonPress(int sw, boolean lastState, void (*incrementFunc)()) {
  boolean buttonState = digitalRead(sw);
  if ((buttonState == HIGH) && (lastState == LOW)) {
    delay(20);
    boolean newState = digitalRead(sw);
    if (newState == HIGH) {
      (*incrementFunc)();
      lastState = HIGH;
    }
  } else if ((buttonState == LOW) && (lastState == HIGH)) {
    delay(20);
    boolean newState = digitalRead(sw);
    if (newState == LOW) {
      lastState = LOW;
    }
  }
}

void updateShiftRegister(DateTime now) {
  digitalWrite(latchPin, LOW);
  shiftOut(dataPin, clockPin, LSBFIRST, combineTime(now));
  digitalWrite(latchPin, HIGH);
}

int combineTime(DateTime now) {
  int hour = abcdabcd[now.hour()];
  int min = abcdabcd[now.minute()];
  int second = abcdabcd[now.second()];
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

void colorWipe(uint32_t color, int wait)
{
    for (int i = 0; i < strip.numPixels(); i++)
    {                                  // For each pixel in strip...
        strip.setPixelColor(i, color); //  Set pixel's color (in RAM)
        strip.show();                  //  Update strip to match
        delay(wait);                   //  Pause for a moment
    }
}

void incrementLEDState() {
  ledState = ledStates(ledState + 1);
  if (ledState == LAST) {
    ledState = RED;
  }

  switch(ledState) {
    case RED:
      colorWipe(strip.Color(255, 0, 0), 20);
      break;
    case MAROON:
      colorWipe(strip.Color(128, 0, 0), 20);
      break;
    case GREEN:
      colorWipe(strip.Color(0, 255, 0), 20);
      break;
    case TEAL:
      colorWipe(strip.Color(0, 255, 127), 20);
      break;
    case BLUE:
      colorWipe(strip.Color(0, 0, 255), 20);
      break;
    case SEABLUE:
      colorWipe(strip.Color(32, 178, 170), 20);
      break;
    case YELLOW:
      colorWipe(strip.Color(255, 255, 0), 20);
      break;
    case PEACH:
      colorWipe(strip.Color(255, 218, 181), 20);
      break;
    case MAGENTA:
      colorWipe(strip.Color(255, 0, 255), 20);
      break;
    case INDIGO:
      colorWipe(strip.Color(75, 0, 130), 20);
      break;
    case BLACK:
      colorWipe(strip.Color(0, 0, 0), 20);
      break;
    case WHITE:
    default:
      colorWipe(strip.Color(255, 255, 255), 20);
      break;
  }
};