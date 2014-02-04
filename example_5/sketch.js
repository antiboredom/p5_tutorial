var boxes = [];
var rotation = 0;

function setup() {
  createGraphics(600, 600);
  rectMode(CENTER);
  var colSize = width / 30; //try this with 30 - 50
  for (var x = colSize; x < width; x += colSize) {
    for (var y = colSize; y < height; y += colSize) {
      boxes.push(new Box(colSize, x, y));
    }
  }
}

function draw() {
  background(255);
  for (var i = 0; i < boxes.length; i++) {
    boxes[i].run();
  }
}

function Box(sz, x, y) {
  this.sz = sz;
  this.initialSz = sz;
  this.x = x;
  this.y = y;
  this.c = color(0);
  this.speed = random(2, 5);
}

Box.prototype.update = function() {
  this.sz += this.speed;
  if (this.sz > this.initialSz || this.sz < 1) {
    this.speed = this.speed * -1;
  }
  this.c = color(map(this.sz, 1, 300, 0, 200));
}

Box.prototype.display = function() {
  pushMatrix();
  translate(this.x, this.y);
  rotate(rotation);
  fill(this.c);
  noStroke();
  rect(0, 0, this.sz, this.sz);
  popMatrix();
}

Box.prototype.run = function() {
  this.update();
  this.display();
}

var slider = document.getElementById("slider");
slider.onchange = function(e) {
  rotation = map(this.value, 0, 100, 0, PI);
};
