//programming--
//pb3 (pin 17) mosi
//pb4 (pin 18) miso
//pb5 (pin 19) sck

#include <DS3231.h>


#define SDA A4
#define SCL A5
DS3231 rtc(SDA, SCL);
const int testDataPin = A1;
//shift register pins
const int dataPin = A2;
const int latchPin = A3; // srclk, storage register clock pin
const int clockPin = 1;
const int serialClear = 0;  //keep high

int lastState = 1;
int time_second = 0;
int time_minute = 0;
int time_hour = 0;
int lastSec = 0;
int lastMin = 0;
int lastHr = 0;
Time t;
//rtc pins
const int rtcScl = 8;  // serial clock  should be pc5
const int rtcRst = 9;  // active low reset (keep high)
const int rtcSda = 10;  // serial data io  should be pc4

int abcd[] = {
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
  pinMode(rtcRst, OUTPUT);
  digitalWrite(rtcRst, HIGH);
  pinMode(testDataPin, OUTPUT);
  delay(20);
  rtc.begin();
  delay(20);
  
//  if(rtc.lostPower()) {
//    // this will adjust to the date and time at compilation
  rtc.setTime(12, 0, 0);
//  }
//  rtc.disable32K();
}

void loop() {
  t = rtc.getTime();
  if (lastSec != t.sec) {
    lastSec = t.sec;
    if ( lastState == 1 ) {
      digitalWrite(testDataPin, LOW);
      lastState = 0;
    } else {
      digitalWrite(testDataPin, HIGH);
      lastState = 1;
    }
    
  }
//  if (lastHr != t.hour || lastMin != t.min || lastSec != t.sec) {
//    lastHr = t.hour;
//    lastMin = t.min;
//    lastSec = t.sec;
  updateTime(t);
//  }
  delay(100);
}

void updateTime(Time t) {
  digitalWrite(latchPin, LOW);

  shiftOut(dataPin, clockPin, LSBFIRST, abcd[t.sec]);
  shiftOut(dataPin, clockPin, LSBFIRST, abcd[t.sec]);
  shiftOut(dataPin, clockPin, LSBFIRST, abcd[t.sec]);

  digitalWrite(latchPin, HIGH);
}

