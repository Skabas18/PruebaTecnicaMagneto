// tradeController.js
const Trades = require('../models/trades');

const createTrade = async (req, res) => {
  try {
    const newTradeData = req.body;
    const newTrade = await Trades.create(newTradeData);
    res.status(201).json(newTrade);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while creating the trade' });
  }
};

const getTrade = async (req, res) => {
  try {
      const { type, user_id } = req.query;
      const whereClause = {};
      if (type) {
          whereClause.type = type;
      }
      if (user_id) {
          whereClause.user_id = user_id;
      }
      const trades = await Trades.findAll({
          where: whereClause,
          order: [['id', 'ASC']]
      });
      res.status(200).json(trades);
  } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred while fetching the trades' });
  }
};
const getTradeById = async (req, res) => {
  try {
    const trade = await Trades.findByPk(req.params.id);
    if (trade) {
      res.status(200).json(trade);
    } else {
      res.status(404).json({ error: 'ID not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while fetching the trade' });
  }
};

const handleUnsupportedMethods = (req, res) => {
  res.status(405).json({ error: 'Method not allowed' });
};

module.exports = {
  createTrade,
  getTrade,
  getTradeById,
  handleUnsupportedMethods
};