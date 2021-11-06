let chessPiece = prompt("Insert here the chess piece: ").toLowerCase()

if (chessPiece === "king") {
    console.log("every direction, but only one square per move");
} else if (chessPiece === "queen") {
    console.log("columns, ranks and diagonals")
} else if (chessPiece === "bishop") {
    console.log("diagonals")
} else if (chessPiece === "knight") {
    console.log("L")
} else if (chessPiece === "rook") {
    console.log("columns and ranks")
} else if (chessPiece === "pawn") {
    console.log("one square forward per move (can be two in the beginning), it only captures in the first superior diagonal square");
} else {
    console.log("error")
}