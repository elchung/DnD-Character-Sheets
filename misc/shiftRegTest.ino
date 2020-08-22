//programming--
//pb3 (pin 17) mosi
//pb4 (pin 18) miso
//pb5 (pin 19) sck

#include <Adafruit_NeoPixel.h>


//switch pins
const int swMin = 5;
const int swHr = 6;
int lastSwMinState = LOW;
int lastSwHrState = LOW;

//shift register pins
const int dataPin = A2;
const int latchPin = A3; // srclk, storage register clock pin
const int clockPin = 1;
const int serialClear = 0;  //keep high
int s = 0;
int m = 0;
int h = 0;


int abcdabcd[] = {
  0,   8,   4,   12,  2,   10,  6,   14,  1,   9,  128, 136, 132, 140, 130, 138, 134, 142, 129, 137,
  64,  72,  68,  76,  66,  74,  70,  78,  65,  73, 192, 200, 196, 204, 194, 202, 198, 206, 193, 201,
  32,  40,  36,  44,  34,  42,  38,  46,  33,  41, 160, 168, 164, 172, 162, 170, 166, 174, 161, 169
};


void checkButtonPress(void (*)());
void incrementRTCMinute();
void incrementRTCHour();

void setup(){
  pinMode(swMin, INPUT);
  pinMode(swHr, INPUT);

  pinMode(latchPin, OUTPUT);
  pinMode(dataPin, OUTPUT);
  pinMode(clockPin, OUTPUT);
  pinMode(serialClear, OUTPUT); //keep high
  digitalWrite(serialClear, HIGH);

  Serial.begin(9600);
}

void loop() {
  checkButtonPress(swMin, lastSwMinState, incrementRTCMinute);
  checkButtonPress(swHr,  lastSwHrState,  incrementRTCHour);
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
  m = m  + 1;
  if (m > 9) {
    m = 0;
  }
  digitalWrite(latchPin, LOW);
  shiftOut(dataPin, clockPin, h);
  shiftOut(dataPin, clockPin, m);
  shiftOut(dataPin, clockPin, s);
  digitalWrite(latchPin, HIGH);
}

void incrementRTCHour() {
  h = h + 1;
  if (h > 9) {
    h = 0;
  }
  digitalWrite(latchPin, LOW);
  shiftOut(dataPin, clockPin, h);
  shiftOut(dataPin, clockPin, m);
  shiftOut(dataPin, clockPin, s);
  digitalWrite(latchPin, HIGH);
}

void shiftOut(int myDataPin, int myClockPin, byte myDataOut) {
  int i=0;
  int pinState;
  pinMode(myClockPin, OUTPUT);
  pinMode(myDataPin, OUTPUT);
  digitalWrite(myDataPin, 0);
  digitalWrite(myClockPin, 0);

  for (i=7; i>=0; i--)  {
    digitalWrite(myClockPin, 0);
    if ( myDataOut & (1<<i) ) {
      pinState= 1;
    }
    else {  
      pinState= 0;
    }
    digitalWrite(myDataPin, pinState);
    digitalWrite(myClockPin, 1);
    digitalWrite(myDataPin, 0);
  }
  digitalWrite(myClockPin, 0);
}

