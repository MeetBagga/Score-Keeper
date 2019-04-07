var p1button=document.getElementById("p1");
var p2button=document.getElementById("p2");
var resetButton=document.getElementById("reset");
var numInput=document.getElementsByTagName("input");
var max=document.getElementById("maxscore");

var score1=document.querySelector("#score1");
var score2=document.querySelector("#score2");

var p1Score=0;
var p2Score=0;

var gameOver=false;
var winningScore=Number(numInput[0].value);

p1button.addEventListener("click",function(){
	if(!gameOver)
	{
		p1Score++;
		if(p1Score===winningScore)
		{
			score1.classList.add("colorchange");
			gameOver=true;
		}
		score1.textContent=p1Score;
	}
	
});

p2button.addEventListener("click",function(){
	if(!gameOver)
	{
		p2Score++;
		if(p2Score===winningScore)
		{
			score2.classList.add("colorchange");
			gameOver=true;
		}
		score2.textContent=p2Score;
	}
});	

resetButton.addEventListener("click",function(){
	reset();
});

function reset()
{
	p1Score=0;
	p2Score=0;
	score1.textContent=0;
	score2.textContent=0;
	score1.classList.remove("colorchange");
	score2.classList.remove("colorchange");
	gameOver=false;
}

numInput[0].addEventListener("change",function(){
	max.textContent=Number(numInput[0].value);
	winningScore=Number(numInput[0].value);
	reset();
});
