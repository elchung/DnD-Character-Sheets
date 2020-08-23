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
int time_second = 0;
int time_minute = 0;
int time_hour = 0;

byte abcd[] = {
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

  delay(20);
  updateTime();
}

void loop() {
  checkButtonPress(swMin, lastSwMinState, incrementRTCMinute);
  checkButtonPress(swHr,  lastSwHrState,  incrementRTCHour);
}

void checkButtonPress(int sw, int &lastState, void (*incrementFunc)()) {
  boolean buttonState = digitalRead(sw);
  if ((buttonState == HIGH) && (lastState == LOW)) {
    delay(20);
    boolean newState = digitalRead(sw);
    if (newState == HIGH) {
      lastState = HIGH;
      (*incrementFunc)();
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
  time_minute++;
  if (time_minute > 59) { time_minute = 0; }
  updateTime();
}

void incrementRTCHour() {
  time_hour++;
  if (time_hour > 59) {
    time_hour = 0;
  }
  updateTime();
}

void updateTime() {    
  digitalWrite(latchPin, LOW);

  shiftOut(dataPin, clockPin, MSBFIRST, abcd[time_second]); 
  shiftOut(dataPin, clockPin, MSBFIRST, abcd[time_minute]); 
  shiftOut(dataPin, clockPin, MSBFIRST, abcd[time_hour]); 

  digitalWrite(latchPin, HIGH);
}
