const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let selectedBuilding = null;
const buildings = []

canvas.addEventListener("click", (e) => {
    const x = Math.floor(e.offsetX / 50) * 50;
    const y = Math.floor(e.offsetY / 50) * 50;

    if (selectedBuilding) {
        const building = {
            type: selectedBuilding,
            x, y
        };
        buildings.push(building);
        socket.emit("placeBuilding", building);
        draw();
    }
});

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (const b of buildings){
        ctx.fillStyle = b.type === "house" ? "blue" : "green";
        ctx.fillRect(b.x, b.y, 50, 50);
    }
}



