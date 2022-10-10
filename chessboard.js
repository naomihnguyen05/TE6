// console.log('Hello, world!')
//creating a chessboard
var size = 8;
var board = "";
for (var i = 0; i < size; i++) {
  for (var a = 0; a < size; a++) {
    board += (a % 2) == (i % 2) ? " ": "#";
  }
  board += "\n";
}
console.log(board);
