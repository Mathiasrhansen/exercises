const startBtn = document.querySelector(".start");
const lowerBtn = document.querySelector(".lower");
const higherBtn = document.querySelector(".higher");
const correctBtn = document.querySelector(".correct");
const guessText = document.querySelector(".computerGuess");
const guessCounter = document.querySelector(".guessCounter");
let computerGuess, min, max, guessNum;

document.addEventListener("DOMContentLoaded", init);

function init() {
    lowerBtn.disabled = true;
    higherBtn.disabled = true;
    correctBtn.disabled = true;
    computerGuess = 50;
    min = 0;
    max = 100;
    guessNum = 1;
}

startBtn.addEventListener("click", startGame);

function startGame() {
    lowerBtn.disabled = false;
    higherBtn.disabled = false;
    correctBtn.disabled = false;
    startBtn.disabled = true;
    guessCounter.setAttribute("class", "invisible");
    guessText.classList.remove("invisible");
    guessText.textContent = `Jeg gætter på ${computerGuess}`;
}

lowerBtn.addEventListener("click", higherGuess);
higherBtn.addEventListener("click", lowerGuess);
correctBtn.addEventListener("click", correctGuess);

function lowerGuess() {
    guessNum += 1;
    console.log(guessNum);
    max = computerGuess-1;
    let newGuess = Math.floor((min+max)/2);
    computerGuess = newGuess;
    startGame();
}

function higherGuess() {
    guessNum += 1;
    console.log(guessNum);
    min = computerGuess+1;
    let newGuess = Math.floor((min + max)/2);
    computerGuess = newGuess;
    startGame();
}

function correctGuess() {
    lowerBtn.disabled = true;
    higherBtn.disabled = true;
    correctBtn.disabled = true;
    startBtn.disabled = false;
    guessText.textContent = `Tallet du tænkte på, var ${computerGuess}`;
    guessCounter.textContent = `Det tog ${guessNum} forsøg`
    guessCounter.classList.remove("invisible");
    launchConfetti();
    min = 0;
    max = 100;
    computerGuess = 50;
    guessNum = 0;
}

function launchConfetti() {
    const canvas = document.getElementById('confetti-canvas');
    const ctx = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const confettiPieces = [];
    const confettiCount = 150;
    const colors = ['#e2e2e2', '#2c34af', '#45b7d1', '#8a3990', '#6c5ce7', '#a29bfe', '#fd79a8', '#61b4cb'];
    
    for (let i = 0; i < confettiCount; i++) {
        confettiPieces.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height - canvas.height,
            width: Math.random() * 10 + 5,
            height: Math.random() * 10 + 5,
            color: colors[Math.floor(Math.random() * colors.length)],
            rotation: Math.random() * 360,
            rotationSpeed: Math.random() * 10 - 5,
            velocityY: Math.random() * 3 + 2,
            velocityX: Math.random() * 4 - 2,
            opacity: 1
        });
    }
    
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        let activeConfetti = 0;
        
        confettiPieces.forEach((piece) => {
            if (piece.y < canvas.height + 20) {
                activeConfetti++;
                
                ctx.save();
                ctx.translate(piece.x + piece.width / 2, piece.y + piece.height / 2);
                ctx.rotate((piece.rotation * Math.PI) / 180);
                ctx.globalAlpha = piece.opacity;
                ctx.fillStyle = piece.color;
                ctx.fillRect(-piece.width / 2, -piece.height / 2, piece.width, piece.height);
                ctx.restore();
                
                piece.y += piece.velocityY;
                piece.x += piece.velocityX;
                piece.rotation += piece.rotationSpeed;
                piece.velocityY += 0.1;
                
                if (piece.y > canvas.height - 100) {
                    piece.opacity -= 0.02;
                }
            }
        });
        
        if (activeConfetti > 0) {
            requestAnimationFrame(animate);
        } else {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
    }
    
    animate();
}