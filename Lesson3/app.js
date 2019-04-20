console.log("testing...");

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var ctx2 = c.getContext("2d");
var ctx3 = c.getContext("2d");
var ctx4 = c.getContext("2d");

ctx2.beginPath();
ctx2.arc(150,150,120,0,6.28);
ctx2.closePath();
ctx2.stroke();
ctx2.fillStyle = "cyan";
ctx2.fill();

ctx3.beginPath();
ctx3.moveTo(150,100);
ctx3.lineTo(100,186);
ctx3.lineTo(200,186);
ctx3.lineTo(150,100);
ctx3.closePath();
ctx3.stroke();
ctx3.fillStyle = "green";
ctx3.fill();
