const cepService = require('../services/cep');

const getCepInfo = async (req, res, next) => {
    const { cep } = req.params;
    const cepInfo = await cepService.getCepInfo(cep);
    if (cepInfo.error) return next(cepInfo.error);
    res.status(200).json(cepInfo);
};

const addCep = async (req, res, next) => {
    const cepInfo = req.body;
    const cep = await cepService.addCep(cepInfo);
    if (cep.error) return next(cep.error);
    res.status(201).json(cep);
};

module.exports = {
    getCepInfo,
    addCep,
};
