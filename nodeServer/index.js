// Node server which will handle socket io connections
const express = require('express')
const app = express()

const io = require("socket.io")(8000)
const users = {}


app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

//io.on listens on all connections
io.on('connection', function (socket) {
    //socket.on defines what to do, when particular event is emmited.
    socket.on('new-user-joined', function (name) {
        console.log('New User Joined', name);
        users[socket.id] = name;
        //emits user-joined event to all other connections
        socket.broadcast.emit('user-joined', name);
    });
    socket.on('send', function (message) {
        socket.broadcast.emit('receive', { message: message, name: users[socket.id] });
    });
});