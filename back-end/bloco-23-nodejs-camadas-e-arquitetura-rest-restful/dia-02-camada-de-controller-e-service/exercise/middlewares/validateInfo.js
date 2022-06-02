const Joi = require('joi');

const validateInfo = (req, _res, next) => {
    const bodyInfo = req.body;
    const { error } = Joi.object({
        cep: Joi.required(),
        logradouro: Joi.required(),
        bairro: Joi.required(),
        localidade: Joi.required(),
        uf: Joi.required(),
    }).validate(bodyInfo);
    if (error) next({ code: 'invalidData', message: error.details[0].message });
    const cepRegex = /\d{5}-?\d{3}/;
    const isValid = cepRegex.test(bodyInfo.cep);
    if (!isValid) next({ code: 'invalidData', message: 'CEP inválido!' });
    next();
};

module.exports = validateInfo;
