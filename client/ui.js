//const socket = io();
//numbers
let houses = 2;
let powerplants = 1;
let farms = 1;
let factories = 0;
let barracks = 0;


//menu

/* function newGame(){
    socket.emit("newBtn", buildings);
}

function saveGame() {
    socket.emit("saveBtn", buildings);
}

function loadGame(){
    socket.emit("loadBtn", buildings);
} */

//builders
function addBuilding(buildingType){
    switch(buildingType){
        case "house":
            houses++;
            updateOutput("quantityHouse", houses);
            break;
        case "powerplant":
            powerplants++;
            updateOutput("quantityPowerplant", powerplants);
            break;
        case "farm":
            farms++;
            updateOutput("quantityFarm", farms);
            break;
        case "factory":
            factories++;
            updateOutput("quantityFactory", factories);
            break;
        case "barracks":
            barracks++;
            updateOutput("quantityBarracks", barracks);
            break;
    }  
}

function updateOutput(id, newValue){
    const element = document.getElementById(id);
    element.value = newValue;
}



