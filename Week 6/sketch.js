let imgROW = ['/Week 6/BACKGROUND.gif',]
let LEFT = ["/Week 6/Steve walking left(1).gif"]
let RIGHT = ["/Week 6/Steve walking right(1).gif"]
let IDLEL = ["/Week 6/Steve idle L.png"]
let IDLER = ["/Week 6/Steve idle R.png"]
let ARROWL = ["/Week 6/Arrow left.png"]
let ARROWR = ["/Week 6/Arrow right.png"]
let imgBACKB = ["/Week 6/PLANKS(1).png"]
let imgBACKB2 = ["/Week 6/PLANKS.png"]
let B = ['/Week 6/Barrel.jpg']
let MINI = ["/Week 6/PLANKS_EMPTY.png"]
let FG = ['/Week 6/DEUR.png']
let idleL
let idleR
let currentani
let imgBACK
let A = 0
let X = 0
let M = 2
let hunger = 100
let energy = 100
let happiness = 100
let health = 100
let hungerDrainRate = 25 / (3 * 60)
let lastDirection = "right"
let resting = false
let restStartTime = 0
let resetButton;
let sleep = false
let currentBG
let energyRG = false
//arrow 1 pos and width for clicking to work
let RectX1 = 350
let RectY1 = 340
let RectW = 50
let RectH = 50
//minigame
let barrels = [];
let winningBarrel;


function setup() {
  createCanvas(400, 400)
  imgBACKA = loadImage(imgROW)
  imgBACKB = loadImage(imgBACKB)
  imgBACKB2 = loadImage(imgBACKB2)
  imgBACKM = loadImage(MINI[0])
  LEFT = loadImage(LEFT[A])
  RIGHT = loadImage(RIGHT[A])
  idleL = loadImage(IDLEL[0])
  idleR = loadImage(IDLER[0])
  currentani = RIGHT
  currentBG = imgBACKA
  arrowL = loadImage(ARROWL[0])
  arrowR = loadImage(ARROWR[0])
  Barrel = loadImage(B[0])
  fridge = loadImage(FG[0])
imgBACK
    if (getItem("Hunger")==null)
  {
    hunger = 100;
  }
  else
  {
    hunger = getItem("Hunger")
  }

  if (getItem("Energy")==null)
  {
    energy = 100;
  }
  else
  {
    energy = getItem("Energy")
  }

  if (getItem("Happiness")==null)
  {
    happiness = 100;
  }
  else
  {
    happiness = getItem("Happiness")
  }

  if (getItem("Health")==null)
  {
    health = 100;
  }
  else
  {
    health = getItem("Health")
  }




  console.log(getItem("Hunger"))
  resetButton = createButton("Reset");
  resetButton.position(150, 180);
  resetButton.hide();

  resetButton.mousePressed(function () {
  hunger = 100;
  energy = 100;
  happiness = 100;
  health = 100;

  resting = false;
  X = 0;
  M = 2;
  currentani = RIGHT;
  lastDirection = "right";

  storeItem("Hunger", hunger);
});
}

function draw() {
  
  background(220)
  image(currentBG, 0, 0, 400, 400)

  //zodat de informatie wordt opgeslagen
  storeItem("Hunger", hunger)
  storeItem("Energy", energy)
  storeItem("Happiness", happiness)
  storeItem("Health", health)

  // Show reset button only when health is 0
  if (health <= 0) {
  resetButton.show();
  } else {
  resetButton.hide();
  }

  // ENERGY SYSTEM and the movemetn so that Steve only moves when he has energy
  if (energy > 0 && hunger >= 0) {
    energy = max(0, energy - 0.2)
    X += M
  }

  // When health is 0 happiness is 0
  if (health <= 0){
    happiness = 0
  }

  // If energy reaches 0, start resting
  if (energy <= 0 && !resting) {
    resting = true
    restStartTime = millis()
    if (lastDirection == "left") {
      currentani = idleL
    } else {
      currentani = idleR
    }
  }

  // Rest for 3 seconds
  if (resting) {
    if (millis() - restStartTime >= 500) {
  // Only regain energy if Steve still has hunger left
      if (hunger > 0) {
        hunger = hunger - 25
        energy = 100
        resting = false
        if (lastDirection == "left") {
          currentani = LEFT
          M = -2
        } else {
          currentani = RIGHT
          M = 2
        }
      }
    }
  }

  if(currentBG == imgBACKB || currentBG == imgBACKB2){
  image(Barrel, 0,270,50,50)
  if (mouseIsPressed === true && sleep == false &&
      mouseX > 0 && mouseX < 0 + 50 &&
      mouseY > 270 && mouseY < 270 + 50){
        currentBG = imgBACKM
      }
  }
if (currentBG == imgBACKM){
  barrelMiniGame()
}

// Fridge
if(currentBG == imgBACKB || currentBG == imgBACKB2){
  image(fridge,50,220,100,100)
    if (mouseIsPressed === true && sleep == false &&
      mouseX > 50 && mouseX < 50 + 100 &&
      mouseY > 220 && mouseY < 220 + 100){
        hunger += 25
      }
}

// Regain health
if (hunger > 50 && energy > 50) {
  health = min(100, health + 0.02);
}

  if (sleep == false){
    image(currentani, X, 240, 150, 150)
  }
  
  strokeWeight(0)
  fill(0,0,0, 200)
  rect(300, 0, 100, 150)

  // Happiness
  if (currentBG != imgBACKM){
happiness = max(0, happiness - 0.01)
  }
  
  if (happiness >= 100){
    happiness = 100
  }

  // Health decreases when BOTH hunger and energy are 0
  if (hunger <= 0 && energy <= 0) {
    health = max(0, health - 0.05)
  }

  let x = 310
  let w = 80
  let h = 20

  textSize(15)
  // Hunger
  fill("orange")
  rect(x, 10, map(hunger, 0, 100, 0, w), h)
  fill(0)
  text("Hunger", x, 25)

  // Energy
  fill("blue")
  rect(x, 45, map(energy, 0, 100, 0, w), h)
  fill(0)
  text("Energy", x, 60)

  // Happiness
  fill("yellow")
  rect(x, 80, map(happiness, 0, 100, 0, w), h)
  fill(0)
  text("Happiness", x, 95)

  // Health
  fill("green")
  rect(x, 115, map(health, 0, 100, 0, w), h)
  fill(0)
  text("Health", x, 130)

  // Movement and direction switching
  if (!resting || sleep == true) {
    if (X >= 300) {
      M = -2
      currentani = LEFT
      lastDirection = "left"
    }
    else if (X <= -50) {
      M = 2
      currentani = RIGHT
      lastDirection = "right"
    }
  }
  if (currentBG == imgBACKA){
image(arrowR, RectX1,RectY1, 50,50)
  } else {
    image(arrowL, 10, 340, 50 ,50)
  }
  
  if (mouseIsPressed === true &&
      mouseX > RectX1 && mouseX < RectX1 + RectW &&
      mouseY > RectY1 && mouseY < RectY1 + RectH
    ) {
      currentBG = imgBACKB
      
    }

  if(mouseIsPressed === true && sleep == false &&
      mouseX > 10 && mouseX < 10 + RectW &&
      mouseY > 340 && mouseY < 340 + RectH){
        currentBG = imgBACKA
      }
  
  if (energyRG == true){
    energy++
  }

  if (energy >= 100){
    energy = 100
  }

  if (hunger >= 100){
    hunger = 100
  }


  if(mouseIsPressed === true &&
      mouseX > 0 && mouseX < 0 + RectW &&
      mouseY > 270 && mouseY < 270 + RectH){
      
      }

}

function mousePressed(){
  if(mouseIsPressed === true && sleep == false &&
      mouseX > 315 && mouseX < 315 + 75 &&
      mouseY > 284.75 && mouseY < 284.75 + 35){
        currentBG = imgBACKB2
        sleep = true
        energyRG = true
      } else if(mouseIsPressed === true && 
      mouseX > 315 && mouseX < 315 + 75 &&
      mouseY > 284.75 && mouseY < 284.75 + 75){
         currentBG = imgBACKB
        sleep = false
        energyRG = false
      }

      if(currentBG == imgBACKM){
  for(let i = 0; i < barrels.length; i++){
    if(
      mouseX > barrels[i].x &&
      mouseX < barrels[i].x + 60 &&
      mouseY > barrels[i].y &&
      mouseY < barrels[i].y + 60
    ){
      if(i == winningBarrel){
        happiness += 25;
        currentBG = imgBACKB;
      } else {
        currentBG = imgBACKB;
      }
      barrels = [];
    }
  }
}
}


function barrelMiniGame(){

  // Create barrels only once
  if(barrels.length == 0){
    for(let i = 0; i < 6; i++){
      barrels.push({
        x: 40 + (i % 3) * 100,
        y: 100 + floor(i / 3) * 120,
        num: i + 1
      });
    }

    winningBarrel = floor(random(6));
  }

  // Draw barrels
  for(let i = 0; i < barrels.length; i++){

    image(Barrel, barrels[i].x, barrels[i].y, 60, 60);

if(i == winningBarrel){
  fill(255)
}
else{
  fill(255); 
}

textSize(20);
text(
  barrels[i].num,
  barrels[i].x + 25,
  barrels[i].y + 35
);
  }
}