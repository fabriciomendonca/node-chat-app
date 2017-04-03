const path = require('path'),
      http = require('http'),
      express = require('express'),
      socketIO = require('socket.io'),
      {env} = require('./config/config'),
      {generateMessage} = require('./utils/message'),
      app = express(),
      server = http.createServer(app),
      io = socketIO(server);

const publicPath = path.join(__dirname, '../public');

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('New user connected');
  socket.emit('newMessage', generateMessage('Admin', 'Welcome to the chat app'));

  socket.broadcast.emit('newMessage', generateMessage('Admin', 'New user has joined the room'));

  socket.on('createMessage', message => {
    console.log('createMessage', message);
    io.emit('newMessage', {
      from: message.from,
      text: message.text,
      createdAt: new Date().getTime()
    });
    /*socket.broadcast.emit('newMessage', {
      from: message.from,
      text: message.text,
      createdAt: new Date().getTime()
    })*/
  });

  socket.on('disconnect', () => {
    console.log('User was disconnected');
  });
});

server.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});

module.exports = {app};