function setup() {
  createCanvas(800, 400);
}

function draw() {
  background(220);
//variabelen
    let index = 1;
   
//10 blockjest met de zevende blauw
  while(index <11){
  rect (-20 + (index*40), 50,40,40)
  index++;
  if(index == 7){
    fill ("blue")
  }
  else{
    fill("white")
  }

  }
   let Y2 = 1;
  while(Y2 <6){
    rect(20, 110 + (Y2 *40),40,40)
  Y2++
  if(Y2 = 1){
    fill("black")
  }
  if(Y2 = 2){
    fill("grey")
  }  if(Y2 = 3){
    fill("grey")
  }  if(Y2 = 4){
    fill("grey")
  }  if(Y2 = 5){
    fill("white")
  }
  }
}
