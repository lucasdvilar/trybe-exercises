function indexOfLowestValue(array) {
    lowest = array[0]
    index = 0

    for (let i = 0; i < array.length; i += 1) {
        if (array[i] < lowest) {
            lowest = array[i]
            index = i
        }
    }

    return index
}

console.log(indexOfLowestValue([2, 4, 6, 7, 10, 0, -3]))