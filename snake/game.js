const screenWidth=200;
const screenHeight=200;
const frameRate=4;
var running=true;
var frame=0;
var keys = {}; // a dict that show is keys are pressed (keyname: true/false)
window.onkeyup = function(e) { keys[e.key] = false; }
window.onkeydown = function(e) { keys[e.key] = true; }
var deltaTime=0; // The number of milliseconds since the last frame
var lastFrameTime=+new Date(); // Millisecond value of the last frame (used for getting delta time)

var cellWidth=20;
var cellHeight=20;
var headPos={x: 10, y: 10};
var applePos={x: 3, y: 3};
var snakeCells=[];
var direction=1;
var snakeLength=1;
var isDead=false;

var c = document.getElementById("gameScreen");
c.height=screenHeight;
c.width=screenWidth;
var ctx = c.getContext("2d");

function draw() { // Function to draw the player
	//Clear screen
	ctx.fillStyle = "#000040";
	ctx.fillRect(0,0,screenHeight,screenWidth);
	//Draw apple
	ctx.fillStyle = "#ff0000";
	ctx.fillRect(applePos.x*10,applePos.y*10,10,10);
	//Draw snake
	ctx.fillStyle = "#00ff00";
	snakeCells.forEach(function(item){
		ctx.fillRect(item.x*10,item.y*10,10,10);
	});
	ctx.fillStyle = "#ffff00";
	ctx.fillRect(headPos.x*10,headPos.y*10,10,10 );
	if (isDead) {
		ctx.fillStyle="#ff0000";
		ctx.font="29px Consolas"
		ctx.fillText("You died :(", 20,100,165);
		ctx.fillStyle="#ffffff";
		ctx.font="20px Consolas"
		ctx.fillText("Score: "+snakeLength, 45,120,120);
	}
}
function update() {
	snakeCells.forEach(function(item){
		if (snakeCells.lastIndexOf(item)===snakeCells.length-1) {
			return;
		}
		if (item.x===headPos.x && item.y===headPos.y){
			isDead=true;
		}
	});
	if (headPos.x<0 || headPos.x>=20 || headPos.y<0 || headPos.y>=20){
		isDead=true;
	}
	if (!isDead) {
		snakeCells.push({x: headPos.x, y: headPos.y});
		if (snakeCells.length >= snakeLength) {snakeCells.shift();}

		if (direction===0) {headPos.y-=1;}
		if (direction===1) {headPos.x+=1;}
		if (direction===2) {headPos.y+=1;}
		if (direction===3) {headPos.x-=1;}
		if (headPos.x === applePos.x && headPos.y === applePos.y) {eatApple();}
	}
}
function eatApple() {
	console.log("tasty apple");
	snakeLength++;
	applePos.x=Math.floor((Math.random() * 20));
	applePos.y=Math.floor((Math.random() * 20));
	while (applePos in snakeCells===true){
		applePos.x=Math.floor((Math.random() * 20));
		applePos.y=Math.floor((Math.random() * 20));
	}
	document.getElementById("score").innerText="Score: "+snakeLength;
}
function reset() {
	headPos={x: 10, y: 10};
	applePos={x: 3, y: 3};
	snakeCells=[];
	direction=1;
	snakeLength=1;
	isDead=false;
	document.getElementById("score").innerText="Score: "+snakeLength;
}

var interval = setInterval(function() {
	if (!running) return;
	deltaTime=new Date()-lastFrameTime;
	frame++;
	lastFrameTime=+new Date();
	update();
	draw();
}, 1000/frameRate);
var input = setInterval(function() {
	if (keys["d"]) {direction=1;}
	if (keys["a"]) {direction=3;}
	if (keys["w"]) {direction=0;}
	if (keys["s"]) {direction=2;}
}, 80/1000);

function rgbToHex(r,g,b){ // RGB value to Hex value
	if (r>255||g>255||g>255||r<0||g<0||b<0){
		console.log("rgb values must be from 0 to 255");
		return;
	}
	let rHex=r.toString(16);
	if (rHex.length===1) { rHex+="0"; }
	let gHex=g.toString(16);
	if (gHex.length===1) { gHex+="0"; }
	let bHex=b.toString(16);
	if (bHex.length===1) { bHex+="0"; }
	return "#"+rHex+gHex+bHex;
}