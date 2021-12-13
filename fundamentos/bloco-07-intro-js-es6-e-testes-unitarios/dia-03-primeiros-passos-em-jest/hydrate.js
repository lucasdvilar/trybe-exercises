// hydrate.js
const hydrate = (string) => {
  let glassesOfWater = 0;

  for (let i = 0; i < string.length; i += 1) {
    const parsedCharacter = parseInt(string[i]);

    if (parsedCharacter) {
      glassesOfWater += parsedCharacter;
    }
  }

  let glass = 'copo';

  if (glassesOfWater > 1) {
    glass = 'copos';
  }

  return `${glassesOfWater} ${glass} de água`;
};

module.exports = hydrate;