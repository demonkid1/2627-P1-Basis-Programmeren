let carSP1 = 0
let carSP2 = -500
let carSP3 = -700
let sunSP = 20

function setup() {
  createCanvas(800, 600);
}

function draw() {
  background("lightblue");
  //variablelen
  carSP1 = carSP1 + 3
  carSP2 = carSP2 + 3
  carSP3 = carSP3 + 3
  sunSP = sunSP + 2
  text(carSP2, 10, 10)
  //logic
  if (carSP1 >= 800) {
    carSP1 = -100
  }
  if (carSP2 >= 800) {
    carSP2 = -100
  }
  if (carSP3 >= 800) {
    carSP3 = -100
  }
  //zon
  fill('yellow')
  circle(100, 100 + 50, 50)

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
}
