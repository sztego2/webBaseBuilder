//const socket = io();
//economics
let population = 0;
let power = 0;
let food = 0;
let army = 0;
let money = 100;


//buildings
let houses = 0;
let powerplants = 0;
let farms = 0;
let factories = 0;
let barracks = 0;


//menu

 function newGame(){
    houses = powerplants = farms = factories = barracks = 0;
    population = power = food = army = 0;
    money = 100;
    updateOutput("quantityHouse", houses);
    updateOutput("quantityPowerplant", powerplants);
    updateOutput("quantityFarm", farms);
    updateOutput("quantityFactory", factories);
    updateOutput("quantityBarracks", barracks);
    updateOutput("population", population);
    updateOutput("power", power);
    updateOutput("food", food);
    updateOutput("army", army);
    updateOutput("money", money);
}
/*
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
            if(money >= 10){
                houses++;
                population += 40;
                money -= 10;
                updateOutput("quantityHouse", houses);
                updateOutput("population", population);
                updateOutput("money", money);
                break;
            } else {
                break;
            }
        case "powerplant":
            if(money >= 50 && population >= 20){
                powerplants++;
                power += 50;
                population -= 20;
                money -= 50;
                updateOutput("quantityPowerplant", powerplants);
                updateOutput("power", power);
                updateOutput("population", population);
                updateOutput("money", money);
                break;
            } else {
                break;
            }
        case "farm":
            if(money >= 20 && population >= 10){
                farms++;
                food += 20;
                population -= 10;
                money -= 20;
                updateOutput("quantityFarm", farms);
                updateOutput("food", food);
                updateOutput("population", population);
                updateOutput("money", money);
                break;
            } else {
                break;
            }
        case "factory":
            if(population >= 20 && power >= 20 && food >= 20){
                factories++;
                population -= 20;
                power -= 20;
                food -= 20;
                money += 100;
                updateOutput("quantityFactory", factories);
                updateOutput("population", population);
                updateOutput("power", power);
                updateOutput("food", food);
                updateOutput("money", money);
                break;
            } else {
                break;
            }            
        case "barracks":
            if(money >= 500 && food >= 100){
                barracks++;
                army++;
                food -= 100;
                money -= 500;            
                updateOutput("quantityBarracks", barracks);
                updateOutput("food", food);
                updateOutput("money", money);
                updateOutput("army", army);
                break;
            } else {
                break;
            }
    }  
}

function updateOutput(id, newValue){
    const element = document.getElementById(id);
    element.value = newValue;
}



