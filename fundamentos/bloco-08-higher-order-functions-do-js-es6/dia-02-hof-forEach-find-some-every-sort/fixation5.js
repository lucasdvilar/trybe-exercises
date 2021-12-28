const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => {
  let isContained = arr.some((currentName) => currentName === name);

  return isContained;
}

console.log(hasName(names, 'Ana'))