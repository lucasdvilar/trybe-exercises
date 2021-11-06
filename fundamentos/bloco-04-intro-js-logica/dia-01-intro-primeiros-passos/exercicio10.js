const cost = 80
const price = 100

if (cost > 0 && price > 0) {
    var totalCost = cost + cost * 0.2
    var profit = price - totalCost
    console.log(profit * 1000)
} else {
    console.log("error")
}