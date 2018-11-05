const Router = require('express-promise-router');
const router = new Router();
const { writeNumber } = require('../_sheets');

module.exports = router;

router.post('/new/number', (req, res) => {
  console.log(req.body);
});
