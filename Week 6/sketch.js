let imgROW = ['/Week 6/BACKGROUND.gif']
let LEFT = ["/Week 6/Steve walking left(1).gif"]
let RIGHT = ["/Week 6/Steve walking right(1).gif"]
let IDLEL = ["/Week 6/Steve idle L.png"]
let IDLER = ["/Week 6/Steve idle R.png"]
let idleL;
let idleR;
let currentani;
let imgBACK;
let GIF;
let A = 0
let X = 0
let M = 2
let stop = false
let hunger = 100
let energy = 100
let happiness = 100
let health = 100
let isIdle = false
let idleTimer = 0
let lastDirection = "right"

function setup() {
  createCanvas(400, 400)
  imgBACK = loadImage(imgROW)
  // de status die Steve kan zijn
  LEFT = loadImage(LEFT[A])
  RIGHT = loadImage(RIGHT[A])
  idleL = loadImage(IDLEL[0])
  idleR = loadImage(IDLER[0])
  // begin direction
  currentani = RIGHT
}

function draw() {
  background(220)
  //variable zodat het heen en weer beweegt
  X += M
  image(imgBACK, 0, 0, 400, 400)
  image(currentani, X, 240, 150, 150)
  rect(300, 0, 100, 150)
  // Statistieken langzaam verlagen
  hunger = max(0, hunger - 0.02)
  energy = max(0, energy - 0.02)
  happiness = max(0, happiness - 0.01)
  if (hunger && energy == 0){
    health = max(0, health - 0.005)
  }
  let x = 310
  let w = 80
  let h = 20

  // Honger
  fill("orange")
  rect(x, 10, map(hunger, 0, 100, 0, w), h)
  fill(0)
  text("Honger", x, 25)

  // Energie
  fill("blue")
  rect(x, 45, map(energy, 0, 100, 0, w), h)
  fill(0)
  text("Energie", x, 60)

  // Geluk
  fill("yellow")
  rect(x, 80, map(happiness, 0, 100, 0, w), h)
  fill(0)
  text("Geluk", x, 95)

  // health
  fill("green")
  rect(x, 115, map(health, 0, 100, 0, w), h)
  fill(0)
  text("health", x, 130)
  // movement
  if (X >= 300) {
    M = -2
    currentani = LEFT
  } else if (X <= -50) {
    M = 2
    currentani = RIGHT
  }

  
}

function mousePressed() {
  M++
}