const path = require('path'),
      http = require('http'),
      express = require('express'),
      socketIO = require('socket.io'),
      {env} = require('./config/config'),
      app = express(),
      server = http.createServer(app),
      io = socketIO(server);

const publicPath = path.join(__dirname, '../public');

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('New user connected');
  socket.on('disconnect', () => {
    console.log('User was disconnected');
  })
});

server.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});

module.exports = {app};