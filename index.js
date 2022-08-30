const express = require('express');
const bodyParser = require('body-parser');
const socket = require('socket.io')

const app = express();
app.use(bodyParser.urlencoded({extended: false}));//parse urlencoded data
app.use(express.static('public'));//serves static files
app.set('view engine', 'ejs');//sees files from views folder
var port = process.env.PORT || 3000;

//Render Index page
app.get('/', (req, res) => {
    res.render('index')
})
//Start Server
const server = app.listen(port, () => {
    console.log(`Server Running on ${port}`)
})
// Node server which will handle socket io connections
const io = socket(server);
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
    socket.on('disconnect', function (message) {
        socket.broadcast.emit('left', users[socket.id]);
        delete users[socket.id];
    });
});

