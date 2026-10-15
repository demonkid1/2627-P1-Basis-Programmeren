let functions = ["a", "b", "c", "d"]
let vraagantwoorden = ["organische Polymeer", "Metaal", "Obsidiaan", "Cementing paste"]
let locationX = [100, 450, 100,450]
let locationY = [350, 350, 450,450]
let y = 10
let imgROW = ['/Week 5/assets/BACKGROUND_A.webp']
let img;
buttonInfo = []

async function setup() {
  createCanvas(800, 600);
   for(let i = 0; i < 4; i++){
  img = await loadImage(imgROW);
  let button = createButton(vraagantwoorden[i]);
	button.position(locationX[i], locationY[i]);
	button.style('background-color', "grey");
	button.style('font-size', '30px');
  button.mousePressed(functions[i]);
  
}
}

function draw() {
  background(220);
  //imgae
  image(img, 0, 0, 800,600);
  //vraag
  strokeWeight(0)
  fill("#686767d0")
  rect(200,200, 300, 100)
fill("#000000d0")
  textSize(12)
  text("Welk basismetaal vormt de hoeksteen voor bijna alle ", 200,230)
  text("geavanceerde technologieën", 200,250)
}
