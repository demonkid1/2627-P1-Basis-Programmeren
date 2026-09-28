function setup() {
  createCanvas(800, 400);
}

function draw() {
  background(220);

  let index = 1;

  //10 blockjest met de zevende blauw
  fill("white")
  strokeWeight(2)
  while (index < 11) {

    rect(-20 + (index * 40), 50, 40, 40)
    index++;
    if (index == 7) {
      fill("blue")
    }
    else {
      fill("white")
    }


  }
  //opdracht 2
  let Y2 = 0;
  while (Y2 < 6) {
    rect(20, 110 + (Y2 * 40), 40, 40)
    Y2++
    if (Y2 != 0) {
      fill("black")
    }
    if (Y2 == 2) {
      fill("darkgrey")
    } if (Y2 == 3) {
      fill("grey")
    } if (Y2 == 4) {
      fill("lightgrey")
    } if (Y2 == 5) {
      fill("white")
    }
  }
  strokeWeight(0)
  fill(220)
  rect(19, 100, 50, 50)
  strokeWeight(2)
  //opdracht 3
  fill("black")
  let W = 0
  let X = 0
  let C = 1.5
  while (W < 100 && X < 4) {
    rect(80 + (15 * X * C), 150, 25 + (W * 20), 50)
    X++
    W++
    C = C + 0.25
    if (X >= -1) {
      fill("darkgreen")
    }
    if (X == 2) {
      fill("green")
    }
    if (X == 3) {
      fill("lime")
    }
  }
  //opdracht 4
  fill("blue")
  let W2 = 0
  let X2 = 0
  let C2 = 1.5
  let H = 1.5
  while (W2 < 100 && X2 < 4) {
    rect(80 + (15 * X2 * C2), 230, 25 + (W2 * 20), 35 + (H))
    X2++
    W2++
    C2 = C2 + 0.25
    H = H + 25
    if (X2 >= -1) {
      fill("darkblue")
    }
    if (X2 == 2) {
      fill("#011948")
    }
    if (X2 == 3) {
      fill("black")
    }
  }
  //opdracht 5
  strokeWeight(0)
  fill("white")
  let Index2 = 0
  let ST = 3
  while (Index2 < 5) {
    circle(500 + (Index2 * 50), 65, 30, 30)
    Index2++
    ST++
    if (Index2 == 1) {
      strokeWeight(ST)
    }
    if (Index2 == 2) {
      strokeWeight(ST)
    }
    if (Index2 == 3) {
      strokeWeight(ST)
    }
    if (Index2 == 4) {
      strokeWeight(ST)
    }
  }
  //opdracht 6
  strokeWeight(2)
  fill("red")
  // let X3 = 0
  // let Y3 = 0
  // while(X3 < 11 && Y3 <=11){
  //   circle(10,10,10,10)
  // }



}
