let carSP1 = 0
let carSP2 = -500
let carSP3 = -700
let sunSP = 20
let D = 1;
let wait = 0
let moonSP = -50

function setup() {
  createCanvas(800, 600);
}

function draw() {
  background("lightblue");
  text(mouseX +" "+ mouseY, 100,100)
  //variablelen
  
  sunSP = sunSP + 1
  wait = wait + 1
  text(moonSP, 10, 10)
  //logic
  if (carSP1 >= 800) {
    carSP1 = -100
  }
  if (carSP2 >= 800) {
    carSP2 = -100
  }
  if (carSP3 >= 800) {
    carSP3 = -100
  } if(sunSP >= 800){
    moonSP = -50
  } else if(moonSP <= 800 && sunSP >= 800){
    moonSP = moonSP + 1
  }


  //moon
  fill("white")
  circle(moonSP, 25 + 50, 50)
  
  //zon
  fill('yellow')
  circle(sunSP, 25 + 50, 50)

  //bergen
  strokeWeight(0)
  fill("grey")
  triangle(0, 500, 250, 100, 500, 500)
  triangle(450, 500, 750, 125, 1000, 500)

  //grass
  fill("green")
  rect(0, 480, 800, 20)
  fill("darkgreen")
  rect(0, 480, 800, 10)

  //auto weg
  fill("black");
  rect(0, 500, 800, 100);

  //gele lijnen voor de weg
  fill("yellow")
  rect(0, 538, 50, 25)
  rect(100, 538, 50, 25)
  rect(200, 538, 50, 25)
  rect(300, 538, 50, 25)
  rect(400, 538, 50, 25)
  rect(500, 538, 50, 25)
  rect(600, 538, 50, 25)
  rect(700, 538, 50, 25)
  rect(800, 538, 50, 25)

  //auto rood
  fill("grey")
  circle(carSP1, 530, 20)
  circle(50 + carSP1, 530, 20)
  fill("red")
  rect(carSP1 - 10, 500, 90, 25)
  rect(carSP1 - 10, 485, 70, 25)
  //auto licht groen
  fill("grey")
  circle(carSP3, 530, 20)
  circle(carSP3 + 50, 530, 20)
  fill("lightgreen")
  rect(carSP3 - 10, 500, 90, 25)
  rect(carSP3 - 10, 485, 70, 25)
  //auto blauw
  fill("grey")
  circle(carSP2, 530, 20)
  circle(carSP2 + 50, 530, 20)
  fill("blue")
  rect(carSP2 - 10, 500, 90, 25)
  rect(carSP2 - 10, 485, 70, 25)

  fill("darkgrey")
  rect(710, 270, 72, 155)
  rect(725,)


  //logic light
  if (keyIsPressed && wait >= 15){
  if (keyCode == ENTER){
    D = D + 1
    wait = 0
  }
}
  if (D == 1){
    strokeWeight(2)
      fill("red")
      circle (745,300, 40)
  } else if (D == 2){
    strokeWeight(2)
    fill("orange")
    circle (745,350, 40)
      carSP1 = carSP1 + 1
      carSP2 = carSP2 + 1
      carSP3 = carSP3 + 1
  } else if (D == 3){
    strokeWeight(2)
    fill("green")
    circle (745,400, 40)
      carSP1 = carSP1 + 3
      carSP2 = carSP2 + 3
      carSP3 = carSP3 + 3
  } else if (D==4){
    D = 1
  }
}
