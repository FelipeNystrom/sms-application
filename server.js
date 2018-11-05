const express = require('express');
const server = express();
const port = process.env.PORT || 7000;

server.use(express.json());
server.use(express.urlencoded());

if (process.env.NODE_ENV === 'production') {
  server.use(express.static(path.join(__dirname, 'client/build')));
  // Anything that doesn't match the above, send back index.html
  server.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
  });
} else {
  server.use(express.static(path.join(__dirname, 'public')));
}

server.listen(port, () => {
  console.log(`Server running on ${port}`);
});
