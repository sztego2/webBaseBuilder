const socket = io();

function selectBuilding(type) {
    selectBuilding = type;
}

function newGame(){
    socket.emit("newBase", buildings)
}

function saveGame() {
    socket.emit("saveBase", buildings);
}

function loadGame(){
    socket.emit("loadBase", buildings);
}