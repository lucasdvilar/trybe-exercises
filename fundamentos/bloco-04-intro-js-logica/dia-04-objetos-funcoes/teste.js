let teste = {
    sabor1: "choco",
    sabor2: "frango",
    sabor3: "peru"
}

for (let key in teste) {
    console.log(key)
}

for (let sabor of teste) {
    console.log(sabor)
}