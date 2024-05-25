const express = require('express');
const router = express.Router();
const { createTrade, getTrade, getTradeById, handleUnsupportedMethods } = require('../controllers/trades');

router.post('/', createTrade);
router.get('/', getTrade);
router.get('/:id', getTradeById);
router.delete('/:id', handleUnsupportedMethods);
router.put('/:id', handleUnsupportedMethods);
router.patch('/:id', handleUnsupportedMethods);
module.exports = router;
