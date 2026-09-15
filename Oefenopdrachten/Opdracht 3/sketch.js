function setup() {
  createCanvas(400, 200);
  
}

function draw() {
  background(220);
  let score = random(100)
  noLoop(score)
  if (score >= 90) {
    fill ("green")
    text ("Uitstekend!", 20,20)
  } else if (score => 70 && score <= 89) {
    fill ("yellow")
    text ("Goed gedaan!", 20,20)

  } else if (score => 50 && score <= 69) {
    fill ("orange")
    text ("Voldoende.", 20,20)

  } else if (score => 0 && score <= 49){
    fill ("red")
    text ("Onvoldoende", 20,20)
  }
  
  

  


}
