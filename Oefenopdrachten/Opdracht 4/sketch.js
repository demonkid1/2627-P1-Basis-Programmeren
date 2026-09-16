let counter = 0



function setup() {
  createCanvas(1000, 600);
}

function draw() {
  background(220);

//variabelen
counter = counter + 1

  //text
  fill("black")
  text ("Houd B in om een blokje te laten verschijnen.", 20,20)
  text ("Druk op spatie om het getal op 0 te zetten.", 20,120)
  text ("Druk op enter om van rood -> groen -> oranje te gaan.", 20,240)
  text ("Beweeg de eightball met WASD of de pijltjestoetsen.", 360,20)

  text (counter, 20,140)
  fill("grey")
  rect(20,250, 50,150)
  fill("red")
  circle (45,275, 40)
  fill("orange")
  circle (45,325, 40)
  fill("green")
  circle (45,375, 40)

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



}




