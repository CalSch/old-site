var score=0;
var highscore=getCookie("highscore") || 0;
var boxes=collToList(document.getElementsByClassName("box"));

function random(min,max){
	return Math.floor(Math.random() * (max-min+1)) + min;
}

function bttnClick(num){
	if (num===boxNum) {
		score++;
		if (score>highscore) {
			highscore=score;
			setCookie("highscore", highscore, 365);
		}
	}
	else score-=2;
	updateScore();
	updateBlocks();
}
function updateBlocks() {
	boxNum=random(1,6);
	let box=document.getElementById("box"+boxNum);
	boxes.forEach((elm) => {
		elm.classList.remove("blue");
	});
	box.classList.add("blue");
}
function updateScore(){
	document.getElementById("boxgame-score").innerHTML=score;
	document.getElementById("boxgame-highscore").innerHTML=highscore;
}
updateBlocks();
updateScore(15);