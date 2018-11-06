const Router = require('express-promise-router');
const router = new Router();
const { writeNumber } = require('../_sheets');

module.exports = router;

router.post('/new/number', async (req, res) => {
  console.log(req.body);
  const { phoneNumber, name } = req.body;

  if (!phoneNumber) {
    return res
      .status(400)
      .send({ error: 'You must send a valid phonenumber!' });
  }

  if (!name) {
    return res.status(400).send({ error: 'You must provide a name!' });
  }

  if (/[\d\s]{10,15}/.test(phoneNumber) && /[a-zA-ZäöåÄÖÅ\s]{2,}/.test(name)) {
    try {
      await writeNumber(phoneNumber, name);
      res.sendStatus(200);
    } catch (err) {
      res.status(500).json({ error: `something went wrong, ${err}` });
    }
  }
});
