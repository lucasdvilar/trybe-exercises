const fs = require('fs');

const writeFiles = (file, content) => {
    fs.writeFileSync(`./${file}`, content);
    return 'ok';
};

module.exports = writeFiles;
