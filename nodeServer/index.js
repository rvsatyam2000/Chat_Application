// Node server which will handle socket io connections
const io = require("socket.io")(8000)
const users = {}

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
    socket.on('disconnect', function(message){
        socket.broadcast.emit('left', users[socket.id]);
        delete users[socket.id];
    });
});

