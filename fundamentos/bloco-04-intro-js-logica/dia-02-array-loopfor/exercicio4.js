let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]
let sum = 0

for (let number of numbers) {
    sum += number
}

let average = sum / numbers.length
console.log(average)

average > 20 ? console.log("maior que 20") : console.log("menor que 20") //ternary operator