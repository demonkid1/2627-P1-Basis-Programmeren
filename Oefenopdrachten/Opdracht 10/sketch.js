let kleuren = ["red", "green",
  "blue", "orange",
  "purple", "yellow"];
let afbeeldingen = ["elephant", "giraffe",
   "hippo", "monkey",
   "panda", "parrot",
   "penguin", "pig",
   "rabbit", "snake"];
let functions = [RED, GREEN, BLUE, ORANGE, PURPLE, YELLOW]
let currentC = "grey"
let buttons = []
let image = []

function preload() {
	for (let i = 0; i < assets.length; i++) {

	}
}


function setup() {
  createCanvas(800, 400);
  for(let i = 0; i < 6; i++){
    let button = createButton(kleuren[i]);
	button.position(100*i+10, 350);
	button.style('background-color', kleuren[i]);
	button.style('font-size', '16px');
  button.mousePressed(functions[i]);
  buttons.push(button)
  }
}

function RED() {
  currentC = "red"
  
}

function GREEN() {
  currentC = "green"
}
function BLUE() {
  currentC = "blue"
}
function ORANGE() {
  currentC = "orange"
}
function PURPLE() {
  currentC = "purple"
}
function YELLOW() {
  currentC = "yellow"
}

function draw() {
  background(currentC);
  for(let i = 0; i < buttons.length; i++){
    if(currentC == kleuren[i]){
        buttons[i].hide();
  }else{
    buttons[i].show();
  }
  }

}

