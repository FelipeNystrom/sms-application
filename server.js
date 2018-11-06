const express = require('express');
const server = express();
const path = require('path');
const cors = require('cors');
const port = process.env.PORT || 7000;
const mountRoutes = require('./routes');

require('./_sms')();

server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

if (process.env.NODE_ENV === 'production') {
  server.use(express.static(path.join(__dirname, 'client/build')));
  // Anything that doesn't match the above, send back index.html
  server.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
  });
} else {
  server.use(express.static(path.join(__dirname, 'public')));
}

mountRoutes(server);

server.listen(port, () => {
  console.log(`Server running on ${port}`);
});
