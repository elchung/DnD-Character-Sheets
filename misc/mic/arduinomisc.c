switches are pull down resistors ( low, activate on high )

sw5 - pd3 - LED switch
sw4 - pd5 - minutes
sw3 - pd6 - hrs


programming--
pb3 (pin 17) mosi
pb4 (pin 18) miso
pb5 (pin 19) sck

shift register clock pin = srclk
storage register clock pin rclk
output enable ,active low OE (i may have made a mistake here)
serialClear pin 10, active low (keep high)



shift register--
serial - pc2 ( pin 25 )
srclk - pc4 ( pin 27 )
srclr - pc5 ( pin 28 )
rclk - pc3 ( pin 26 )

LED data pc1 (pin 24)

//set up the pins for communication with the shift register
int latchPin = 26; // srclk, storage register clock pin
int clockPin = 27;
int dataPin = 25;
int x; //create a counting variable


// create an array that translates decimal numbers into an appropriate byte for sending to the shift register
int charTable[] = {0,128,64,192,32,160,96,224,16,144,8,136,72,200,40,168,104,232,24,152,4,132,68,196,36,164,100,228,20,148,12,140,76,204,44,
172,108,236,28,156,2,130,66,194,34,162,98,226,
18,146,10,138,74,202,42,170,106,234,26,154,6,134,70,198,38,166,102,230,22,150,14,142,78,206,46,174,110,238,30,158,1,129,
65,193,33,161,97,225,17,145,9,137,73,201,41,169,105,233,25,153};


byte nixies = 255; //initiate the byte to be sent to the shift register and set it to blank the nixies

void setup(){
  pinMode(latchPin, OUTPUT);
  pinMode(dataPin, OUTPUT);
  pinMode(clockPin, OUTPUT);
  Serial.begin(9600);
}

void loop(){
  nixies = 255; // create a blank byte
  updateShiftRegister(); // send the blank byte to the shift register
  delay(500);


  for (x = 0; x<100; x++){ // count from 0 to 99
    nixies = charTable[x]; // translate into a byte to send to the shift register

    updateShiftRegister(); //send to the shift register
    delay(500);

  Serial.print("x = ");
  Serial.println(x);
  Serial.print("nixies = ");
  Serial.println(nixies);}
}
  //the process of sending a byte to the shift register
void updateShiftRegister(){
  digitalWrite(latchPin, LOW);
  shiftOut(dataPin, clockPin, LSBFIRST, nixies);
  digitalWrite(latchPin, HIGH);
}


//button press increment code
const int  buttonPin = 2;    // the pin that the pushbutton is attached to
const int ledPin = 13;       // the pin that the LED is attached to

// Variables will change:
int buttonPushCounter = 0;   // counter for the number of button presses
int buttonState = 0;         // current state of the button
int lastButtonState = 0;     // previous state of the button

void setup() {
  // initialize the button pin as a input:
  pinMode(buttonPin, INPUT);
  // initialize the LED as an output:
  pinMode(ledPin, OUTPUT);
  // initialize serial communication:
  Serial.begin(9600);
}


void loop() {
  // read the pushbutton input pin:
  buttonState = digitalRead(buttonPin);

  // compare the buttonState to its previous state
  if (buttonState != lastButtonState) {
    // if the state has changed, increment the counter
    if (buttonState == HIGH) {
      // if the current state is HIGH then the button went from off to on:
      buttonPushCounter++;
      Serial.println("on");
      Serial.print("number of button pushes: ");
      Serial.println(buttonPushCounter);
    } else {
      // if the current state is LOW then the button went from on to off:
      Serial.println("off");
    }
    // Delay a little bit to avoid bouncing
    delay(50);
  }
  // save the current state as the last state, for next time through the loop
  lastButtonState = buttonState;


  // turns on the LED every four button pushes by checking the modulo of the
  // button push counter. the modulo function gives you the remainder of the
  // division of two numbers:
  if (buttonPushCounter % 4 == 0) {
    digitalWrite(ledPin, HIGH);
  } else {
    digitalWrite(ledPin, LOW);
  }

}
