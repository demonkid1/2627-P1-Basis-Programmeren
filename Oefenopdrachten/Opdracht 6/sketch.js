//variabelen
let A = ["red","green","blue","purple","yellow"]

function setup() {
  createCanvas(380, 350);
}

function draw() {
  background(220);

  //Text nummers
  text ("1.", 20,15)
  text ("2.", 20,100)
  text ("3.", 20,190)
  text ("4.", 20,250)
  text ("5.", 120,15)
  text ("6.", 120,100)
  text ("7.", 120,190)
  text ("8.", 120,280)
  text ("9.", 240,15)

  //text color red t/m yellow
  let AB = 0
  let Y = 0
  while(AB <5){
    fill (A[AB])
    text(color[AB], 40,15+(Y*2))
  }


}
