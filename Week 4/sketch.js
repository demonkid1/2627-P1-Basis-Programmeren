
let PosX = []
let PosY = []
let PosSize = []
let Color = ["red","blue","green",]
let A = 0


function setup() {
  createCanvas(400, 400);
  for (let i =0; i < 150; i++){
   PosX.push(int(random(0,400)));
   PosY.push(int(random(0,400)));
   PosSize.push(int(random(0,40)));
   A = random(0,3)
  }
}

function draw() {
  background(220);
  for (let i = 0; i <150; i++){
    if(A >= 1){

    circle (PosX[i],PosY[i],PosSize[i])
  }
}


function keyPressed(){
  console.log(A)
  PosX = []
  PosY = []
  PosSize = []
    for (let i =0; i < 150; i++){
   PosX.push(int(random(0,400)));
   PosY.push(int(random(0,400)));
   PosSize.push(int(random(0,40)));
   A = random(0,3)
  }
}
}