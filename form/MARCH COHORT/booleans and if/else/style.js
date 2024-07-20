
const butIn = document.querySelectorAll('button');

const computerChoice = Math.random();
let mouseMove = '';
let result =''



function outPut(){
    if (computerChoice >= 1 && computerChoice <= 1/3) {
       mouseMove= 'rock';
     }  else if( computerChoice>= 1/3 && computerChoice <= 2/3){
        mouseMove = 'paper'} else if(computerChoice>= 2/3 && computerChoice <=1 ) {
           mouseMove = 'scissors'}  
           

     if (computerChoice==='rock') {
       result = 'You Loose' 
     } else if (computerChoice==='paper') {
result = 'You Tied'
     } else if (computerChoice==='scissors'){
        result = 'You win'
     }  

}
alert(`You picked ${}`)



butIn.forEach(button =>{
    button.addEventListener('click', outPut)
});


const date = new Date();
const hour = date.getHours();
let nameE = 'Susan'

if (hour >=6 && hour<= 12) {
    console.log(`Good morning ${nameE}`);
} else if(hour >=13 && hour <=17 ) {
   console.log(`Good afternoon ${nameE}`); 
}else{
    console.log(`Good evening ${nameE}`);
}