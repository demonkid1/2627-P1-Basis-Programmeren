let counter = 0
let A = 'yes';
let D = 1;
let wait = 0
let Y = 120
let X = 380

function setup() {
  createCanvas(1000, 600);

}
function keyPressed(){
  if (keyCode === 87)
    console.log("W wordt ingedrukt")
  if (keyCode === 83)
    console.log("S wordt ingedrukt")
}

function keyReleased(){
  if (keyCode === 87)
  console.log("W wordt losgelaten")
  if (keyCode === 83)
    console.log("S wordt losgelaten")
}
function draw() {
  background(220);

//variabelen
counter = counter + 1
wait = wait + 1
  //text
  textSize(14)
  fill("black")
  text ("Houd B in om een blokje te laten verschijnen.", 20,20)
  text ("Druk op spatie om het getal op 0 te zetten.", 20,120)
  text ("Druk op enter om van rood -> groen -> oranje te gaan.", 20,240)
  text ("Beweeg de eightball met WASD of de pijltjestoetsen.", 360,20)
  /strokeWeight(2)
  textSize(100)
  //counter
  text (counter, 20,210)
  //stoplight base
  fill("grey")
  rect(20,250, 50,150)
  fill("darkred")
  circle (45,275, 40)
  fill("darkorange")
  circle (45,325, 40)
  fill("darkgreen")
  circle (45,375, 40)

  //8 Ball
  fill("black")
  circle (X,Y, 100)
  fill("white")
  circle (X,Y, 75)
  fill("black")
  textSize(50)
  text("8", X-14,Y+14)





  //logic
  if (keyIsPressed){
    if (key === 'b') {
    strokeWeight(5)
    fill ("grey")
  rect (20,40, 60,60)
  }
  if (keyCode === 66) { 
    strokeWeight(5)
    fill ("grey")
    rect (20,40, 60,60)
  }
  }
  if (counter >= 500){
    counter = 0

  } else if (keyIsPressed){
    if (key == 'space') {
        counter = -1

  }
  if (keyCode == 32) { 
      counter = -1
  }
  }
if (keyIsPressed && wait >= 15){
  if (keyCode == ENTER){
    D = D + 1
    wait = 0
  }
}
  if (D == 1){
    strokeWeight(2)
      fill("red")
      circle (45,275, 40)
  } else if (D == 2){
    strokeWeight(2)
    fill("orange")
    circle (45,325, 40)
  } else if (D == 3){
    strokeWeight(2)
    fill("green")
    circle (45,375, 40)
  } else if (D==4){
    D = 1
  }

  if (keyIsPressed){
    if(keyCode == 65){
      X = X + -1
    }
  } 
  if (keyIsPressed){
    if(keyCode == 68){
      X = X + 1
    }
  }
  if (keyIsPressed){
    if(keyCode == 87){
      Y = Y + -1
    }
  }
  if (keyIsPressed == true){
    if(keyCode == 83)
      Y += 1
  }
    if (keyIsPressed){
    if(keyCode == 37){
      X = X + -1
    }
  } 
  if (keyIsPressed){
    if(keyCode == 39){
      X = X + 1
    }
  }
  if (keyIsPressed){
    if(keyCode == 38){
      Y = Y + -1
    }
  }
  if (keyIsPressed == true){
    if(keyCode == 40)
      Y += 1
  }
  if (Y == 654){
    Y = -52
  } else if (Y == -53){
    Y = 653
  }
  if ( X == -53){
    X = 1051
  } else if (X >= 1053){
    X = -51
  }
}




