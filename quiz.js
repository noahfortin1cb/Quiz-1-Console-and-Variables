const prompt = require('prompt-sync')();

//Program 1: Temperature Converter
console.log("Program 1: Temperature Converter");
let temp = prompt("Input a temperature to convert into Celsius: ");
let ans = prompt("If you inputted the temperature in Kelvin input 1, if you inputted a temperature in Farenheit input 2: ");

if (ans == 1) {
    let cel = temp - 273.15
    console.log("You have inputted "+temp,"Kelvin as your temperature, that in Celsius would be :", cel +" degrees");
}

else if (ans == 2) {
    let cel = (temp - 32)/1.8
    console.log("You have inputted "+temp,"Farinheit as your temperature, that in Celsius would be :", cel +" degrees");
}

else {
    console.log("Please input either 1 or 2 as yor answer.");
}
//Program 2: Grade Calculator

let grade = prompt("What was your percentage in the course? ");

if (grade >= 90) {
    console.log("You got an A!")
}

else if (grade >= 80) {
    console.log("You got a B.")
}

else if (grade >= 70) {
    console.log("You got a C...")
}

else if (grade >= 60) {
    console.log("You got a D?")
}

else if (grade < 60) {
    console.log("You got a F. You will have to retake the course next semester.")
}

//Program 3: Leap Year Checker

year = prompt("Enter a year, I'll check if it's a leap one. ")
leap = year % 4
if ("")

//Program 4: Largest Number Finder
