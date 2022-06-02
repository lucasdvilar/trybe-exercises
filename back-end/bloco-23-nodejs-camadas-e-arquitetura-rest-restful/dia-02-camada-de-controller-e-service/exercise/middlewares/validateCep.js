const validateCep = (req, _res, next) => {
    const { cep } = req.params;
    const cepRegex = /\d{5}-?\d{3}/;
    const isValid = cepRegex.test(cep);
    if (!isValid) next({ code: 'invalidData', message: 'CEP inválido!' });
    next();
};

module.exports = validateCep;
