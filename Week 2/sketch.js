function setup() {
  createCanvas(800, 600);
}

function draw() {
  background("lightblue");
  //bergen
  strokeWeight (0)
  fill("grey")
  triangle (0,500, 250, 20, 500, 500)
  triangle (450,500, 750, 20, 1000, 500)
//auto weg
  fill ("black");
  rect (0,500,800,100);
  //grass
  fill("green")
  rect(0,480, 800,20)
  fill("darkgreen")
  rect(0,480, 800,10)
//gele lijnen voor de weg
  fill ("yellow")
  rect (0, 538, 50, 25)
  rect (100, 538, 50, 25)
  rect (200, 538, 50, 25)
  rect (300, 538, 50, 25)
  rect (400, 538, 50, 25)
  rect (500, 538, 50, 25)
  rect (600, 538, 50, 25)
  rect (700, 538, 50, 25)
  rect (800, 538, 50, 25)





  
}
