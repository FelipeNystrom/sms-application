const nexmo = require('./nexmo_config');
const { readNumbers } = require('../_sheets');

module.exports = async () => {
  const numbers = await readNumbers();

  numbers.forEach(person => {
    const from = 'bbdk';
    const to = `46${person.nummer}`;
    const text = `Hej ${
      person.namn
    }! \n Det här är ett test sms på vår nya sms tjänst! \n Hälsningar,\n BigBelly och Dynamitklubben`;

    console.log(from, to, text);
    // nexmo.message.sendSms(from, to, text, console.log);
  });
};
