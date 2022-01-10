const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  const name = names.reduce((acc, curr) => {
    return acc + curr.split('').reduce((acc, curr) => {
      if (curr === 'a' || curr === 'A') {
        return acc + 1;
      } else {
        return acc;
      }
    }, 0)
  }, 0)

  return name;
}

console.log(containsA());