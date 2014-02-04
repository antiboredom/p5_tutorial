var b;

function setup() {
  createGraphics(600, 600);
  rectMode(CENTER);
  b = new Box(width/10.0, width/2.0, height/2.0);
}

function draw() {
  background(255);
  b.run();
}

function Box(sz, x, y) {
  this.sz = sz;
  this.x = x;
  this.y = y;
  this.c = color(0);
  this.speed = random(2, 5);
}

Box.prototype.update = function() {
  this.sz += this.speed;
  if (this.sz > 300 || this.sz < 1) {
    this.speed = this.speed * -1;
  }
  this.c = color(map(this.sz, 1, 300, 0, 200));
}

Box.prototype.display = function() {
  fill(this.c);
  noStroke();
  rect(this.x, this.y, this.sz, this.sz);
}

Box.prototype.run = function() {
  this.update();
  this.display();
}
