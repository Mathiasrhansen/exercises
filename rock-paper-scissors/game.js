"use strict"
const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");
const player = document.querySelector("#player1");
const computer = document.querySelector("#player2");
let winText = document.querySelector("#win"); 
let loseText = document.querySelector("#lose"); 
let drawText = document.querySelector("#draw"); 
let userChoice;
let computerChoice;
document.addEventListener("DOMContentLoaded", init);

function init() {
    rockBtn.addEventListener("click", rockClick)
    paperBtn.addEventListener("click", paperClick)
    scissorsBtn.addEventListener("click", scissorsClick)
}

function rockClick() {
    player.setAttribute("class", "player");
    computer.setAttribute("class", "player");
    winText.classList.add("hidden");
    loseText.classList.add("hidden");
    drawText.classList.add("hidden");
    userChoice = "rock";
    player.classList.add("rock")
    compuerChooses();
}

function paperClick() {
    player.setAttribute("class", "player");
    computer.setAttribute("class", "player");
    winText.classList.add("hidden");
    loseText.classList.add("hidden");
    drawText.classList.add("hidden");
    userChoice = "paper";
    player.classList.add("paper")
    compuerChooses();
}

function scissorsClick() {
    player.setAttribute("class", "player");
    computer.setAttribute("class", "player");
    winText.classList.add("hidden");
    loseText.classList.add("hidden");
    drawText.classList.add("hidden");
    userChoice = "scissors";
    player.classList.add("scissors")
    compuerChooses();
}

function compuerChooses() {
    let choiceNumber = Math.floor(Math.random() * 3)
    
    if (choiceNumber === 0) {
        computerChoice = "rock";
        computer.classList.add("rock")
    }
    
    else if (choiceNumber === 1) {
        computerChoice = "paper";
        computer.classList.add("paper")
    }
    
    else {
        computerChoice = "scissors";
        computer.classList.add("scissors")
    }
    
    startAnim();

}

function startAnim() {
    player.classList.add("shake");
    computer.classList.add("shake");
    player.addEventListener("animationend", removeAnim);
    compareChoices();
}

function removeAnim() {
    player.classList.remove("shake");
    computer.classList.remove("shake");
}

function compareChoices() {
    if (userChoice === computerChoice) {
        setTimeout(userDraw, 2100);
    }

    else if (userChoice === "rock" && computerChoice === "paper") {
        setTimeout(userLose, 2100)
    }
    
    else if (userChoice === "rock" && computerChoice === "scissors") {
        setTimeout(userWin, 2100);
    }
    
    else if (userChoice === "paper" && computerChoice === "rock") {
        setTimeout(userWin, 2100);
    }
    
    else if (userChoice === "paper" && computerChoice === "scissors") {
        setTimeout(userLose, 2100);
    }
    
    else if (userChoice === "scissors" && computerChoice === "rock") {
        setTimeout(userLose, 2100);
    }
    
    else if (userChoice === "scissors" && computerChoice === "paper") {
        setTimeout(userWin, 2100);
    }
}

function userWin() {
    winText.classList.remove("hidden");
}

function userLose() {
    loseText.classList.remove("hidden");
}

function userDraw() {
    drawText.classList.remove("hidden");
}