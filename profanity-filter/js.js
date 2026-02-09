const curseWords = [  
    {    bad: "var",    good: "const",  },
    {    bad: "float",    good: "grid",  },
    {    bad: "marquee",    good: "just don't",  },
];

const textP = document.querySelector(".paragraphText");
const textBtn = document.querySelector(".knap");
const theText = document.querySelector("p");
const body = document.querySelector("body");
let clickedChecker;

textBtn.addEventListener("click", click);

function click() {
    if (clickedChecker){
        const dialog = document.createElement("dialog");
        body.appendChild(dialog);
        const dialogText = document.createElement("p");
        dialogText.textContent = "Teksten er allerede blevet gjort safe for work";
        dialog.appendChild(dialogText);
        const closeBtn = document.createElement("button");
        closeBtn.textContent = "Luk";
        dialog.appendChild(closeBtn);
        dialog.showModal();
        
        closeBtn.addEventListener("click", () => {
          dialog.close();
        });
    }
    else {
        clickedChecker = true;
        fixText();
    }
}


function fixText() {
    let textContent = textP.textContent;
    curseWords.forEach(element => {
        textContent = textContent.replaceAll(element.bad, element.good)
    });
    textP.textContent = textContent;
}