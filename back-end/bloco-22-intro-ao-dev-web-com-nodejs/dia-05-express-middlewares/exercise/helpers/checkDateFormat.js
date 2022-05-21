const checkDateFormat = (date) => {
    const test = date.split('/');
    return test.length === 3 && test[0].length === 2 && test[1].length === 2 && test[2].length === 4;
};

module.exports = checkDateFormat;
