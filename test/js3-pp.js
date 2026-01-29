const firstName = "Peter";
const animalType = "hund";
const animalName = "Søren";
presentPet(firstName, animalType, animalName);

const navn = "Niels";
const dyrerace = "kat";
const dyrenavn = "Torben";
presentPet(navn, dyrerace, dyrenavn)

presentPet("Svend", "miaverkat", "Finn");

presentPet(navn, "skildpadde", dyrenavn);

// Variablerne bliver logget i den rækkefølge der står i funktionen
presentPet(animalName, firstName, animalType);

function presentPet(firstName, animalType, animalName) {
    console.log(`My name is ${firstName}, I have a ${animalType} called ${animalName}`);
}