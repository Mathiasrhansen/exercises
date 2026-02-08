"use strict";
const vehicles = [
  { type: "Bus", fuel: "Diesel", passengers: 45, stops: ["Nørrebrogade", "Elmegade"] },
  { type: "Bil", fuel: "Benzin", passengers: 4, ownedBy: "Klaus" },
  { type: "Cykel", fuel: "Rugbrød", passengers: 0, ownedBy: "Jonas", isElectric: true },
  { type: "Bil", passengers: 5, ownedBy: "Elon", isElectric: true },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Fonda" },
  { type: "Cykel", fuel: "Rugbrød", passengers: 2, ownedBy: "Vingegård", isTandem: true },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Yolanda" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Børge" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Jonas" },
  { type: "Løbehjul", passengers: 1, isElectric: true },
];
const tbodyPointer = document.querySelector("tbody");
const showAllBtn = document.querySelector(".filter1");
const showElectricBtn = document.querySelector(".filter2");
const showElectricSeats = document.querySelector(".filter3");
const showElectricJonas = document.querySelector(".filter4");
const showRugbrødSeats = document.querySelector(".filter5");

const onlyElectric = vehicles.filter(isElectric);
const onlyMoreThanTwoSeats = vehicles.filter(isMoreThanTwoSeats);
const jonasOwned = vehicles.filter(isJonasOwnerElectric);
const onylyRugbrødMoreseats = vehicles.filter(isRugbrødMore);

showAllBtn.addEventListener("click", () => showTheseVehicles(vehicles));
showElectricBtn.addEventListener("click", () => showTheseVehicles(onlyElectric));
showElectricSeats.addEventListener("click", () => showTheseVehicles(onlyMoreThanTwoSeats));
showElectricJonas.addEventListener("click", () => showTheseVehicles(jonasOwned));
showRugbrødSeats.addEventListener("click", () => showTheseVehicles(onylyRugbrødMoreseats));

function showTheseVehicles(arr) {
  tbodyPointer.innerHTML = "";
  arr.forEach((each) => {
    tbodyPointer.innerHTML +=
  `<tr>
  <td>${each.type}</td>
  <td>${each.fuel ?? "-"}</td>
  <td>${each.passengers}</td> 
  <td>${each.stops ?? "-"}</td>
  <td>${each.ownedBy}</td>
  <td>${each.isElectric ?? "-"}</td>
  <td>${each.isTandem ?? "-" }</td>
</tr>`;
  });
}

function isElectric(vehicles) {
  if (vehicles.isElectric === true) {    
    return true;
  }
  else {
    return false;
  }
}

function isMoreThanTwoSeats(vehicles) {
  if (vehicles.passengers > 2) {
    return true;
  }
  else {
    return false;
  }
}

function isJonasOwnerElectric(vehicles) {
  if (vehicles.ownedBy === "Jonas" && vehicles.isElectric === true) {
    return true;
  }
  else {
    return false;
  }
}

function isRugbrødMore(vehicles) {
  if (vehicles.fuel === "Rugbrød" && vehicles.passengers > 1) {
    return true;
  }
  else {
    return false;
  }
}

// Kan forkortes til
// document.querySelectorAll("button").forEach((btn) => {
//   btn.addEventListener("click", klik)
// })

// function klik(evt) {
//   evt.target;
//   console.log(evt.target.dataset.filter)
//   if (evt.target.dataset.filter==="eletricVeh"){
//     showTheseVehicles(electricVeh);
//   }
//   else if (evt.target.dataset.filter==="moreTahnTwoSeatsVeh"){
//     showTheseVehicles(moreThanTwoSeatsVeh);
//   }
//   else if (evt.target.dataset.filter==="ownedByJonasVeh"){
//     showTheseVehicles(ownedByJonasVeh);
//   }
//   else if (evt.target.dataset.filter="ryeBreadMoreThanOneVeh"){
//     showTheseVehicles(ryeBreadMoreThanOneVeh);
//   }
//   else if (evt.target.dataset.filter="nofilter"){
//     showTheseVehicles(vehicles);
//   }
// }

// laver en shallow copy af vehicles, med objekterne hvor isElectric er true
// const electricVeh = vehicles.filter(vehicles=>vehicles.isElectric);

// laver en shallow copy af vehicles, med objekterne der har mere end 2 passengers
// const moreThanTwoSeatsVeh = vehicles.filter(vehicles=>vehicles.passengers>2);

// laver en shallow copy af vehicles, med objekterne der er ownedBy Jonas og isElectric er true
// const ownedByJonasVeh = vehicles.filter(vehicles=>vehicles.ownedBy === "Jonas" && vehicles.isElectric);

// laver en shallow copy af vehicles, med objekterne der har rubrød som fuel og mere end én passager
// const ryeBreadMoreThanOneVeh = vehicles.filter(vehicles=>vehicles.fuel === "Rugbrød" && vehicles.passengers > 1);