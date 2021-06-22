function setup() {
  createCanvas(1280, 577);
  background(244, 96, 54);

  for (let i = 1; i < 10000; i++) {
    let sequence = [];
    let n = i;
    do {
      sequence.push(n);
      n = collatz(n);
    } while (n != 1);
    sequence.push(1);
    sequence.reverse();

    let len = 10;
    resetMatrix();
    translate(width / 10, height / 4);
    for (let j = 0; j < sequence.length; j++) {
      let value = sequence[j];
      if (value % 2 == 0) {
        rotate(0.27-(0.0002*j));
      }
      else {
        rotate(-0.19+(0.00025*j));
      }
      strokeWeight(2);
      stroke(64, 63, 95, 12);
      line(0, 0, 0, -len);
      translate (0, -len);    
    }
  }
}

function collatz(n) {
  //If number is even, divide by 2
  if (n % 2 == 0) {
    return n / 2;
  }
  //If number is odd, multiply by 3 and add 1
  else {
    return (n * 3 + 1) / 2;
  }
}