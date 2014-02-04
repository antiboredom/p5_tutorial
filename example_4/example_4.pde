ArrayList<Box> boxes = new ArrayList<Box>();

void setup() {
  size(600, 600);
  rectMode(CENTER);
  float colSize = width / 5; //try this with 30 - 50
  for (float x = colSize; x < width; x += colSize) {
    for (float y = colSize; y < height; y += colSize) {
      boxes.add(new Box(colSize, x, y));
    }
  }
  
}

void draw() {
  background(255);
  for (int i = 0; i < boxes.size(); i++) {
    boxes.get(i).run();
  }
}

class Box {
  float initialSz, sz, x, y, speed;
  color c;

  Box(float _sz, float _x, float _y) {
    initialSz = _sz;
    sz = _sz;
    x  = _x;
    y  = _y;
    c = color(0);
    speed = random(2, 5);
  }

  void update() {
    sz += speed;
    if (sz > initialSz + 10 || sz < 1) {
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

