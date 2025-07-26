const socket = io();

function selectBuilding(type) {
    selectBuilding = type;
}

function saveBase() {
    socket.emit("saveBase", buildings);
}