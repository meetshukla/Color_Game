var colors=generateRandomColors(6)

var squares=document.querySelectorAll(".square");
var pickedcolor=pickcolor()

var colordisplay=document.getElementById("colordisplay");
colordisplay.textContent=  pickedcolor;

var tryagain=document.getElementById("tryagain");
var h1color=document.getElementById("change");

var newgame=document.getElementById("newgame");

var easy=document.getElementById("easy");
var hard=document.getElementById("hard");
var l=6;

easy.addEventListener("click",function(){
	hard.classList.remove("selected");
	easy.classList.add("selected");
	colors=generateRandomColors(3);
	pickedcolor=pickcolor();
	colordisplay.textContent=pickedcolor;
	squares.length=3;
	for (var i=0;i<squares.length;i++){
		if(colors[i]){
		squares[i].style.background=colors[i];
		}
		else{
			squares[i].style.display="none"
		}
	}
	l=3
})

hard.addEventListener("click",function(){
	hard.classList.add("selected");
	easy.classList.remove("selected");
	colors=generateRandomColors(6);
	pickedcolor=pickcolor();
	colordisplay.textContent=pickedcolor;
	for (var i=0;i<squares.length;i++){
		squares[i].style.background=colors[i];
		squares[i].style.display="block";
	}
	l=6;
})


newgame.addEventListener("click",function(){
	colors=generateRandomColors(l);
	pickedcolor=pickcolor();
	colordisplay.textContent=pickedcolor;
	for (var i=0;i<squares.length;i++){
		squares[i].style.background=colors[i];
	}   
	h1color.style.background="steelblue ";
	tryagain.textContent="";
	newgame.textContent="New Game";
})


function generateRandomColors(num){
	var arr=[]

	for(var i=0;i<num;i++){
		arr.push(randomColor())
	}

	return arr;
}

function randomColor(){
	var r=Math.floor(Math.random()*256)
	var g=Math.floor(Math.random()*256)
	var b=Math.floor(Math.random()*256)
	return "rgb("+r+", "+g+", "+b+")"; 
}
for(var i=0;i<squares.length;i++){
	squares[i].style.background=colors[i];
}

function pickcolor(){
	var random=Math.floor(Math.random()*colors.length);
	return colors[random]
	}


	for (var i=0;i<l;i++){
	squares[i].addEventListener("click",function(){
		console.log("byeee")
		var clickedcolor=this.style.background;
		if(clickedcolor===pickedcolor){
			tryagain.textContent="Correct!";
			newgame.textContent="Play Again?"; 
			for(var i=0;i<l;i++){
				squares[i].style.background=pickedcolor;
			}
			h1color.style.background=pickedcolor;	
		}
		else{
			this.style.background="#232323";
			tryagain.textContent="Try Again";
		}
	}
	)
}
