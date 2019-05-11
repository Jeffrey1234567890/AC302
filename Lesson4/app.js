console.log("testing...");

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

/*var img = new Image();
img.src = "download.jpeg"

img.onload = function(){
    ctx.drawImage(img,0,0,300,300);
} 

ctx.font = "100px Trebuchet MS";
ctx.fillStyle = "lime";
ctx.fillText("Slime",40,125);
ctx.strokeStyle = "blue";
ctx.strokeText("Cube",110,255);
ctx.fillStyle = "magenta";
ctx.fillText("Boing",220,425); */


var steve = new Image();
var alex = new Image();
var zombie = new Image();
var creeper = new Image();
var skeleton = new Image();
var slime = new Image();

steve.src = "steve.png";
alex.src = "alex.png";
zombie.src = "zombie.png";
creeper.src = "creeper.png";
skeleton.src = "skeleton.png";
slime.src = "slime.jpg";

steve.onload = function(){
    ctx.drawImage(steve,-50,50,300,200);
} 
alex.onload = function(){
    ctx.drawImage(alex,200,110,150,200);
} 
zombie.onload = function(){
    ctx.drawImage(zombie,70,250,120,200);
} 
creeper.onload = function(){
    ctx.drawImage(creeper,480,90,100,200);
} 
skeleton.onload = function(){
    ctx.drawImage(skeleton,600,230,100,200);
} 
slime.onload = function(){
    ctx.drawImage(slime,330,300,150,170);
}

ctx.font = "80px PT Serif";
ctx.fillStyle = "rgb(70, 70, 70)";
ctx.fillText("MINECRAFT",180,80);