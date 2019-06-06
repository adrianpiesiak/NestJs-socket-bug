const client = require('socket.io-client');

var socket = client.connect('http://localhost:3000');

socket.on('connect_error', (error) => {
    console.log('unable to connect to socket');
    console.log(error);
})