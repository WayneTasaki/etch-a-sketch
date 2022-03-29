let gameBoard = document.querySelector('.game-board');
let defaultBgColor = '#fafafa'
let defaultBorderStyle = '1px solid lightgrey'
let color = 'black'
noBorderStyle = 'none'


function fillBoard(size) {
  let squares = gameBoard.querySelectorAll('div');
  squares.forEach(div => div.remove())
  gameBoard.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  gameBoard.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  
  let amount = size * size
  for (i = 0; i < amount; i++) {
    let square = document.createElement('div');
    square.addEventListener('mouseover', mouseOverColor)
    square.style.backgroundColor = defaultBgColor;
    square.style.border = defaultBorderStyle
    square.setAttribute('class', 'game-square')
    gameBoard.insertAdjacentElement('beforeend', square);
  }
  
}
// Fills the board with a grid of squares. This is called in the changeSize() function. Size is determined by the value of the range sliders output.
// ------------------


let output = document.getElementById('output')


let slider = document.getElementById('myRange').oninput = function() {
  let value = (this.value - this.min) / (this.max - this.min)*100
  let outputValue = this.value
  output.innerHTML = `${outputValue} x ${outputValue}`;
}
// Adjusts slider value and outputs that value. Ex: Size: 16x16
// --------------------

function changeSize(size) {
  fillBoard(size)
}
// Gives ability to change the grid size by using the slider. This function is added to the range slider in the DOM and the argument passed to both functions is whatever the 'output' of the slider is.
// --------------------
 
function mouseOverColor() {
  let random = '#' + Math.floor(Math.random() * 16777216).toString(16);
  if ((color === 'random')) {
    this.style.backgroundColor = random;
    this.style.border = noBorderStyle;
  } else {
    this.style.backgroundColor = color;
    this.style.border = noBorderStyle;
  }
}
// Main function that changes the squares on mouseover. This is added as an event listener to each square in the fillBoard() function. If the color is random, it will use the 'random' variable which generates a random hex color code, otherwise, it uses a specific color.
// The color chosen will depend on which button is clicked on the page. The default color is black but if a different color is clicked, it will run the toggleColor() function below
// ----------------------

function toggleColor(buttonColor,border) {
  color = buttonColor;
  noBorderStyle = border
}
// This function is added as an onclick event to each button. Since color and noBorderStyle are global variables, this mutates the values in the mouseOverColor() function above.
// -----------------------

function clearBoard() {
  let squares = gameBoard.querySelectorAll('.game-square')
  squares.forEach((div) => div.style.backgroundColor = defaultBgColor);
  squares.forEach((div) => div.style.border = defaultBorderStyle);
}
// Clears the board
// ----------------------


function addRemoveHighlight(){
  if(currentbtn){
    currentbtn.classList.remove("highlight");
  }
  this.classList.add("highlight");
  currentbtn=this;
}  

let controlButtons = document.getElementsByClassName('highlight-hover');
for (var i = controlButtons.length - 1; i >= 0; i--) {
		var currentbtn;
		controlButtons[i].addEventListener('click', addRemoveHighlight)
};
// Function that keeps a button active and highlighted until another is clicked. Mainly just a UX detail
// -----------------------