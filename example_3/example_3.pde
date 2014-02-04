Box b;

void setup() {
  size(600, 600);
  rectMode(CENTER);
  b = new Box(width/10.0, width/2.0, height/2.0);
}

void draw() {
  background(255);
  b.run();
}

class Box {
  float sz, x, y, speed;
  color c;

  void Box(float _sz, float _x, float _y) {
    sz = _sz;
    x  = _x;
    y  = _y;
    c = color(0);
    speed = random(2, 5);
  }

  void update() {
    sz += speed;
    if (sz > 300 || sz < 1) {
      speed = speed * -1;
    } 
    c = color(map(sz, 1, 300, 0, 200));
  }

  void display() {
    fill(c);
    noStroke();
    rect(x, y, sz, sz);
  }

  void run() {
    update();
    display();
  }
}

