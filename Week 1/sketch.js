function setup() {
  createCanvas(1000, 1000);
}

function draw() {
  background(220);
  //stop licht
  strokeWeight(2)
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
  fill("black")
  // text
  textSize(20);
  text ("5", 20, 50);
  text ("1  Calum Loughran", 130, 50);
  text ("2", 130, 100);
  text ("3", 130, 240);
  text ("6", 130, 450);
  text ("4", 300, 600);
// flag
  fill ("white");
  rect (150,110,100,25);
  fill ("red");
  rect (150,135,100,25);
  fill ("white");
  strokeWeight(6);
  rect(150,250, 150,150);
  fill ("black");
  rect(150,250, 50, 50);
  rect(200,300, 50, 50);
  rect(250,350, 50, 50);
  rect(150,350, 50, 50);
  rect(250,250, 50, 50);
// double steen
  fill("white");
  rect(150,450, 100,100, 10);
  fill("black");
  circle(175,475, 20);
  circle(200,500, 20);
  circle(225,525, 20);
  circle(175,525, 20);
  circle(225,475, 20);
  // huisje
  strokeWeight(2);
  fill(220);
  triangle(500, 700, 405, 600, 300, 700);
  rect(300,700, 200, 100);

  strokeWeight(0);
  fill("red");
  rect(500,100, 150,25);
  rect(475,125, 250,25);

  fill("brown");
  rect(475,150, 75,25);
  rect(500,175, 25, 25)
  rect(450,175, 25,75);
  rect(475,150, 25,100);
  rect(500,200, 50,25)

// huids kleur
  fill(255,204,153);
  rect(550,150, 75,125);
  rect(525,175, 25,25);
  rect(475,175, 25,50);
  rect(500,225, 50,25)
  rect(500,250, 200,25)
  rect(625,200, 25,25)
  rect(675,200, 75,25)
  rect(650,175, 75,25)

  fill("black");
  rect(625,150, 25,50);
  rect(650,200, 25,25)
  rect(625,225, 100,25)
}
