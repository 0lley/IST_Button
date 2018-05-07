var Rolls = [];
var Tokens = [];
var lengthHeight = 280;
const backCol = 51;

function buttonRect(Length, Curve) {
  rect(windowWidth / (windowWidth / (windowWidth / 2 - Length / 2)), windowHeight / (windowHeight / (windowHeight / 2 - Length / 2)), Length, Length, Curve)
}

function rollDisplay() {
  let sizeOfTxt = 35;
  textSize(sizeOfTxt);
  let roll = Math.floor(random(1, 7));
  Rolls.push(roll);
  text(Rolls[Rolls.length - 1], windowWidth / 2 - (sizeOfTxt / 4), (windowHeight / 2) + (sizeOfTxt / 8));
}

function tokenNotif() {
  let sizeOfTxt = 20;
  textSize(sizeOfTxt);
  let token = Math.floor(random(1, 7));
  Tokens.push(token);
  text(Tokens[Tokens.length - 1], windowWidth / 2 - (sizeOfTxt / 4), (windowHeight / 2) + (sizeOfTxt / 8));
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(backCol);
  buttonRect(lengthHeight, 35);
}

function draw() {
  let minRad = 230;
  if (mouseIsPressed && lengthHeight > 230) {
    lengthHeight -= 30;
    background(backCol);
    buttonRect(lengthHeight, 35);
  }
}

function mouseReleased() {
  lengthHeight = 280;
  background(51);
  buttonRect(lengthHeight, 35);
  rollDisplay()
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(51);
  buttonRect(lengthHeight, 35);
  rollDisplay();
}
