const socket = io("http://localhost:8000");

const form = document.getElementById('send-container');
const messageInp = document.getElementById('messageInp');
const messageContainer = document.querySelector('.container');

var audio = new Audio('../src/sent_sound.mp3');

function updateScroll() {
    messageContainer.scrollTop = messageContainer.scrollHeight;
}

const append = function (message, position) {
    const messageElement = document.createElement('div');
    messageElement.innerHTML = message;
    if (position == 'mid') {
        messageElement.classList.add('user-joined');
    }
    else {
        messageElement.classList.add('message');
        messageElement.classList.add(position);
    }
    messageContainer.append(messageElement);
    if (position != 'right') {
        audio.play();
    }
    updateScroll();
}

form.addEventListener('submit', function (e) {
    e.preventDefault();//To avoid reloading of page
    const message = messageInp.value;
    append(`You: ${message}`, 'right');
    console.log(message);
    socket.emit('send', message);
    messageInp.value = '';
});

socket.emit('new-user-joined', prompt('Enter Your Name'));

socket.on('user-joined', function (name) {
    append(`${name} joined chat`, 'mid')
});

socket.on('receive', function (data) {
    append(`${data.name}: ${data.message}`, 'left');
});

socket.on('left', function (name) {
    append(`${name} left chat`, 'mid');
});