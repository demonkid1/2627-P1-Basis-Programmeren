// function setup() {
//   createCanvas(400, 400);
// }

// function draw() {
//   background(220);
// }


function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(70);
let index = 1
 let name = [
  ["a", "b", "c", "d", "e"]
  ["asd", "asdd", "asddd", "asdddd", "asddddd"]
  ["fgh", "fghh", "fghhh", "fghhhh", "fghhhhh"]
  ["qwe", "qwee", "qweee", 'qweeee', "qweeeee"]
  ["1", "2", "3", "4", "5"]
  ["z", "x", "c", "v", "b"]
 ]
for(let i = 0; i < 5; i++){
  for(let j = 0; j < 5; j++){
 if (index % 2 == 0){
  fill(255)
 }else{fill(0)
 }  
    rect(j * 50 + 25, i * 50 +25, 50,50)
    fill(255, 0, 0)
    text(name[i][j], j*50+25,i*50+35)
    index++
  }
}

}