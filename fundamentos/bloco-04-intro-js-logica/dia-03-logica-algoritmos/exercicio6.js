let n = 19
let sum = 0

for (let i = 2; i < n; i += 1) {
    if (n % i === 0) {
        sum += 1
    }
}

if (sum > 0 || n === 1) {
    console.log("Não é primo!")
} else {
    console.log("É primo!")
}