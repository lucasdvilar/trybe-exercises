let n = 5

for (let i = 1; i <= n; i += 1) {
    let line = ""
    for (let spaces = n; spaces > i; spaces -= 1) {
        line += " "
    }
    for (let ast = 0; ast < i; ast += 1) {
        line += "*"
    }
    console.log(line)
}