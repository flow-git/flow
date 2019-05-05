/*
Adapted from: Liquid flow rate sensor - DIYhacking.com Arvind Sanjeev and 
https://www.arduino.cc/en/Tutorial/HelloWorld
 */

#include <LiquidCrystal.h>

const int rs = 12, en = 11, d4 = 6, d5 = 5, d6 = 4, d7 = 3;
LiquidCrystal lcd(rs, en, d4, d5, d6, d7);

byte sensorInterrupt = 0;  // 0 = digital pin 2
byte sensorPin       = 2;

// The hall-effect flow sensor outputs approximately 4.5 pulses per second per
// litre/minute of flow.
float calibrationFactor = 4.5;

volatile byte pulseCount;  

float flowRate;
float flowMilliLiters;
float totalMilliLiters;

unsigned long oldTime;
unsigned long prevFlowRate;

char msg[16];
char perMin[10];
char liters[14];

void setup()
{
  
  // Initialize a serial connection for reporting values to the host
  Serial.begin(9600);
  lcd.begin(16, 3);

  lcd.setCursor(0,0);
  dtostrf(0.00, 4, 2, liters);
  sprintf(msg, "%-14s L", liters);
  lcd.print(msg);


  lcd.setCursor(0,1);
  dtostrf(0.00, 4, 2, perMin);
  sprintf(msg, "%-10s L/min", perMin);
  lcd.print(msg);
  
  pinMode(sensorPin, INPUT);
  digitalWrite(sensorPin, HIGH);

  pulseCount        = 0;
  flowRate          = 0.0;
  flowMilliLiters   = 0.0;
  totalMilliLiters  = 0.0;
  oldTime           = 0;
  prevFlowRate = 0;

  attachInterrupt(sensorInterrupt, pulseCounter, FALLING);
}

/**
 * Main program loop
 */
void loop()
{
   
   if((millis() - oldTime) > 1000)    // Only process counters once per second
  { 
    detachInterrupt(sensorInterrupt);
        
    flowRate = ((1000.0 / (millis() - oldTime)) * pulseCount) / calibrationFactor;
    
    oldTime = millis();
    
    flowMilliLiters = (flowRate / 60) * 1000;
    
    totalMilliLiters += flowMilliLiters;

//    if (flowRate != prevFlowRate) {
        lcd.setCursor(0,0);
        dtostrf(totalMilliLiters/1000.0, 4, 2, liters);
        sprintf(msg, "%-14s L", liters);
        lcd.print(msg);
//        lcd.print(totalMilliLiters/1000.0);
//        lcd.print(" L");

        lcd.setCursor(0,1);
        dtostrf(flowRate, 4, 2, perMin);
        sprintf(msg, "%-10s L/min", perMin);
        lcd.print(msg);
//        lcd.print(flowRate);
//        lcd.print(" L/min");

        prevFlowRate = flowRate;
//   }

      Serial.print(flowRate);
      Serial.print(" min/L");
      Serial.print("\t");
      Serial.print(totalMilliLiters/1000.0);  
      Serial.println(" L");

    // Reset the pulse counter so we can start incrementing again
    pulseCount = 0;
    
    // Enable the interrupt again now that we've finished sending output
    attachInterrupt(sensorInterrupt, pulseCounter, FALLING);
  }
}

/*
Interrupt Service Routine
 */
void pulseCounter()
{
  // Increment the pulse counter
  pulseCount++;
}
