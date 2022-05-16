const exercise = (n1, n2, n3) => {
    const promise = new Promise((resolve, reject) => {
        if (typeof n1 !== 'number' || typeof n2 !== 'number' || typeof n3 !== 'number') {
            reject(new Error('Informe apenas números'));
        }

        const result = (n1 + n2) * n3;

        result < 50 ? reject(new Error('Valor muito baixo')) : resolve(result);
    });

    return promise;
};

exercise(20, 2, 3)
    .then((result) => console.log('Resultado:', result))
    .catch((err) => console.log(err.message));

const exerciseWithAsyncAwait = async (n1, n2, n3) => {
    try {
        const promise = await new Promise((resolve, reject) => {
            if (typeof n1 !== 'number' || typeof n2 !== 'number' || typeof n3 !== 'number') {
                reject(new Error('Informe apenas números'));
            }
    
            const result = (n1 + n2) * n3;
    
            result < 50 ? reject(new Error('Valor muito baixo')) : resolve(result);
        });
        console.log('Resultado:', promise);
    } catch (err) {
        console.log('Erro:', err.message);
    };
};

exerciseWithAsyncAwait(1, 2, 3);
