const nexmo = require('./nexmo_config');
const { readNumbers } = require('../_sheets');

module.exports = async () => {
  const numbers = await readNumbers();

  numbers.forEach(number => {
    const from = 'bbdk';
    const to = `46${number}`;
    const text = 'det här är det första vi skickar som prov';
    console.log(from, to, text);
  });
};

// nexmo.message.sendSms(from, to, text, console.log);
