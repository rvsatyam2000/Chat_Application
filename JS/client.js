const socket = io("http://localhost:8000");

const form = document.getElementById('send-container');
const messageInp = document.getElementById('messageInp');
const messageContainer = document.querySelector('.container');

socket.emit('new-user-joined', prompt('Enter Your Name'));