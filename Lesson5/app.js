console.log("testing...");

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

//store the width and height of the canvas
var WIDTH = 600;
var HEIGHT = 400;
//ball x,y coordinates and magnitude
var x,y;
var mx,my
//initialise animation
function init(){
    x = 300;
    y = 200;
    mx = 3;
    my = 4;
    return setInterval(draw,10);
}
//draw circle
function circle(x,y,r){
    ctx.beginPath();
    ctx.arc(x,y,r,0,6.28);
    ctx.closePath();
    ctx.stroke();
    ctx,fillStyle = "red";
    ctx.fill();
}
//clear trail
function clear(){
    ctx.clearRect(0,0,WIDTH,HEIGHT);
}
//draw frames
function draw(){
    //draw the ball
    clear();
    circle(x,y,30);
    //bounce check
    if(x+mx<0 || x+mx>WIDTH){
        mx = -mx;
    }
    if(y+my<0 || y+my>HEIGHT){
        my = -my;
    }
    //move the ball
    x += mx;
    y += my;
}
init();