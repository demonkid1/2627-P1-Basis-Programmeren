let imgROW = [
  '/Week 6/BACKGROUND.gif']
let LEFT =["/Week 6/Steve walking left(1).gif",]
let right =["/Week 6/Steve walking right(1).gif"]


let imgBACK;
let GIF;
let A = 0
let X = 300
let M = -10
let stop = false

function setup() {
  createCanvas(400, 400);
   imgBACK = loadImage(imgROW);
   LEFT = loadImage(LEFT[A])
   
}

function draw() {
  background(220);
image(imgBACK, 0, 0, 400,400);
 rect(300, 0, 100,150)
 //
 if (X >= 50 && stop == false) {
  M--
  console.log("asd")
  stop = false
 } else{ stop = true}
 if (X <= 40 && stop == true){
  M++
  console.log("idk")
 }
image(LEFT, X+M,240, 150,150)
}

function mousePressed(){
M++
}