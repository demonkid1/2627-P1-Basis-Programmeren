function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(220);
  fill("grey")
  rect (45,50,50,150);
  fill("red")
  circle(70,80,40);
  fill("orange")
  circle(70,125,40);
  fill("green")
  circle(70,170,40);
  fill("grey")
  rect (60,200,20,120);
  fill("nofill");
  fill("black")
  textSize(20);
  text ("5", 20, 50);
}
