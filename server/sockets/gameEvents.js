module.exports = (io) => {
    io.on("connection", (socket) => {
        console.log("User connected:", socket.id);

        socket.on("placeBuilding", (data) => {
            //optional: validate
            console.log("Placing building:". data);
            //Broadcast to others if multiplayer
            socket.broadcast.emit("buildingPlaced". data);
        });

        socket.on("saveBase", async (buildings) => {
            // Save to DB
            console.log("Saving base...")
            //e.g.BaseModel.save({owner: socket.id, buildings})
        });
    });
};