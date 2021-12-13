// Desafio 1
function compareTrue(a, b) {
  return a && b
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2

  return area
}

// Desafio 3
function splitSentence(string) {
  let array = string.split(" ")

  return array
}

// Desafio 4
function concatName(stringsArray) {
  let lastFirst = `${stringsArray[stringsArray.length - 1]}, ${stringsArray[0]}`

  return lastFirst
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = wins * 3 + ties * 1

  return points
}

// Desafio 6
function highestCount(numbersArray) {
  let highest = numbersArray[0]
  let amount = 0

  for (let number of numbersArray) {
    if (number > highest) {
      highest = number
    }
  }

  for (let number of numbersArray) {
    if (number === highest) {
      amount += 1
    }
  }

  return amount
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let cat1distance = 0
  let cat2distance = 0

  if (cat1 > mouse) {
    cat1distance = cat1 - mouse
  } else {
    cat1distance = mouse - cat1
  }

  if (cat2 > mouse) {
    cat2distance = cat2 - mouse
  } else {
    cat2distance = mouse -cat2
  }

  if (cat1distance < cat2distance) {
    return "cat1"
  } else if (cat2distance < cat1distance) {
    return "cat2"
  } else {
    return "os gatos trombam e o rato foge"
  }
}

// Desafio 8
function fizzBuzz(numbersArray) {
  let array = []
  
  for (let number of numbersArray) {
    if (number % 3 === 0 && number % 5 === 0) {
      array.push("fizzBuzz")
    } else if (number % 3 === 0) {
      array.push("fizz")
    } else if (number % 5 === 0) {
      array.push("buzz")
    } else {
      array.push("bug!")
    }
  }

  return array
}

// Desafio 9
function encode(string) {
  let encoded = ""

  for (let char of string) {
    switch (char) {
      case "a":
        encoded += "1"
        continue
      case "e":
        encoded += "2"
        continue
      case "i":
        encoded += "3"
        continue
      case "o":
        encoded += "4"
        continue
      case "u":
        encoded += "5"
        continue
      default:
        encoded += char
        continue
    }
  }

  return encoded
}

function decode(encodedString) {
  let decoded = ""

  for (let char of encodedString) {
    switch (char) {
      case "1":
        decoded += "a"
        continue
      case "2":
        decoded += "e"
        continue
      case "3":
        decoded += "i"
        continue
      case "4":
        decoded += "o"
        continue
      case "5":
        decoded += "u"
        continue
      default:
        decoded += char
        continue
    }
  }

  return decoded
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};