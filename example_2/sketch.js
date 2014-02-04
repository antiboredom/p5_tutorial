var sz, speed=3, c;

//or you could write this:
//var sz;
//var speed = 3;
//var c;

function setup() {
  createGraphics(600, 600);
  rectMode(CENTER);
  sz = width/5;
  c = color(0);
}

function draw() {
  update();

  background(255);
  fill(c);
  noStroke();
  rect(width/2, height/2, sz, sz);
}

function update() {
  sz += speed;
  if (sz > 300 || sz < 1) {
    speed = speed * -1;
  }

  c = color(map(sz, 1, 300, 0, 200));
}
