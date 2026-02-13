"use strict";

window.addEventListener("DOMContentLoaded", start);

const Animal = {
    name: "-default name-",
    desc: "-no desc-",
    type: "-unknown-",
    age: 0
}

const allAnimals = [];

function start( ) {
    console.log("ready");

    registerButtons();
    loadJSON();
}

function registerButtons() {
    document.querySelectorAll("[data-action='filter']")
    .forEach(button => button.addEventListener("click", selectFilter));
}


function loadJSON() {
    fetch("animals.json")
    .then( response => response.json() )
    .then( jsonData => {
        // when loaded, prepare objects
        prepareObjects( jsonData );
    });
}

function prepareObjects( jsonData ) {
    jsonData.forEach( jsonObject => {
        const animal = Object.create(Animal);
        
        const fullname = jsonObject.fullname;

        const firstSpace = fullname.indexOf(" ");
        const secondSpace = fullname.indexOf(" ", firstSpace+1);
        const lastSpace = fullname.lastIndexOf(" ");

        const name = fullname.substring(0, firstSpace);
        const desc = fullname.substring(secondSpace+1, lastSpace);
        const type = fullname.substring(lastSpace+1);

        animal.name = name;
        animal.desc = desc;
        animal.type = type;

        animal.age = jsonObject.age;

        allAnimals.push(animal);
    });

    displayList(allAnimals);
}

function selectFilter(event) {
    const filter = event.target.dataset.filter;
    console.log(filter);
    filterList(filter);
}

function filterList(animaltype) {
    let filteredList = allAnimals;

    if(animaltype === "cat") {
        filteredList = allAnimals.filter(isCat);
    }
    else if (animaltype === "dog"){
        filteredList = allAnimals.filter(isDog);
    }

    displayList(filteredList);
}

function displayList(animals) {
    // clear the list
    document.querySelector("#list tbody").innerHTML = "";

    // build a new list
    animals.forEach( displayAnimal );
}

function displayAnimal( animal ) {
    // create clone
    const clone = document.querySelector("template#animal").content.cloneNode(true);

    // set clone data
    clone.querySelector("[data-field=name]").textContent = animal.name;
    clone.querySelector("[data-field=desc]").textContent = animal.desc;
    clone.querySelector("[data-field=type]").textContent = animal.type;
    clone.querySelector("[data-field=age]").textContent = animal.age;

    // append clone to list
    document.querySelector("#list tbody").appendChild( clone );
}



function isCat(animal) {
    return animal.type === "cat";
} 

function isDog(animal) {
    return animal.type === "dog";
} 

