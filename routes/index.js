const api = require('./api');

module.exports = server => {
  server.use('/api', api);
};
