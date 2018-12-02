var express = require('express');
var router = express.Router();
var financeController = require('../controllers/financeController.js');

/*
 * GET
 */
router.get('/', financeController.list);

/*
 * GET
 */
router.get('/:id', financeController.show);

/*
 * GET
 */
router.get('/year/:year', financeController.year);


/*
 * POST
 */
router.post('/', financeController.create);

/*
 * PUT
 */
router.put('/:id', financeController.update);

/*
 * DELETE
 */
router.delete('/:id', financeController.remove);

module.exports = router;
