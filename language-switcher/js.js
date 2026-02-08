"use strict";
const texts = {
  de: {
    texts: [
      { text: "Das Bot", location: ".header" },
      { text: "Das Ro-Bot", location: ".footer" },
    ],
  },
  da: {
    texts: [
      { text: "Båden", location: ".header" },
      { text: "Robotten", location: ".footer" },
    ],
  },
};
let locale = "da";
const language = document.querySelector("#language");

texts[locale].texts.forEach((elm) => {
  document.querySelector(elm.location).textContent = elm.text;
});

language.addEventListener("change", changeLanguage);

function changeLanguage() {
  if (language.value === "da"){
    locale = "da";
  }
  else {
    locale = "de";
  }
  texts[locale].texts.forEach((elm) => {
  document.querySelector(elm.location).textContent = elm.text;
});
}

