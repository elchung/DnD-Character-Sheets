//programming--
//pb3 (pin 17) mosi
//pb4 (pin 18) miso
//pb5 (pin 19) sck

#include <DS3231.h>
#include <Adafruit_NeoPixel.h>

#define SDA A4
#define SCL A5
DS3231 rtc(SDA, SCL);

//switch pins
const int swMin = 5;
const int swHr = 6;
const int swLED = 3;  // switches are pull down resistors ( low, activate on high )
int lastSwMinState = LOW;
int lastSwHrState = LOW;
int lastSwLEDState = LOW;

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

//shift register pins
const int dataPin = A2;
const int latchPin = A3; // srclk, storage register clock pin
const int clockPin = 1;
const int serialClear = 0;  //keep high
int lastSec = 0;
int lastMin = 0;
int lastHr = 0;
Time t;
//rtc pins
const int rtcScl = 8;  // serial clock  should be pc5
const int rtcRst = 9;  // active low reset (keep high)
const int rtcSda = 10;  // serial data io  should be pc4

byte abcd[] = {
  0,   8,   4,   12,  2,   10,  6,   14,  1,   9,  128, 136, 132, 140, 130, 138, 134, 142, 129, 137,
  64,  72,  68,  76,  66,  74,  70,  78,  65,  73, 192, 200, 196, 204, 194, 202, 198, 206, 193, 201,
  32,  40,  36,  44,  34,  42,  38,  46,  33,  41, 160, 168, 164, 172, 162, 170, 166, 174, 161, 169
};

void checkButtonPress(void (*)());
void incrementLEDState();
void incrementRTCMinute();
void incrementRTCHour();

void setup(){
  pinMode(swLED, INPUT);
  pinMode(swMin, INPUT);
  pinMode(swHr, INPUT);

  pinMode(ledData, OUTPUT);
  pinMode(latchPin, OUTPUT);
  pinMode(dataPin, OUTPUT);
  pinMode(clockPin, OUTPUT);
  pinMode(serialClear, OUTPUT); //keep high
  digitalWrite(serialClear, HIGH);
  pinMode(rtcRst, OUTPUT);
  digitalWrite(rtcRst, HIGH);
  rtc.begin();
  updateTime();

  delay(100);
  strip.begin();
  strip.setBrightness(ledBrightness);
  strip.show();

}

void loop() {
  checkButtonPress(swLED, lastSwLEDState, incrementLEDState);
  checkButtonPress(swMin, lastSwMinState, incrementRTCMinute);
  checkButtonPress(swHr,  lastSwHrState,  incrementRTCHour);
  checkTime();
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

void incrementRTCMinute() {
  t = rtc.getTime();
  if (t.min == 59) {
    rtc.setTime(t.hour, 0, 0);
  } else {
    rtc.setTime(t.hour, t.min + 1, 0);
  }
}

void incrementRTCHour() {
  t = rtc.getTime();
  if (t.hour = 12) {
    rtc.setTime(0, t.min, 0);
  } else {
    rtc.setTime(t.hour + 1, t.min, 0);
  }
}

void checkTime() {
  t = rtc.getTime();
  if (t.sec != lastSec || t.min != lastMin || t.hour != lastHr) {
    lastSec = t.sec;
    lastMin = t.min;
    lastHr = t.hour;
    updateTime();
  }
}

void updateTime() {    
  t = rtc.getTime();
  digitalWrite(latchPin, LOW);

  shiftOut(dataPin, clockPin, LSBFIRST, abcd[t.hour]);
  shiftOut(dataPin, clockPin, LSBFIRST, abcd[t.min]);  
  shiftOut(dataPin, clockPin, LSBFIRST, abcd[t.sec]); 

  digitalWrite(latchPin, HIGH);
}

void colorWipe(uint32_t color, int wait) {
    for (int i = 0; i < strip.numPixels(); i++) {
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
}