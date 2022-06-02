const cepModel = require('../models/cep');

const getCepInfo = async (cep) => {
    const cepInfo = await cepModel.getCepInfo(cep);
    if (cepInfo.length === 0) return { error: { code: 'notFound', message: 'CEP não encontrado' } };
    return cepInfo;
};

const addCep = async (cepInfo) => {
    const cepExists = await cepModel.getCepInfo(cepInfo.cep);
    if (cepExists.length > 0) return { error: { code: 'alreadyExists', message: 'CEP já existente' } };
    return cepModel.addCep(cepInfo);
};

module.exports = {
    getCepInfo,
    addCep,
};
