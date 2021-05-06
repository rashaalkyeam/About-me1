'use strict'
let score=0;

function fromWhere (){
let nationality = prompt('Do you think that I have the Jordanian nationality?\n pleas enter yes or no, y or n').toLowerCase();
if (nationality == 'yes' || nationality == 'y') {
    console.log('What you think is correct');
    alert('What you think is correct');
    score++;
} else {
    console.log('What you think is not true');
    alert('What you think is not true');
}}


function myAge (){
let age = prompt('Do you think that I am less than 25 years old?\n pleas enter yes or no, y or n').toLowerCase();
if (age == 'yes' || age == 'y') {
    console.log('What you think is correct');
    alert('What you think is correct');
    score++;
} else {
    console.log('What you think is not true');
    alert('What you think is not true');
}}


function place (){
let live = prompt('Do you think I live in Amman?\n pleas enter yes or no, y or n').toLowerCase();
if (live == 'no' || live == 'n') {
    console.log('What you think is correct');
    alert('What you think is correct');
    score++;
} else {
    console.log('What you think is not true');
    alert('What you think is not true');
}}


function myStudy(){
let study = prompt('Do you think I studied computer science?\n pleas enter yes or no, y or n').toLowerCase();
if (study == 'yes' || study == 'y') {
    console.log('What you think is correct');
    alert('What you think is correct');
    score++;
} else {
    console.log('What you think is not true');
    alert('What you think is not true');

}}

 
function haveCar(){
let car = prompt('Do you think I own a car?\n pleas enter yes or no, y or n').toLowerCase();

if (car == 'no' || car == 'n') {
    console.log('What you think is correct');
    alert('What you think is correct');
    score++;
} else {
    console.log('What you think is not true')
    alert('What you think is not true')

}}

function guess(){
    
    let num=102;
for(let i=0;i<4;i++){
    let numguess=parseInt(prompt("Let's play a guessing game,\n guess the number\n  I'll tell you if it's near or far, or even if you answer correctly."));
    if(numguess>num){
        alert('very high');
    } else if(num>numguess){
        alert('very low');
    } else if (num==numguess){
        alert('correct answer');
        score++;
        break;
    }
}
}
function read(){
    for(let j=0; j<6; j++){
    let readguess=prompt("Guess what are my favorite fields of reading?\nFor example: romance, action, poetry, history ...").toLowerCase();
    if(readguess=="romance"||readguess=="poetry"||readguess=="history"){

        alert('correct answer');
        score++;
        break;
    }else{
        alert('Not correct answer')
    }

}
}

fromWhere ();
myAge ();
 place ();
 myStudy();
 haveCar();
guess();
read();
 alert(`Thankyou ${userName} Your score${score} Questions correctly`);


