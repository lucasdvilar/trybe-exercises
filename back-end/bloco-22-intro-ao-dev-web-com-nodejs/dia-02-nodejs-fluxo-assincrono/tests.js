function dividirNumeros(num1, num2) {
  const promise = new Promise((resolve, reject) => {
    if (num2 == 0) reject(new Error("Não pode ser feito uma divisão por zero"));

    const resultado = num1 / num2;
    resolve(resultado)
  });

  return promise;
}

console.log('ola');

dividirNumeros(2, 1)
  .then(result => console.log(`sucesso: ${result}`))
  .catch(err => console.log(`erro: ${err.message}`));

console.log('oi');
