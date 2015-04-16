$(document).ready(function(){
	
document.body.onmousedown = function() { return false; } //so page is unselectable

	//Canvas stuff
	var canvas = $("#canvas")[0];
	var ctx = canvas.getContext("2d");
	initializeLib(ctx);
	var w = $("#canvas").width();
	var h = $("#canvas").height();
	var mx, my;

	numObjects = 0;
	numObjectsLoaded =0;
	var screen = 0;
	
	var mybackround = makePicture('Images/titan.png')
	var mybackround2 = makePicture('Images/rose.jpg')
	var mybackround3 = makePicture('Images/game over.jpg')
	//teemo X 4
	var teemox4 = createObjectPic('Images/teemox4.png')
	var tx4pt = 4
	//jinx
	var jinx2 = createObjectPic('Images/jinx2.png')
	jinx2.addFrames('Images/jinx3.png');
	jinx2.addFrames('Images/jinx1.png');
	jinx2.animationDelay = 2.5
	//jinx2.addFrames('Images/jinx4.png');
	
	//teemo
	var satan = createObjectPic('Images/teemo.png')
	//satan.addFrames('Images/hitmarker.png');
	var satan1 = createObjectPic('Images/teemo.png')
	//satan1.addFrames('Images/hitmarker.png');
	var satan2 = createObjectPic('Images/teemo.png')
	//satan2.addFrames('Images/hitmarker.png');
	var satan3 = createObjectPic('Images/teemo.png')
	//satan3.addFrames('Images/hitmarker.png');
	var satan4 = createObjectPic('Images/teemo.png')
	//satan4.addFrames('Images/hitmarker.png');
	//hitmarkers
	var hitmarker = createObjectPic('Images/hitmarker.png');
	var hitmarker1 = createObjectPic('Images/hitmarker.png');
	var hitmarker2 = createObjectPic('Images/hitmarker.png');
	var hitmarker3 = createObjectPic('Images/hitmarker.png');
	var hitmarker4 = createObjectPic('Images/hitmarker.png');
	// hitmarker sound
	var hitmarkersound = addSound('Sounds/sound.mp3')
	var hitmarkersound1 = addSound('Sounds/sound.mp3')
	var hitmarkersound2 = addSound('Sounds/sound.mp3')
	var hitmarkersound3 = addSound('Sounds/sound.mp3')
	var hitmarkersound4 = addSound('Sounds/sound.mp3')
	//bullet
	var bullet = createObjectPic ('Images/bullet.png')
	
	//music button
	var soundFile = addSound('Sounds/AOT.mp3')
	var button4 = createButton(w-100,h-100, 100,100, 'Images/AOT.gif', "")
		button4.job = function(){
		soundFile.play()
		
	}
	//scoreboard
	var scoreboard = 0
	
	//pause button
	var button5 = createButton (w-100,h-200,100,100, 'Images/pause.png', '')
		button5.job = function(){
		soundFile.pause();
	}
	
	
	//button one
	var button1 = createButton(200, 100, 200, 50, null, 'Play Game')
	button1.colour = 'purple'
	button1.textCol = 'black'
	button1.job=function(){
	 screen = 2
	
	}
	
	//button two
	var button2 = createButton(200, 200, 200, 50, null, 'Credits')
	button2.colour = 'purple'
	button2.textCol = 'black'
	button2.job=function(){
	 screen = 3
	
	}
	//button three
	var button3 = createButton(200, 300, 200, 50, null, 'Instructions')
	button3.colour = 'purple'
	button3.textCol = 'black'
	button3.job=function(){
	 screen = 4
	
	}
	//button six
	var button6 = createButton (200, 200, 200,50, 'Images/retry.jpg')
	button6.job=function(){
	jinx2.x = 0
	jinx2.y = 100	
	screen = 2
	scoreboard = 0
	satan.x = 1000
	satan.y = Math.random()*(h-150)
	satan1.x = 1000
	satan1.y = Math.random()*(h-150)
	satan2.x = 1000
	satan2.y = Math.random()*(h-150)
	satan3.x = 1000
	satan3.y = Math.random()*(h-150)
	satan4.x = 1000
	satan4.y = Math.random()*(h-150)
	hitmarker.x = 2000
	hitmarker.y = 2000
	hitmarker1.x = 2000
	hitmarker1.y = 2000
	hitmarker2.x = 2000
	hitmarker2.y = 2000
	hitmarker3.x = 2000
	hitmarker3.y = 2000
	hitmarker4.x = 2000
	hitmarker4.y = 2000
	teemox4.x = 5000
	teemox4.y = 5000
	}
	/////////////////////////////////
	////////////////////////////////
	////////	GAME INIT
	///////	Runs this code right away, as soon as the page loads.
	//////	Use this code to get everything in order before your game starts 
	//////////////////////////////
	/////////////////////////////
	function init()
	{
	/////////////////////
	///STATE VARIABLES
	/// All your variables get their start values here.
	jinx2.scale = .2
	jinx2.x = 0
	jinx2.y = 100	
	jinx2.speedx = 18;
	jinx2.speedy = 25;
	//teemo
	satan.scale = .5
	satan.x = 800
	//satan.y = Math.random()*(h-150)
	satan1.scale = .5
	satan1.x = 800
	//satan1.y = Math.random()*(h-150)
	satan2.scale = .5
	satan2.x = 800
	//satan2.y = Math.random()*(h-150)
	satan3.scale = .5
	satan3.x = 800
	//satan3.y = Math.random()*(h-150)
	satan4.scale = .5
	satan4.x = 800
	//satan4.y = Math.random()*(h-150)
	//bullet movements
	bullet.scale = .3
	bullet.x = 1000
	bullet.y = 1000
	bullet.speedx = 40
	//teemo
	satan.speedx = -13
	satan1.speedx = -13
	satan2.speedx = -13
	satan3.speedx = -13
	satan4.speedx = -13
	//teemox4
	teemox4.scale = .5
	teemox4.x = 800
	teemox4.speedx = -10
	//hitmarker
	hitmarker.x = 2000
	hitmarker.y = 2000
	hitmarker.scale = .6
	hitmarker1.x = 2000
	hitmarker1.y = 2000
	hitmarker1.scale = .6
	hitmarker2.x = 2000
	hitmarker2.y = 2000
	hitmarker2.scale = .6
	hitmarker3.x = 2000
	hitmarker3.y = 2000
	hitmarker3.scale = .6
	hitmarker4.x = 2000
	hitmarker4.y = 2000
	hitmarker4.scale = .6
	//////////////////////
	///GAME ENGINE START
	//	This starts your game/program
	//	"paint is the piece of code that runs over and over again, so put all the stuff you want to draw in here
	//	"60" sets how fast things should go
	//	Once you choose a good speed for your program, you will never need to update this file ever again.

	if(typeof game_loop != "undefined") clearInterval(game_loop);
		game_loop = setInterval(paint, 60);
	}

	init();	
	


	
	
	
	///////////////////////////////////////////////////////
	//////////////////////////////////////////////////////
	////////	Main Game Engine
	////////////////////////////////////////////////////
	///////////////////////////////////////////////////
	function paint()
	{
		///////////////////////
		//	CLEAR THE SCREEN
		////////////////////
		ctx.fillStyle = 'white';
		ctx.fillRect(0,0, w, h);	
		
		
		
		if(screen == 0){
		/////////////////////
		//	LOADING SCREEN
			ctx.fillStyle = 'red';
			ctx.fillText("Loading Images & Sounds: " + numObjectsLoaded + "/" + numObjects,100,100)
		
			if(numObjectsLoaded >= numObjects) screen = 1;
		
		}else if(screen == 1){
		////////////////////
		//	MAIN MENU
		
		
			ctx.fillStyle = 'blue'
			ctx.fillText("Loaded",100,100);
			
			ctx.drawImage(mybackround,0, 0, w, h)
			button1.draw();
			button2.draw();
			button3.draw();
			button4.draw();
			button5.draw();
			
		}else if(screen == 2){
		////////////////////
		//	GAME SCREEN 1
			ctx.drawImage(mybackround2,0, 0, w, h)
		jinx2.draw();
			//bullet
		bullet.draw();
		bullet.x = bullet.x + bullet.speedx
			
			if (bullet.collideObject (satan)){
			
			bullet.x = 1500
			
			hitmarker.x = satan.x
			hitmarker.y = satan.y
			hitmarkersound.play()
			satan.x = 1000
			satan.y = Math.random()*(h-150)
			scoreboard += 1
			}
			else if (bullet.collideObject (satan1)){
			bullet.x = 2000
			hitmarker1.x = satan1.x
			hitmarker1.y = satan1.y
			hitmarkersound1.play()
			satan1.x = 1000
			satan1.y = Math.random()*(h-150)
			scoreboard += 1
			}
			if (bullet.collideObject (satan2)){
			bullet.x = 2000
			hitmarker2.x = satan2.x
			hitmarker2.y = satan2.y
			hitmarkersound2.play()
			satan2.x = 1000
			satan2.y = Math.random()*(h-150)
			scoreboard += 1
			}
			if (bullet.collideObject (satan3)){
			bullet.x = 2000
			hitmarker3.x = satan3.x
			hitmarker3.y = satan3.y
			hitmarkersound3.play()
			satan3.x = 1000
			satan3.y = Math.random()*(h-150)
			scoreboard += 1
			}
			if (bullet.collideObject (satan4)){
			bullet.x = 2000
			hitmarker4.x = satan4.x
			hitmarker4.y = satan4.y
			hitmarkersound4.play()
			satan4.x = 1000
			satan4.y = Math.random()*(h-150)
			scoreboard += 1
			}
			if (scoreboard <= 10){
			teemox4.x = 1000
			teemox4.y = Math.random()*(h-150)
			satan.x
			satan.speedx = -5
			satan1.speedx = -5
			satan2.speedx = -5
			satan3.speedx = -5
			satan4.speedx = -5
			}
			if (bullet.collideObject (teemox4)){
			tx4pt--;
			bullet.x = 2000
			hitmarker4.x = teemox4.x
			hitmarker4.y = teemox4.y
			hitmarkersound4.play()
			}
			if(tx4pt<=0){
			teemox4.x = 5000; tx4pt = 4
			}
			if(satan.x <0||satan1.x <0||satan2.x <0||satan3.x <0||satan4.x <0){
			
			screen = 4
			}
			else if(bullet.x > 600){
			bullet.x = 5000
			}
			//teemo
			satan.x = satan.x + satan.speedx
			satan2.x = satan2.x + satan2.speedx
			satan3.x = satan3.x + satan3.speedx
			satan4.x = satan4.x + satan4.speedx
			teemox4.x = teemox4.x + teemox4.speedx
			//teemo
		satan.draw();
		satan1.draw();
		satan2.draw();
		satan3.draw();
		satan4.draw();
		teemox4.draw();
		ctx.fillText(scoreboard,100,100)
			//hitmarkers
		hitmarker.draw();
		hitmarker1.draw();
		hitmarker2.draw();
		hitmarker3.draw();
		hitmarker4.draw();
			//credit screen
		}else if(screen == 3){
		ctx.fillStyle = 'black';
		ctx.fillRect(0,0, w, h);
		ctx.fillRect(0,0, w, h);
		ctx.font = '30px Areil';	
		ctx.fillStyle = 'purple'
		ctx.fillText('Credits', 245, 100)
		ctx.fillText('Creator: Nathan', 245, 200)
		ctx.fillText('Teacher: Mr.Guzy', 245, 300)
		
		}
		else if(screen == 4){
		ctx.fillStyle = 'black';
		ctx.fillRect(0,0, w, h);
		ctx.drawImage(mybackround3,0, 0, w, h)
		ctx.font = '50px Areil';	
		ctx.fillStyle = 'purple'
		ctx.fillText('Game Over!', 230, 450)
		ctx.fillText(scoreboard , 290, 160)
		button6.draw();
		
		}
		
		
	}////////////////////////////////////////////////////////////////////////////////END PAINT/ GAME ENGINE
	

	

	
	
	
	////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////
	/////	MOUSE LISTENER 
	//////////////////////////////////////////////////////
	//////////////////////////////////////////////////////
	
	/////////////////
	// Mouse Click
	///////////////
	canvas.addEventListener('click', function (evt){
		
		//Runs this code whenever the mouse is clicked
		//For more screens for your game, just add more else ifs
		if(screen == 0){
		
		
		}else if (screen == 1){
		
		if(button1.isMouseOver()) button1.job();
		if(button2.isMouseOver()) button2.job();
		if(button3.isMouseOver()) button3.job();
		if(button4.isMouseOver()) button4.job();
		if(button5.isMouseOver()) button5.job();
		if(button6.isMouseOver()) button6.job();
		}else if(screen == 4){
		
		if(button6.isMouseOver()) button6.job();
		}
		
	   
		 
	}, false);

	
	

	canvas.addEventListener ('mouseout', function(){pause = true;}, false);
	canvas.addEventListener ('mouseover', function(){pause = false;}, false);

      	canvas.addEventListener('mousemove', function(evt) {
        	var mousePos = getMousePos(canvas, evt);

		mx = mousePos.x;
		my = mousePos.y;
		updateMouse(mx,my);

      	}, false);


	function getMousePos(canvas, evt) 
	{
	        var rect = canvas.getBoundingClientRect();
        	return {
          		x: evt.clientX - rect.left,
          		y: evt.clientY - rect.top
        		};
      	}
      

	///////////////////////////////////
	//////////////////////////////////
	////////	KEY BOARD INPUT
	////////////////////////////////


	

	window.addEventListener('keydown', function(evt){
		var key = evt.keyCode;
	
	
	
	//p 80
	//r 82
	//1 49
	//2 50
	//3 51
	// up 38
	//down 40
	//right 39
	//left 37
	//space 32
	
		if(key==65){//left
			//jinx2.x -= Math.abs (jinx2.speedx)
			//if(jinx2.x < 0) jinx2.x=0
		}else if (key == 87){//up
			jinx2.y -= Math.abs (jinx2.speedy)
			if(jinx2.y < 0) jinx2.y=0
		}else if (key == 68){//right
			//jinx2.x += Math.abs (jinx2.speedx)
			//if(jinx2.x > 640 - jinx2.width) jinx2.x=640 -jinx2.width
		}else if (key == 83){//down
			jinx2.y += Math.abs (jinx2.speedy)
			if(jinx2.y > 480 -jinx2.height) jinx2.y=480 -jinx2.height
		}else if (key == 32){//shoot
			if(bullet.x > w || bullet.speedx == 0){
				bullet.x = jinx2.x + 60
				bullet.y = jinx2.y + 10
				bullet.speedx = 40
			}
		}
		
	}, false); //End the event listener

	

	

})

