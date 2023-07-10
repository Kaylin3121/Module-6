
// I made a player score and a winner score, and this statement is meant to calculate the total points during a game. 
alert("I am an alert box!");
var FirstCategory = "Puzzler";
var player = 25;
var userScore = 60; 
var winnerScore = 60; 

if (userScore > winnerScore || userScore == winnerScore ) {
  console.log( "You won !!!!!!!!!!! ");
} else {
  console.log( "You almost reached the score, but it was under " + winnerScore );
} 







// This function is calculating two numbers together, and it returns the total number. 
function sandwichRounds(Number1, Number2){
  var result = Number1 + Number2; 
  return result; 
  
}


var answer = sandwichRounds(3, 7);
console.log(answer);

var message = "This is a picture of puppeteer Jim Henson and his Muppets. He passed away in 1990 from pneumonia caused by sepsis and strep throat/the flu.";
document.getElementById("Caption").innerHTML= message;


// Getting an element by its id
const usernameInput = document.getElementById('username');

// Getting an element by its class name
const passwordInputs = document.getElementsByClassName('password');

// Getting an element by its tag name
const headerElement = document.getElementsByTagName('header')[0];

// Create an attribute node and append to an element
const newAttribute = document.createAttribute('data-info');
newAttribute.value = 'Some information';
headerElement.setAttributeNode(newAttribute);

// Add CSS styling via the DOM
headerElement.style.backgroundColor = 'blue';
headerElement.style.color = 'white';

// JavaScript action timers using setInterval and setTimeout
const intervalId = setInterval(() => {
  console.log('This interval is running every 2 seconds.');
}, 2000);

const timeoutId = setTimeout(() => {
  console.log('This timeout will execute after 5 seconds.');
}, 5000);

// Clearing intervals and timeouts after use
clearInterval(intervalId);
clearTimeout(timeoutId);

