"use strict";

getJson();

setInterval(getJson, 10000);

const background = document.querySelector(".queueContainer");

async function getJson(){
    const response = await fetch("https://kea-alt-del.dk/kata-distortion/");
    const data = await response.json();

    showData(data.inQueue);
}

function showData(number){
    document.querySelector("h1").innerHTML = `${number}`;

    if (number < 5){
        background.style.backgroundColor = "green";
    }
    else if (number > 5 && number < 20){
        background.style.backgroundColor = "orange"; 
    }
    else {
        background.style.backgroundColor = "red";
    }
}