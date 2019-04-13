console.log("testing...");

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
/*
ctx.moveTo(50,150);
ctx.lineTo(50,250);
ctx.lineTo(150,250);
ctx.lineTo(150,150);
ctx.lineTo(50,150);
ctx.lineTo(100,100);
ctx.lineTo(200,100);
ctx.lineTo(150,150);
ctx.moveTo(200,100);
ctx.lineTo(200,200);
ctx.lineTo(150,250);
ctx.strokeStyle = "blue";
ctx.lineWidth = 5;
ctx.stroke();
*/
ctx.fillStyle = 'rgb(200, 50 , 10)';
ctx.fillRect(75,125,150,100);
ctx.strokeStyle = "green";
ctx.strokeRect(50,100,200,150);
ctx.clearRect(100,150,100,50);