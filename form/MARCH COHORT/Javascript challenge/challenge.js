// Write a javascript program to check two numbers and return true if one of the number is 100 or if the sum of the two numbers is 100

function isEqualTo(a,b){ if (a===100 / b===100 ) {
 return true
} else if(a+b===100){
    return true
}else{
    return false
}
 }
 console.log(isEqualTo(40, 60));
 console.log(isEqualTo(10,30));

 //write a javascript program to get the extension of a file name

 function getExtention(her){
    return her.slice(her.lastIndexOf('.'))
 }
console.log(getExtention('index.js'));

//OR
const getElement = (him) => him.slice(him.lastIndexOf('.'))

console.log(getElement('index.html.ma'));

//  write a javascript program to get the current date.

let date = new Date();
let months = date.getMonth() + 1 ;
let days = date.getDate() ;
let years = date.getFullYear();

const theYear = 
    ` ${months} : ${days} : ${years}`


console.log(theYear);

// write a javascript program to create a new string addind 'New!' in front of a given string. 
//if the given string begins with 'New!'already then return the original string. 

function  addNew(str) { if(str.indexOf('New') === 0)
   { return str; }
else {
    return `New`+ str;
}}

console.log(addNew('New boss'));

// write a javascript program to create a new string from a given string taking the first and last three characters of a string and
// adding them together. the string length must be more that 3 or more, if not the original string is returned. 

const makeNewString = (str) => str.length < 3 ? str : str.slice(0, 3) + str.slice(-3);

console.log(makeNewString('Testimony'));