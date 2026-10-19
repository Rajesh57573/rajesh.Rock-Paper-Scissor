let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const winnerMsg = document.querySelector("#msg");

let userScorePara = document.querySelector("#user-score");
let computerScorePara = document.querySelector("#computer-score");

const changeMode = document.querySelector("header span");
const body = document.querySelector("body");
let currentMode = "light";

// change for light and dark mode
changeMode.addEventListener("click", () => {
    if(currentMode === "light") {
        body.classList.add("dark");
        body.classList.remove("light");
        changeMode.textContent = "dark_mode";
        currentMode = "dark";
    } else {
        body.classList.add("light");
        body.classList.remove("dark");
        changeMode.textContent = "light_mode";
        currentMode = "light";
    }
})

// for generate computer random choice
const genComputerChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const choiceIndex = Math.floor(Math.random() * 3);
    return options[choiceIndex];
}

// for draw the game
const drawGame = () => {
    winnerMsg.innerText = "The game is Draw! Play again.";
    winnerMsg.style.backgroundColor = "#f59e0b";
    winnerMsg.style.color = "#111827";
}

// for show the winner
const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin) {
        userScore++; // update the variable
        userScorePara.innerText = userScore; // update the webpage
        winnerMsg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        winnerMsg.style.backgroundColor = "green";
    } else {
        computerScore++;
        computerScorePara.innerText = computerScore;
        winnerMsg.innerText = `You Lose. ${compChoice} beats your ${userChoice}`;;
        winnerMsg.style.backgroundColor = "red";
    }
}

// main play game function (how to game was played)
const playGame = (userChoice) => {
    const compChoice = genComputerChoice();

    // Draw Game
    if(userChoice === compChoice) drawGame();

    else {
        let userWin = true;
        if(userChoice === "rock") {
            // compChoice -> paper, scissor
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper"){
            // compChoice -> rock, scissor
            userWin = compChoice === "scissor" ? false : true;
        } else { // userChoice -> scissor
            // compChoice -> rock, paper
            userWin = compChoice === "rock" ? false : true;
        }

        showWinner(userWin, userChoice, compChoice);
    }
}

// for accessing each choice in choices
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})