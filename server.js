const express = require('express');
const app = express();
let socketsUsed=new Array();
const http = require('http');
const server = http.createServer(app);
const {
    Server
} = require("socket.io");
const io = new Server(server);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/script.js', (req, res) => {
    res.sendFile(__dirname + '/script.js');
});

app.get('/style.css', (req, res) => {
    res.sendFile(__dirname + '/style.css');
});

io.on('connection', (socket) => {
    console.log('a user connected');
    console.log(socket.id)
    socket.on('disconnect', message => {
        console.log(socket.id + ' has disconnected.')
    })

    socket.on('update', obj=>{
        if(socketsUsed.includes(socket));
        else{
            io.emit('change', obj);
            socketsUsed.push(socket);
            setTimeout(()=>socketsUsed.shift(), 10000)
        }
        console.log(obj)
    })

});

server.listen(3000, () => {
    console.log('listening on *:3000');
});