const Router = require('express-promise-router');
const router = new Router();
const { writeNumber } = require('../_sheets');

module.exports = router;

router.post('/new/number', async (req, res) => {
  console.log(req.body);
  const { phoneNumber } = req.body;
  if (/[\d\s]{10,15}/.test(phoneNumber)) {
    try {
      const result = await writeNumber(phoneNumber);
      res.sendStatus(200);
    } catch (err) {
      res.status(500).json({ error: `something went wrong, ${err}` });
    }
  }
});
