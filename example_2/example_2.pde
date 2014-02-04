float sz;
float speed = 3;
color c = color(0);

void setup() {
  size(600, 600);
  rectMode(CENTER);
  sz = width/5;
}

void draw() {
  update();

  background(255);
  fill(c);
  noStroke();
  rect(width/2, height/2, sz, sz);
}

void update() {
  sz += speed;
  if (sz > 300 || sz < 1) {
    speed = speed * -1;
  }
  
  c = color(map(sz, 1, 300, 0, 200));

  
}

