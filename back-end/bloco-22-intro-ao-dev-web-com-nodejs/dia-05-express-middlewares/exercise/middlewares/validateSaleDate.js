const checkDateFormat = require('../helpers/checkDateFormat');

const validateSaleDate = (req, res, next) => {
    const { infos: { saleDate } } = req.body;
    if(!saleDate) return res.status(400).json({ "message": "O campo saleDate é obrigatório" });
    if(!checkDateFormat(saleDate)) return res.status(400).json({ "message": "O campo saleDate não é uma data válida" });
    next();
};

module.exports = validateSaleDate;
