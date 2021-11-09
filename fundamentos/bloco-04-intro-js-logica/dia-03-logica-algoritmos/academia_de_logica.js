// 01 - Mensagem codificada 
// Elabore uma função que ao receber uma string como parâmetro retorne outra string com a posição de cada caractere
// multiplicado por 3 no lugar do caractere. Exemplo: decodeString("Trybe") retorna "036912"

let string = "Trybe"
let secondString = ""

for (let i = 0; i < string.length; i += 1) {
    //secondString = secondString.concat(i * 3)
    secondString += i * 3
}

console.log(secondString)

// 02 - Calcular a soma de 1 até 1000
// Faça um algoritmo que calcule a soma de 1 a 1000 usando a estrutura "for" e retorne no formato:
// A soma de 1 a 1000 é: X.

let sum = 0

for (let i = 1; i <= 1000; i += 1) {
    sum += i
}

console.log("A soma de 1 a 1000 é: " + sum)

// 03 - Escreva seu nome N vezes
// Faça um algoritmo usando a estrutura "FOR" que escreva 20 vezes seu nome no terminal.


for (let i = 0; i < 20; i += 1) {
    console.log("Lucas")
}

// 04 - Números divisíveis por 3
// Crie um algoritmo que conte quantos números do intervalo entre 2 e 150 são divisíveis por 3.
// Caso a quantidade seja igual a 50, exiba uma mensagem secreta.

amount = 0

for (let i = 2; i <= 150; i += 1) {
    if (i % 3 == 0) {
        amount += 1
    }
}

if (amount == 50) {
    console.log("mensagem secreta")
}

// 05 - Imprima os números ímpares
//A Dora aventureira gostaria de ter uma lista com todos o números ímpares entre 1 e 50.
//Crie um algoritmo que exibe todos os números inteiros ímpares desse intervalo.

for (let i = 1; i <= 50; i += 1) {
    if (i % 2 != 0) {
        console.log(i)
    }
}

// 06 - Ordem decrescente
// Escreva um algoritmo que imprima os números inteiros do intervalo de 100 a 200 em ordem decrescente.

for (i = 200; i >= 100; i -= 1) {
    console.log(i)
}