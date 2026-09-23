let Player = 1
let Team = "grey"
let RectX1 = 100
let RectX2 = 255
let RectX3 = 410
let RectY1 = 100
let RectY2 = 255
let RectY3 = 410
let RectW = 150
let RectH = 150
let RectRX = 250
let RectRY = 700
let RectRW = 100
let RectRH = 50
let Box1 = "grey"
let Box2 = "grey"
let Box3 = "grey"
let Box4 = "grey"
let Box5 = "grey"
let Box6 = "grey"
let Box7 = "grey"
let Box8 = "grey"
let Box9 = "grey"
let Win = 0
let BG = "darkred"
let DRAW = 0


function setup() {
  createCanvas(1000, 1000);
}

function mousePressed() {
  if (mouseButton == LEFT && Win == 0) {

    console.log("Linker Muisknop")
    if (Player >= 3) {
      Player = 1
    }
    if (mouseIsPressed === true && Player == 1 && Box1 == "grey" &&
      mouseX > RectX1 && mouseX < RectX1 + RectW &&
      mouseY > RectY1 && mouseY < RectY1 + RectH
    ) {
      Box1 = "red"
      Player++
    } else if (mouseIsPressed === true && Player == 2 && Box1 == "grey" &&
      mouseX > RectX1 && mouseX < RectX1 + RectW &&
      mouseY > RectY1 && mouseY < RectY1 + RectH) {
      Box1 = "blue"
      Player++
    }

    if (mouseIsPressed === true && Player == 1 && Box2 == "grey" &&
      mouseX > RectX2 && mouseX < RectX2 + RectW &&
      mouseY > RectY1 && mouseY < RectY1 + RectH
    ) {
      Box2 = "red"
      Player++
    } else if (mouseIsPressed === true && Player == 2 && Box2 == "grey" &&
      mouseX > RectX2 && mouseX < RectX2 + RectW &&
      mouseY > RectY1 && mouseY < RectY1 + RectH) {
      Box2 = "blue"
      Player++
    }

    if (mouseIsPressed === true && Player == 1 && Box3 == "grey" &&
      mouseX > RectX3 && mouseX < RectX3 + RectW &&
      mouseY > RectY1 && mouseY < RectY1 + RectH
    ) {
      Box3 = "red"
      Player++
    } else if (mouseIsPressed === true && Player == 2 && Box3 == "grey" &&
      mouseX > RectX3 && mouseX < RectX3 + RectW &&
      mouseY > RectY1 && mouseY < RectY1 + RectH) {
      Box3 = "blue"
      Player++
    }

    if (mouseIsPressed === true && Player == 1 && Box4 == "grey" &&
      mouseX > RectX1 && mouseX < RectX1 + RectW &&
      mouseY > RectY2 && mouseY < RectY2 + RectH
    ) {
      Box4 = "red"
      Player++
    } else if (mouseIsPressed === true && Player == 2 && Box4 == "grey" &&
      mouseX > RectX1 && mouseX < RectX1 + RectW &&
      mouseY > RectY2 && mouseY < RectY2 + RectH) {
      Box4 = "blue"
      Player++
    }

    if (mouseIsPressed === true && Player == 1 && Box5 == "grey" &&
      mouseX > RectX2 && mouseX < RectX2 + RectW &&
      mouseY > RectY2 && mouseY < RectY2 + RectH
    ) {
      Box5 = "red"
      Player++
    } else if (mouseIsPressed === true && Player == 2 && Box5 == "grey" &&
      mouseX > RectX2 && mouseX < RectX2 + RectW &&
      mouseY > RectY2 && mouseY < RectY2 + RectH) {
      Box5 = "blue"
      Player++
    }

    if (mouseIsPressed === true && Player == 1 && Box6 == "grey" &&
      mouseX > RectX3 && mouseX < RectX3 + RectW &&
      mouseY > RectY2 && mouseY < RectY2 + RectH
    ) {
      Box6 = "red"
      Player++
    } else if (mouseIsPressed === true && Player == 2 && Box6 == "grey" &&
      mouseX > RectX3 && mouseX < RectX3 + RectW &&
      mouseY > RectY2 && mouseY < RectY2 + RectH) {
      Box6 = "blue"
      Player++
    }

    if (mouseIsPressed === true && Player == 1 && Box7 == "grey" &&
      mouseX > RectX1 && mouseX < RectX1 + RectW &&
      mouseY > RectY3 && mouseY < RectY3 + RectH
    ) {
      Box7 = "red"
      Player++
    } else if (mouseIsPressed === true && Player == 2 && Box7 == "grey" &&
      mouseX > RectX1 && mouseX < RectX1 + RectW &&
      mouseY > RectY3 && mouseY < RectY3 + RectH) {
      Box7 = "blue"
      Player++
    }

    if (mouseIsPressed === true && Player == 1 && Box8 == "grey" &&
      mouseX > RectX2 && mouseX < RectX2 + RectW &&
      mouseY > RectY3 && mouseY < RectY3 + RectH
    ) {
      Box8 = "red"
      Player++
    } else if (mouseIsPressed === true && Player == 2 && Box8 == "grey" &&
      mouseX > RectX2 && mouseX < RectX2 + RectW &&
      mouseY > RectY3 && mouseY < RectY3 + RectH) {
      Box8 = "blue"
      Player++
    }

    if (mouseIsPressed === true && Player == 1 && Box9 == "grey" &&
      mouseX > RectX3 && mouseX < RectX3 + RectW &&
      mouseY > RectY3 && mouseY < RectY3 + RectH
    ) {
      Box9 = "red"
      Player++
    } else if (mouseIsPressed === true && Player == 2 && Box9 == "grey" &&
      mouseX > RectX3 && mouseX < RectX3 + RectW &&
      mouseY > RectY3 && mouseY < RectY3 + RectH) {
      Box9 = "blue"
      Player++
    }

  } else {

  }
}

function draw() {
  background(190);
  fill(BG)
  rect(0, 0, 1000, 1000)
  if (Player == 1 || 3) {
    BG = "darkred"
  }
  if (Player == 2) {
    BG = "darkblue"
  }
  if (Player == 4) {
    BG = "purple"
  }

  //logic win
  if (Box1 == "red" && Box2 == "red" && Box3 == "red" ||
    Box4 == "red" && Box5 == "red" && Box6 == "red" ||
    Box7 == "red" && Box8 == "red" && Box9 == "red" ||
    Box1 == "red" && Box4 == "red" && Box7 == "red" ||
    Box2 == "red" && Box5 == "red" && Box8 == "red" ||
    Box3 == "red" && Box6 == "red" && Box9 == "red" ||
    Box1 == "red" && Box5 == "red" && Box9 == "red" ||
    Box7 == "red" && Box5 == "red" && Box3 == "red") {
    Win = 1
    textSize(30)
    fill("black")
    text("Player 1 WINS", 200, 600)
    Player = 1
  }
  else if (Box1 == "blue" && Box2 == "blue" && Box3 == "blue" ||
    Box4 == "blue" && Box5 == "blue" && Box6 == "blue" ||
    Box7 == "blue" && Box8 == "blue" && Box9 == "blue" ||
    Box1 == "blue" && Box4 == "blue" && Box7 == "blue" ||
    Box2 == "blue" && Box5 == "blue" && Box8 == "blue" ||
    Box3 == "blue" && Box6 == "blue" && Box9 == "blue" ||
    Box1 == "blue" && Box5 == "blue" && Box9 == "blue" ||
    Box7 == "blue" && Box5 == "blue" && Box3 == "blue") {
    Win = 1
    textSize(30)
    fill("black")
    text("Player 2 WINS", 200, 600)
    Player = 2
  }

  if (Win == 1) {
    fill("white")
    rect(RectRX, RectRY, RectRW, RectRH)
    fill("black")
    text("RESET", RectRX, RectRY + 35)
  }
  //logicDraw
  if (Box1 != "grey" && Box2 != "grey" && Box3 != "grey" &&
    Box4 != "grey" && Box5 != "grey" && Box6 != "grey" &&
    Box7 != "grey" && Box8 != "grey" && Box9 != "grey") {
    if (Box1 == "red" && Box2 == "red" && Box3 == "red" ||
      Box4 == "red" && Box5 == "red" && Box6 == "red" ||
      Box7 == "red" && Box8 == "red" && Box9 == "red" ||
      Box1 == "red" && Box4 == "red" && Box7 == "red" ||
      Box2 == "red" && Box5 == "red" && Box8 == "red" ||
      Box3 == "red" && Box6 == "red" && Box9 == "red" ||
      Box1 == "red" && Box5 == "red" && Box9 == "red" ||
      Box7 == "red" && Box5 == "red" && Box3 == "red") {
      Win = 1
      textSize(30)
      fill("black")
      text("Player 1 WINS", 200, 600)
      Player = 1
    }
    else if (Box1 == "blue" && Box2 == "blue" && Box3 == "blue" ||
      Box4 == "blue" && Box5 == "blue" && Box6 == "blue" ||
      Box7 == "blue" && Box8 == "blue" && Box9 == "blue" ||
      Box1 == "blue" && Box4 == "blue" && Box7 == "blue" ||
      Box2 == "blue" && Box5 == "blue" && Box8 == "blue" ||
      Box3 == "blue" && Box6 == "blue" && Box9 == "blue" ||
      Box1 == "blue" && Box5 == "blue" && Box9 == "blue" ||
      Box7 == "blue" && Box5 == "blue" && Box3 == "blue") {
      Win = 1
      textSize(30)
      fill("black")
      text("Player 2 WINS", 200, 600)
      Player = 2
    } else {
      fill("black")
      textSize(30)
      text("DRAW", 250, 600)
      Player = 4
      Win = 1
      DRAW = 1
    }
  }
  //logic reset
  if (mouseIsPressed === true &&
    mouseX > RectRX && mouseX < RectRX + RectRW &&
    mouseY > RectRY && mouseY < RectRY + RectRH) {
    Win = 0
    Box1 = "grey"
    Box2 = "grey"
    Box3 = "grey"
    Box4 = "grey"
    Box5 = "grey"
    Box6 = "grey"
    Box7 = "grey"
    Box8 = "grey"
    Box9 = "grey"
    Player = 1
  }























  //broken hover

  // if (Box1 == "grey" &&
  //   mouseX > RectX1 && mouseX < RectX1 + RectW &&
  //   mouseY > RectY1 && mouseY < RectY1 + RectH 
  // ){
  //   Box1 = "lightgrey"

  // }else
  // Box1 = "grey"
  // if (Box2 == "grey" &&
  //   mouseX > RectX2 && mouseX < RectX2 + RectW &&
  //   mouseY > RectY1 && mouseY < RectY1 + RectH
  // ){
  //   Box2 = "lightgrey"
  // }else{
  //   Box2 = "grey"
  // }
  // if (Box3 == "grey" &&
  //   mouseX > RectX3 && mouseX < RectX3 + RectW &&
  //   mouseY > RectY1 && mouseY < RectY1 + RectH
  // ){
  //   Box3 = "lightgrey"
  // }else{
  //   Box3 = "grey"
  // }
  // if (Box4 == "grey" &&
  //   mouseX > RectX1 && mouseX < RectX1 + RectW &&
  //   mouseY > RectY2 && mouseY < RectY2 + RectH
  // ){
  //   Box4 = "lightgrey"
  // }else{
  //   Box4 = "grey"
  // }


  strokeWeight(0)
  fill(Box1)
  rect(RectX1, RectY1, RectW, RectH)

  strokeWeight(0)
  fill(Box2)
  rect(RectX2, RectY1, RectW, RectH)

  strokeWeight(0)
  fill(Box3)
  rect(RectX3, RectY1, RectW, RectH)

  strokeWeight(0)
  fill(Box4)
  rect(RectX1, RectY2, RectW, RectH)

  strokeWeight(0)
  fill(Box5)
  rect(RectX2, RectY2, RectW, RectH)

  strokeWeight(0)
  fill(Box6)
  rect(RectX3, RectY2, RectW, RectH)

  strokeWeight(0)
  fill(Box7)
  rect(RectX1, RectY3, RectW, RectH)

  strokeWeight(0)
  fill(Box8)
  rect(RectX2, RectY3, RectW, RectH)

  strokeWeight(0)
  fill(Box9)
  rect(RectX3, RectY3, RectW, RectH)

}