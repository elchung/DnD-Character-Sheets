//programming--
//pb3 (pin 17) mosi
//pb4 (pin 18) miso
//pb5 (pin 19) sck

#include "RTClib.h"
#include <Adafruit_NeoPixel.h>

RTC_DS3231 rtc;

//switch pins
const int swLED = 3;  // switches are pull down resistors ( low, activate on high )
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

void checkButtonPress(void (*)());
void incrementLEDState();

void setup(){
  pinMode(swLED, INPUT);

  pinMode(ledData, OUTPUT);

  delay(1000);
  strip.begin();
  strip.setBrightness(ledBrightness);
  strip.show();

  Serial.begin(9600);
}

void loop() {
  checkButtonPress(swLED,lastSwLEDState,incrementLEDState);
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
};