import "./style.css";
import {displayHome} from "./home.js";
import {displayMenu} from "./menu.js";
import {displayReservation} from "./reservation.js";

const homeBtn = document.querySelector("#home-btn");
const menuBtn = document.querySelector("#food-menu-btn");
const reservBtn = document.querySelector("#reserv-btn");

//initilization on Home page
displayHome();

homeBtn.addEventListener("click", (event) =>{
    displayHome();
});

menuBtn.addEventListener("click", (event) =>{
    displayMenu();
});

reservBtn.addEventListener("click", (event) =>{
    displayReservation();
});

