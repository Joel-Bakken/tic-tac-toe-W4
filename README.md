# Tic-Tac-Toe
A web page that allows 2-players to take alternating turns clicking on squares within a 3x3 game board with Xs and Os. The first player to line up 3 squares with their designated symbol horizontally, vertically, or diagonally, wins. If every field in the board is populated with a symbol, but there are no line ups of 3 symbols, the game is a wash with no winners. Immediately after a player clicks on a square, their turn is over and it becomes the other player's turn.

## Code Specs
|Behavior - Plain English|Input|Output|
|---|---|---|
|A player's turn is complete by clicking on an empty square|An empty square is clicked|The player's symbol appears and it becomes the other player's turn|
|A player is given a win notification after they click on a square which completes a 3 square line up vertically, horizontally, or diagonally|Player clicks on an empty square in line with 2 other squares that have their symbols|The player is notified that they have won|
|The game notifies both players that there is no winner if the last square is clicked on and doesn't complete a line of 3 same symbols|Either player clicks on an empty square without completing a line|A message appears declaring no winners|
|Either player enters their names and clicks the Start Playing! button to have the game board appear below and their names displayed|A player inputs their name and clicks the Start Playing! button|The game board appears and their inputted name appears|
|A populated square cannot be altered when clicked upon|Either player clicks on any populated squares|Nothing happens|
|If a user clicks on the New Game button, the player's names stay the same and the symbols are cleared from the board|A user clicks the New Game button|All the symbols disappear from the board and the player's names remain at the top|

## Technologies Used
* HTML
* JavaScript
* jQuery
* Bootstrap

### License
Copyright 2017 Laura Hamilton, Mick Sexton, Esvethlynna Pangelinan, Joel Bakken

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
