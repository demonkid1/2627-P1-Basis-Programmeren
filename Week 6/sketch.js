let imgROW = ['/Week 6/BACKGROUND.gif']
let LEFT = ["/Week 6/Steve walking left(1).gif"]
let RIGHT = ["/Week 6/Steve walking right(1).gif"]
let IDLEL = ["/Week 6/Steve idle L.png"]
let IDLER = ["/Week 6/Steve idle R.png"]
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

function setup() {
  createCanvas(400, 400)
  imgBACK = loadImage(imgROW)
  LEFT = loadImage(LEFT[A])
  RIGHT = loadImage(RIGHT[A])
  idleL = loadImage(IDLEL[0])
  idleR = loadImage(IDLER[0])
  currentani = RIGHT
    if (getItem("hunger")==null)
  {
    honger = 100;
  }
  else
  {
    honger = getItem("hunger");
  }
  console.log(getItem("hunger"));
}

function draw() {
  background(220)
  image(imgBACK, 0, 0, 400, 400)

  //zodat de informatie wordt opgeslagen
  storeItem("hunger",hunger);

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

  image(currentani, X, 240, 150, 150)
  strokeWeight(0)
  fill(0,0,0, 200)
  rect(300, 0, 100, 150)

  // Happiness
  happiness = max(0, happiness - 0.01)

  // Health decreases when BOTH hunger and energy are 0
  if (hunger <= 0 && energy <= 0) {
    health = max(0, health - 0.05)
  }

  let x = 310
  let w = 80
  let h = 20

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
  if (!resting) {
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
}

