let grossSalary = 3000

if (grossSalary <= 1556.94) {
    var inssAliquot = grossSalary *  0.08
} else if (grossSalary <= 2594.92) {
    inssAliquot = grossSalary * 0.09
} else if (grossSalary <= 5189.82) {
    inssAliquot = grossSalary * 0.11
} else {
    inssAliquot = 570.88
}
let baseSalary = grossSalary - inssAliquot

if (baseSalary <= 1903.98) {
    var irAliquot = baseSalary
} else if (baseSalary <= 2826.65) {
    irAliquot = baseSalary * 0.075 - 142.8
} else if (baseSalary <= 3571.05) {
    irAliquot = baseSalary * 0.15 - 354.8
} else if (baseSalary <= 4664.68) {
    irAliquot = baseSalary * 0.225 - 636.13
} else {
    irAliquot = baseSalary * 0.275 - 869.36
}
let netSalary = baseSalary - irAliquot

console.log("R$" + netSalary)