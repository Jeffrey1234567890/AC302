console.log("testing...");

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

ctx.beginPath();
ctx.arc(150,150,120,0,6.28);
ctx.closePath();
ctx.stroke();
ctx.fillStyle = "cyan";
ctx.fill();
ctx.beginPath();
ctx.moveTo(150,100);
ctx.lineTo(100,186);
ctx.lineTo(200,186);
ctx.lineTo(150,100);
ctx.closePath();
ctx.stroke();
ctx.fillStyle = "green";
ctx.fill();