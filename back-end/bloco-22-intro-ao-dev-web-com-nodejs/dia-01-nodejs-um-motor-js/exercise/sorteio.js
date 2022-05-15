const readline = require('readline-sync');

const sorteio = () => {
    const numSorteado = Math.floor(Math.random() * 10);
    
    const numInserido = readline.questionInt('Digite um número: ');
    
    const resultado = numSorteado === numInserido ? 'Parabéns, número correto!' : `Opa, não foi dessa vez. O número era ${numSorteado}`;

    console.log(resultado);

    const jogarNovamente = readline.question('Quer jogar novamente? (y/n) ');

    if (jogarNovamente === 'n') {
        return console.log('Tchau!');
    };

    sorteio();
};

sorteio();
