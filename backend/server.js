// DELETED the .git folder in frontend
const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server, {
    cors: {
        origin: "*",
    }
});


io.on('connection', (socket) => {
    console.log(socket);
    console.log("Socket is active");
    socket.on("chat", (payload) => {
        console.log(payload);
        io.emit("chat", payload);
    })

})



// app.listen(5000, () => {
//     console.log("Listinening to port 5000")
// })
server.listen(5000, () => {
    console.log("Listinening to port 5000")
})