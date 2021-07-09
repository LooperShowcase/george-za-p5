let img;
function preload() {
  img = loadImage("GTZ NINJA.png");
}
function setup() {
  // The size of our starting canvas: 400px width, 400px height
  let cnv = createCanvas(1400, 1400);
  cnv.center();
  angleMode(DEGREES);
}

function draw() {
  // The same as doing: background(220); or --> background(220,220,220);

  background("black");
  translate(width / 2, height / 2);
  image(img, 200, 200, 100, 100);
  rotate(-90);

  let x = 0;
  let step = 0;
  let hours = hour();
  let minutes = minute();
  let seconds = second();
  let millisecond = millis();

  stroke("#004b23");

  console.log(floor((millisecond % 1000) / 100));
  let millisAngel = map(floor((millisecond % 1000) / 100), 0, 10, 0, 360);
  ellipse(-400, 400, 300, 300);
  arc(-400, 400, 250, 250, 0, millisAngel);

  stroke("#006400");
  strokeWeight(14);
  noFill();
  ellipse(0, 0, 300, 300);

  console.log(`${hours},${minutes},${seconds}`);
  push();
  fill(255, 255, 255, 100);
  stroke("#007200");
  let secondAngle = map(seconds, 0, 60, 0, 360);
  arc(0, 0, 250, 250, 0, secondAngle, PIE);
  pop();
  stroke("#38b000");
  let minuteAngle = map(minutes, 0, 60, 0, 360) + map(seconds, 0, 60, 0, 6);
  arc(0, 0, 200, 200, 0, minuteAngle);

  stroke("white");
  let hourAngle = map(hours % 12, 0, 60, 0, 360);
  arc(0, 0, 150, 150, 0, hourAngle);

  push();
  rotate(secondAngle);
  stroke("#ffffff");
  line(0, 0, 125, 0);
  pop();

  push();
  rotate(minuteAngle);
  stroke("#14213d");
  line(0, 0, 100, 0);
  pop();

  push();
  rotate(hourAngle);
  stroke("#e5e5e5");
  line(0, 0, 75, 0);
  pop();

  // push();
  // rotate(millisAngel);
  // stroke("#e5e5e5");
  // line(0, 0, 75, 0);
  // pop();
}
