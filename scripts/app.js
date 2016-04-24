// CreateJS Banner Ad functionality created by Omar Shah for site, http://omar-comp1073-a4.azurewebsites.net/ which is a site about me and my works.

"use strict";

(function () {

    // step 1 a) create reference to canvas element 
    var canvas = document.getElementById("canvas");

    // step 1 b) set the size of canvas
    var screenWidth = 320;
    var screenHeight = 100;
    canvas.setAttribute("width", screenWidth);
    canvas.setAttribute("height", screenHeight);


	// step 2) create a staging area for the animation by referencing the canvas 
    var stage = new createjs.Stage(canvas);

	// step 5 b) declare every animated text or image as a global variable for accessibility purposes  
	var projectAd, projectText;
	var adMoveX = 0.5;
	var adMoveY = 0.5;
	var isVisible = true;

	// step 3) start an animation session 
    function init() {
        // a) establish a frame rate for animation. 
        createjs.Ticker.framerate = 60;

        // b) link every frame tick event to the animationloop function. 
        createjs.Ticker.addEventListener("tick", animationLoop);

		// c) call the drawing function of the bitmap object to be animated
        drawing();
    }

	// step 4) create animation function which updates the stage upon every frame tick 
    function animationLoop() {
		// move projectAd diagonally back and forth across canvas
		projectAd.x += adMoveX;
		projectAd.y += adMoveY;

		if (projectAd.y >= screenHeight) {
			adMoveY -= 0.5;
        }
		if (projectAd.x >= screenWidth) {
			adMoveX -= 0.5
			adMoveY += 0.5;
		}
		if (projectAd.x <= 0) {
			adMoveX += 0.5;
			adMoveY += 0.5;
		}

		// create a glowing effect on text by dimming and raising transparency 

		if (isVisible) {
			if (projectText.alpha <= 1) {
				projectText.alpha *= 0.99;
			}
			else {
				isVisible = false;
			}
		} else {
			if (projectText.alpha <= 0.40) {
				projectText.alpha *= 1.10;
			}
			else {
				isVisible = true;
			}
		}

		// after numerous failed attempts at alpha if statement, I decided to create a glowing effect by the following code: 
		if (projectText.alpha < 0.40) {
			projectText.alpha = 1.0;
		}


		// redraws stage object per frame from scratch
        stage.update();
    }

    // step 5 a) create a drawing function which provides the image or text object that will be animiated 
    function drawing() {
		// create an ad image to display on canvas 
		projectAd = new createjs.Bitmap("content/images/jsgame.jpg");
		// scale the image
		projectAd.scaleX = 0.10;
		projectAd.scaleY = 0.10;
		// append image to stage 
        stage.addChild(projectAd);

		// add a text object on canvas to entice viewers to click 
		projectText = new createjs.Text("View Now!", "20px Candara", "#fff");

		// change registration mark of text object from top left to direct middle
        projectText.regX = projectText.getMeasuredWidth() * 0.5;
        projectText.regY = projectText.getMeasuredHeight() * 0.5;

        // move text to the middle of the canvas
        projectText.x = screenWidth * 0.5;
        projectText.y = screenHeight * 0.5;

        // append to the stage
        stage.addChild(projectText);

        projectText.on("click", function () {
			location.href = "projects.html";
        });



    }

    // step 6) load the animation session on windows screen by calling init function
    window.onload = init;

})();