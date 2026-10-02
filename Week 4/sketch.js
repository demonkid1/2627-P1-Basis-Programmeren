let DATA = [
];

let  posX = []
let  posY = []
let  posSize = []
let  posRX = []
let  posRY = []
let  posSizeR = []
let  R = []
let  G = []
let  B = []
let  angle = 0
let  rotationSpeed =[]




//starting stats
function setup() {
  posRX.pull
  posRY.pull

  posX = posRX
  posY = posRY
  posSize = posSizeR
  createCanvas(800, 600);
  rectMode(CENTER);
  for (let i = 0; i < 100; i++) {
    angle = 0,
    rotationSpeed= random(-2,1);
    posX.push(int(random(0, 800)));
    posY.push(int(random(0, 600)));
    posSize.push(int(random(2, 80)));
    posSize.sort(function (a, b) {  return a - b;  });
    R.push(int(random(0, 255)));
    G.push(int(random(0, 255)));
    B.push(int(random(0, 255)));
    angle += rotationSpeed / 2;
  }
}
//circle, rect en de arrow die naar je muis wijst zit hier in
function draw() {
  background(220);  
  for (let i = 0; i < 100; i++) {
    posY[i] = posY[i] - posSize[i]/10;
    posX[i] = posX[i] - posSize[i]/5;

    let x = width / 2; 
    let y = height / 2;

    let angle = atan2(mouseY - y, mouseX - x);

    push();
    translate(x, y);
    rotate(angle);
    rect(0, 0, 60, 20); 
     triangle(30, -10, 40, 0, 30, 10);
    translate(posX, posY)
    rotate(angle)
    if (posX[i] <= -100)
    {
      posX[i] = 500;
    }
     if (posY[i] <= -100)
    {
      posY[i] = 500;
    }
    fill(R[i], G[i], B[i],200);
    circle(posX[i], posY[i], posSize[i]);
  }
//roteate functie
    for (let i = 0; i < 100; i++) {
    translate(posX, posY)
    rotate(angle)
    if (posX[i] <= -100)
    {
      posX[i] = 1000;
    }
     if (posY[i] <= -100)
    {
      posY[i] = 900;
    }
    fill(R[i], G[i], B[i],200);
    rect(posX[i]+30, posY[i], posSize[i]);
  }
}

//keypressed function zodat je kan de kleuren reseten
function keyPressed() {
  console.log("keypress");;
  if(key === 'Backspace'){
  posX = [];
  posY = [];
  posSize = [];
  R = [];
  G = [];
  B = [];
  for (let i = 0; i < 100; i++) {
    posX.push(int(random(0, 800)));
    posY.push(int(random(0, 600)));
    posSize.push(int(random(2, 80)));
    posSize.sort(function (a, b) {  return a - b; });
    R.push(int(random(0, 255)));
    G.push(int(random(0, 255)));
    B.push(int(random(0, 255)));
  }
//SAVE
  }
  if(keyCode === 83){
    console.log("save")
    posRY =posY
    posRX =posX
    DATA.push(posX, posY, posSize)
   
  }
  if(keyCode === 68){
    console.log(DATA)
   
    DATA.getItem[0.1]
     for (let i = 0; i < 100; i++) {
    console.log(DATA)
    
    // R.push(int(random(0, 255)));
    // G.push(int(random(0, 255)));
    // B.push(int(random(0, 255)));
  }
  }


}