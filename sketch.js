var roach;
var roaches =[];
var rSlider;
var gSlider;
var bSlider;


function preload(){
	roach = loadImage('libraries/roach.png');
}

function setup(){
	createCanvas(800, 800)
	textSize(15);
	noStroke();

  rSlider = createSlider(0, 255, 100);
  rSlider.position(20, 20);
  gSlider = createSlider(0, 255, 0);
  gSlider.position(20, 50);
  bSlider = createSlider(0, 255, 255);
  bSlider.position(20, 80);

	for(var i=0; i<10; i++){
		roaches.push(new Roaches(random(0, 800), random(0, 800)));

	}
}

function draw(){
  var r = rSlider.value();
  var g = gSlider.value();
  var b = bSlider.value();
	background(r, g, b);

  text("red", rSlider.x * 2 + rSlider.width, 35);
  text("green", gSlider.x * 2 + gSlider.width, 65);
  text("blue", bSlider.x * 2 + bSlider.width, 95);
	for(var i=0; i<10; i++){
		roaches[i].move();
		roaches[i].show();
  
	}


}


function Roaches(x, y, r, g, b){
	this.x = x;
	this.y = y;
	this.r = random(255);
	this.g = random(255);
	this.b = random(255);

	this.show = function(){
		tint(this.r, this.g, this.b);
		image(roach, this.x, this.y);


	}

	this.move = function() {
		this.x += random(1, 4);
		this.y += random(1, -5);
	}

}