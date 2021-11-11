function indexOfHighestValue(array) {
    let highest = 0
    let index = 0

    for (let i = 0; i < array.length; i += 1) {
        if (array[i] > highest) {
            highest = array[i]
            index = i
        }
    }

    return index
}

console.log(indexOfHighestValue([2, 3, 6, 7, 10, 1]))