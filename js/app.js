'use strict'
function fromWhere (){
let nationality = prompt('Do you think that I have the Jordanian nationality?\n pleas enter yes or no, y or n').toLowerCase();
if (nationality == 'yes' || nationality == 'y') {
    console.log('What you think is correct');
    alert('What you think is correct');
} else {
    console.log('What you think is not true');
    alert('What you think is not true');
}}


function myAge (){
let age = prompt('Do you think that I am less than 25 years old?\n pleas enter yes or no, y or n').toLowerCase();
if (age == 'yes' || age == 'y') {
    console.log('What you think is correct');
    alert('What you think is correct');
} else {
    console.log('What you think is not true');
    alert('What you think is not true');
}}


function place (){
let live = prompt('Do you think I live in Amman?\n pleas enter yes or no, y or n').toLowerCase();
if (live == 'no' || live == 'n') {
    console.log('What you think is correct');
    alert('What you think is correct');
} else {
    console.log('What you think is not true');
    alert('What you think is not true');
}}


function myStudy(){
let study = prompt('Do you think I studied computer science?\n pleas enter yes or no, y or n').toLowerCase();
if (study == 'yes' || study == 'y') {
    console.log('What you think is correct');
    alert('What you think is correct');
} else {
    console.log('What you think is not true');
    alert('What you think is not true');

}}

 
function haveCar(){
let car = prompt('Do you think I own a car?\n pleas enter yes or no, y or n').toLowerCase();

if (car == 'no' || car == 'n') {
    console.log('What you think is correct');
    alert('What you think is correct');
} else {
    console.log('What you think is not true')
    alert('What you think is not true')

}}
fromWhere ();
myAge ();
 place ();
 myStudy();
 haveCar();

 alert(`Thankyou ${userName}`);


