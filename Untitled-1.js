
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(230);

 

for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++)
      rect(i*50 + 25, j * 50 + 25, 50, 50);
  }

}