const tal = ("Random", Math.floor(Math.random()*100));
const sendBtn = document.querySelector(".send");
const guess = document.querySelector(".guess");
const message = document.querySelector(".message");

// showRandom();
// function showRandom() {
//     console.log(tal);
//     document.querySelector(".number").textContent = tal;
// }

sendBtn.addEventListener("click", guessRandom);

function guessRandom() {
    // message.textContent = "";
    console.log("virker");
    console.log(guess.valueAsNumber);
    
    if (guess.valueAsNumber < tal) {
        message.textContent = "For lavt"
    }
    
    if (guess.valueAsNumber > tal) {
        message.textContent = "For højt"
    }

    if (guess.valueAsNumber == tal) {
        message.textContent = "jubi du gættede det";
        document.body.style.cssText = `background-color: green;`
    }

}