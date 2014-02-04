float sz;

void setup() {
  size(600, 600);
  rectMode(CENTER);
  sz = width/5;
}

void draw() {
  background(255);
  fill(0);
  rect(width/2, height/2, sz, sz);
}
