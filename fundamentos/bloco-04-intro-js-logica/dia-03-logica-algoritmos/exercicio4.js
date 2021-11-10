let n = 9 //só funciona para base ímpar

for (let i = 1; i <= n / 2 + 0.5; i += 1) {
    let line = ""
    for (let spaces = n; spaces > i; spaces -= 1) {
        line += " "
    }
    for (let ast = 0; ast < i; ast += 1) {
        line += "*"
    }
    for (let asts2 = 1; asts2 < i; asts2 += 1) {
        line += "*"
    }
    console.log(line)
}