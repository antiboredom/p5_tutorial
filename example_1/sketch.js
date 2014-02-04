var sz;

function setup() {
  createGraphics(600, 600);
  rectMode(CENTER);
  sz = width/5;
}

function draw() {
  background(255);
  fill(0);
  rect(width/2, height/2, sz, sz);
}

