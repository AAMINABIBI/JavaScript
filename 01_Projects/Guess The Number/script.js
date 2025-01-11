let randomNum=parseInt((Math.random()*100)+1)
const submit=document.querySelector('#guessSubmit')
const userInput=document.querySelector('#guessField')
const guessSlot=document.querySelector('#guesses')
const remaining=document.querySelector('#lastResult')
const lowOrHigh=document.querySelector('#lowOrHigh')
const startOver=document.querySelector('#resultParams')

const p=document.createElement('p');

let prevGuess=[];
let numGuess=1;

let playGame=true

if(playGame){
    submit.addEventListener([clicl],(e)=>{
e.preventDefault();
const guess=parseInt(userInput.value)
validateGuess(guess)
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
alert('please enter a valid number')
    }else if(guess<1){
        alert('please enter a number more tahn 1')
    }else if(guess>100){
         alert('please enter a number less than 100')
      }
      else{
        prevGuess.push(guess)
        if(numGuess>10){
guessDisplay(guess)
displayMessage(`Game Over,Random Numbr was ${randomNum} `)
      endGame() 
     }
     else{
        guessDisplay(guess)
        checkGuess(guess)
     }
      }

}

function checkGuess(guess){
if(guess===randomNum){
    displayMessage("You guessed it Right")
    endGame()
}
else if(guess<randomNum)
{
    displayMessage("num is too loww")
}
else if(guess>randomNum)
{
    displayMessage("Num is too high")
}
}

function guessDisplay(guess){
    userInput.value='';
    guessSlot.innerHTMl +=`${guess},`
    numGuess++;
    remaining.innerHTML=`${10-numGuess}`
}

function displayMessage(message){
lowOrHigh.innerHTML=`<h3>${message}</h3>`
}

function endGame(){

}userInput.value=''
userInput.setAttribute('disabled','')
p.classList.add('button')
p.innerHTML=`<h2 id="newGame">Start New Game</h2>`
startOver.appendChild(p)
playGame=false
newGame()

function newGame(){
 const newGamebtn=document.querySelector('#newGame')
 newGamebtn.addEventListener('click',(e)=>{
    randomNum=parseInt((Math.random()*100)+1);
    prevGuess=[]
    numGuess=1
guessSlot.innerHTML='';
remaining.innerHTML=`${11-numGuess}`;
userInput.removeAttribute('disabled');
startOver.removeAttribute(p)
playGame=true
 })
}
