let Player = 1
let RectX1 = 100
let RectX2 = 255
let RectX3 = 410
let RectY1 = 100
let RectY2 = 255
let RectY3 = 410
let RectW = 150
let RectH = 150
let Box1 = "grey"
let Box2 = "grey"
let Box3 = "grey"
let Box4 = "grey"
let Box5 = "grey"
let Box6 = "grey"
let Box7 = "grey"
let Box8 = "grey"
let Box9 = "grey"




function setup() {
  createCanvas(1000, 1000);
}

function draw() {
  background(190);

//logic

if (
  mouseX > RectX1 && mouseX < RectX1 + RectW &&
  mouseY > RectY1 && mouseY < RectY1 + RectH 
){
  Box1 = "grey"
}else
  Box1 = "lightgrey"

if (
  mouseX > RectX2 && mouseX < RectX2 + RectW &&
  mouseY > RectY1 && mouseY < RectY1 + RectH
){
  Box2 = "grey"
}else{
  Box2 = "lightgrey"
}
if (
  mouseX > RectX3 && mouseX < RectX3 + RectW &&
  mouseY > RectY1 && mouseY < RectY1 + RectH
){
  Box3 = "grey"
}else{
  Box3 = "lightgrey"
}
if (
  mouseX > RectX1 && mouseX < RectX1 + RectW &&
  mouseY > RectY2 && mouseY < RectY2 + RectH
){
  Box4 = "grey"
}else{
  Box4 = "lightgrey"
}


  strokeWeight(0)
  fill(Box1)
  rect (RectX1,RectY1, RectW,RectH)

  strokeWeight(0)
  fill(Box2)
  rect (RectX2,RectY1, RectW,RectH)

  strokeWeight(0)
  fill(Box3)
  rect (RectX3,RectY1, RectW,RectH)

  strokeWeight(0)
  fill(Box4)
  rect (RectX1,RectY2, RectW,RectH)

  strokeWeight(0)
  fill(Box5)
  rect (RectX2,RectY2, RectW,RectH)

  strokeWeight(0)
  fill(Box6)
  rect (RectX3,RectY2, RectW,RectH)

  strokeWeight(0)
  fill(Box7)
  rect (RectX1,RectY3, RectW,RectH)

  strokeWeight(0)
  fill(Box8)
  rect (RectX2,RectY3, RectW,RectH)

  strokeWeight(0)
  fill(Box9)
  rect (RectX3,RectY3, RectW,RectH)

}
