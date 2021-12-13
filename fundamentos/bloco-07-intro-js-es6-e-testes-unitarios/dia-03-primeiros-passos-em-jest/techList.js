const techList = (techArray, name) => {
  if (techArray.length > 0) {
    techArray.sort();
    const objectArray = [];

    for(let tech of techArray) {
      const object = {
        tech: tech,
        name: name
      }
      objectArray.push(object);
    }

    return objectArray;
  } else {
    return 'Vazio!';
  }
}

module.exports = techList;