function verificaPalindrome(palavra) {
    let indo = ""
    let voltando = ""

    for (let ii = 0; ii < palavra.length; ii += 1) {
        indo += palavra[ii]
    }
    for (let iv = palavra.length - 1; iv >= 0; iv -= 1) {
        voltando += palavra[iv]
    }

    if (indo === voltando) {
        return true
    } else {
        return false
    }
}

console.log(verificaPalindrome("arara"))