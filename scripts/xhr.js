//xhr.js, Omar Shah, http://omar-comp1073-a4.azurewebsites.net/, xml http request js file.  
(function() {

    "use strict";

    // step 1 a) create reference to canvas element 
    var canvas = document.getElementById("canvas");
    
    // step 1 b) set the size of canvas
    var screenWidth = 320;
    var screenHeight = 100;
    canvas.setAttribute("width", screenWidth);
    canvas.setAttribute("height", screenHeight);
	

	// step 2) create a staging area for the animation by referencing the canvas 
    var stage = new createjs.Stage(canvas);
	
	// step 5 b) declare every animated text or image as a global variable  
	var projectAd;
	
	// step 3) start an animation session 
    function init() {
        // a) establish a frame rate for animation. 
        createjs.Ticker.framerate = 60;

        // b) link every frame tick event to the animationloop function. 
        createjs.Ticker.addEventListener("tick", animationLoop); 
        
		// c) call the drawing function of the bitmap object to be animated
        drawing();
    }

	// step 4) create animation function which updates/redraws the stage upon every frame tick 
    function animationLoop() {


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


    }

    // step 6) load the animation session on windows screen by calling init function
    window.onload = init;






// AJAX request to JSON text file
	var request = new XMLHttpRequest();
	request.open('GET', 'json.txt', true);
	request.send();
	request.addEventListener('readystatechange', function() {
		// wait for response 
		if (request.readyState === 4) {

			// declare general object about me which will gather json data 
			var omarInfo = {};

			// parse the json file into object
			omarInfo = JSON.parse(request.responseText);

			// declare array representing each key from object
			var index = [];
			var projects = [];
			var contact = [];

			// read in the string arrays from the object
			index = omarInfo.index_strings;
			projects = omarInfo.projects_strings;
			contact = omarInfo.contact_strings;


			if (document.getElementById("aboutMe1")) {
				// loop through each index array elements to fill DOM  
				for (var number = 0; number < index.length; number++) {
					// referencing DOM id tags
					var aboutMe = document.getElementById("aboutMe" + (number + 1));
					// accessing the DOM and using the strings from the index array as its values
					aboutMe.innerHTML = index[number];
				} // end for loop 
			} // end if 
			else if ( document.getElementById("project1") ) {
				// loop through each projects array elements to fill DOM 
				for (var number = 0; number < projects.length; number++) {
					// referencing project page DOM 
					var project = document.getElementById("project" + (number + 1));
					// accessing project page DOM 
					project.innerHTML = projects[number];
					console.log(projects[number]);
					console.log(project);
				} // end loop
			} // end else if 
			else {
				for (var number = 0; number < contact.length; number++) {
					var connect = document.getElementById("connect" + (number + 1));
					connect.innerHTML = contact[number];
				}
				
			}

		} // end readystate if 
	}); // end anonymous function and eventlistener   

	if (location.pathname.substring(location.pathname.lastIndexOf("/") + 1) == 'index.html') {

		//onlick event created to link to my contact page once getintouch button is pressed
		var button = document.getElementById("aboutMe3");
		button.onclick = function() {
			location.href = "contact.html";
		};

	} // end if 
	else if (location.pathname.substring(location.pathname.lastIndexOf("/") + 1) == 'contact.html') {
		var submit = document.getElementById("submit");
		submit.addEventListener("click", function(event) {
			//input variables created in order to be displayed on console;
			var save_contact = document.getElementById("name");
			var save_contact2 = document.getElementById("email");
			var save_contact3 = document.getElementById("phone");
			var save_contact4 = document.getElementById("comment");

			console.log("Name: " + save_contact.value);
			console.log("Email: " + save_contact2.value);
			console.log("Phone: " + save_contact3.value);
			console.log("Comment: " + save_contact4.value);
			//test function to prevent submit button functionality
			event.preventDefault();
			// location.href = "index.html";
				
		});
		// linking google maps API by creating the mapOptions object 
		var mapOptions = {
			center: new google.maps.LatLng(44.4120, 79.6678),
			zoom: 12,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		};
		// calling the Map() constructor and setting the map id and object as parameters
		var map = new google.maps.Map(document.getElementById("map"), mapOptions);
		

	} // end else if 

})();