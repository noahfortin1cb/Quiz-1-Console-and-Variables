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
//Creates a variable to store the grade
if (grade >= 90) {
    console.log("You got an A!")
}
//Checks if the grade is over 90 for an A
else if (grade >= 80) {
    console.log("You got a B.")
}
//Checks if the grade is over 80 for a B
else if (grade >= 70) {
    console.log("You got a C...")
}
//Checks if the grade is over 70 for a C
else if (grade >= 60) {
    console.log("You got a D?")
}
//Checks if the grade is over 60 for a D
else if (grade < 60) {
    console.log("You got a F. You will have to retake the course next semester.")
}
//Checks if the grade is below 60 for an F
//Program 3: Leap Year Checker

year = prompt("Enter a year, I'll check if it's a leap one. ")
leap = year % 4
if (leap = 1) {
    console.log(year,"is a leap year!")
}
else {
    console.log(year, "is not a leap year.")
}

//Program 4: Largest Number Finder

num1 = prompt("Input a big number: ")
num2 = prompt("Input a small number: ")
ans = num1 - num2

if (ans > 0){
    console.log("Good job at following instructions, there is a "+ans,"difference between your numbers.")
}
else if (ans = 0){
    console.log("Hey! You just entered the same number twice!")
}
else{
    console.log("These instructions weren't that hard to follow... do better next time.")
}