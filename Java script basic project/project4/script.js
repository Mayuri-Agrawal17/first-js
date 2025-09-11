let randomNumber= parseInt(Math.random() * 10 + 1)

const submit=document.querySelector("#subt")
const userInput=document.querySelector("#guessField")
const guessesLot=document.querySelector(".guesses")
const remaining=document.querySelector(".lastResult")
const lowOrHi=document.querySelector(".lowOrHi")
const startOver=document.querySelector(".resultParas")

const p = document.createElement("p");

let prevGuess=[]; //array for previously inserted values by user 
let numGuess=1; //total number of guess done by user

let playGame=true;

//first we will check if the user if availabe to play the game or not
if(playGame){
    submit.addEventListener("click", function(e){
        e.preventDefault()
        const guess = parseInt(userInput.value)  //taking value intered by user and making it a whole number if its in decimal
        console.log(guess)
        validateGuess(guess) //calling the function to check valid input
    })
}

function validateGuess(guess){
    // checks if intered number is betwwn 1-100 or not and its a actual value or not
    if(isNaN(guess)){
        alert('Please Enter a vaild number')
    }
    else if(guess<1){
        alert('Please Enter a number greater than 1')

    }
    else if(guess>100){
        alert('Please Enter a number less than 100')
    }
    else{
        prevGuess.push(guess);
        if(numGuess === 11){
            displayGuess(guess)
            displayMessage(`Game Over. Random number was ${randomNumber}`)
            endGame()
        }
        else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    //cheks if the value is equal to random number or not, if it is equal than print messsgae also if it it low than random number
    //  then print low or if it is high then print high(using displayMessage function)
    if(guess === randomNumber){
        displayMessage(`Congratulations you guessed the right number`)
        endGame()
    }
    else if(guess<randomNumber){
        displayMessage(`The number you entered if less than the acutal number`)
    }
    else if(guess>randomNumber){
        displayMessage(`the number you entered is greater than the actual number`)
    }
}

function displayGuess(guess){
    //it will clear the last value so that next value can be inserted ,will update the array of inserted values, 
    // and the total number of gusses by user and display them
    userInput.value=""
    guessesLot.innerHTML +=`${guess} `
    numGuess++;
    remaining.innerHTML=`${11-numGuess}` 

}

function displayMessage(message){
    //this will just print message in the div call lowOrHi
    lowOrHi.innerHTML=`${message}`
}

function endGame(){
    //to end the game
    userInput.value=""
    userInput.setAttribute('disabled', " ")
    p.classList.add('button')
    p.innerHTML=`<h4 id="newGame">Start a new Game</h4>`
    startOver.appendChild(p)
    playGame=false
    newGame()
}

function newGame(){
    //to start a new game
    const newGameButton= document.querySelector('#newGame')
    newGameButton.addEventListener('click',function(e){
        displayMessage(" ")
        randomNumber= parseInt(Math.random() * 10 + 1)
        prevGuess=[]
        numGuess=1
        guessesLot.innerHTML=""
        remaining.innerHTML=`${11-numGuess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame=true
    })
}
