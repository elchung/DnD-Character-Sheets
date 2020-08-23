//programming--
//pb3 (pin 17) mosi
//pb4 (pin 18) miso
//pb5 (pin 19) sck

#include "RTClib.h"

RTC_DS3231 rtc;

//shift register pins
const int dataPin = A2;
const int latchPin = A3; // srclk, storage register clock pin
const int clockPin = 1;
const int serialClear = 0;  //keep high
int time_second = 0;
int time_minute = 0;
int time_hour = 0;
int lastSec = 0;
int lastMin = 0;
int lastHr = 0;

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

void setup(){

  pinMode(latchPin, OUTPUT);
  pinMode(dataPin, OUTPUT);
  pinMode(clockPin, OUTPUT);
  pinMode(serialClear, OUTPUT); //keep high
  digitalWrite(serialClear, HIGH);

  delay(20);

  pinMode(rtcRst, OUTPUT);
  digitalWrite(rtcRst, HIGH);

  //rtc setup
  while(!rtc.begin()) {
  }
  if(rtc.lostPower()) {
    // this will adjust to the date and time at compilation
    rtc.adjust(DateTime(2020, 8, 23, 0, 0, 0));
  }
  rtc.disable32K();
}

void loop() {
  DateTime now = rtc.now();
  if (lastHr != now.hour() || lastMin != now.minute() || lastSec != now.second()) {
    lastHr = now.hour();
    lastHr = now.hour();
    lastMin = now.minute();
    lastSec = now.second();
    updateTime(now);
  }
  delay(1);
}

void updateTime(DateTime now) {
  digitalWrite(latchPin, LOW);

  shiftOut(dataPin, clockPin, LSBFIRST, abcd[now.second()]);
  shiftOut(dataPin, clockPin, LSBFIRST, abcd[now.minute()]);
  shiftOut(dataPin, clockPin, LSBFIRST, abcd[now.hour()]);

  digitalWrite(latchPin, HIGH);
}



int combineTime(DateTime now) {
  int hour = abcdabcd[now.hour()];
  int min = abcdabcd[now.minute()];
  int second = abcdabcd[now.second()];
  return hour<<16 + min<<8 + second;
}
