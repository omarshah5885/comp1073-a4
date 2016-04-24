//xhr.js, Omar Shah, http://omar-comp1073-a4.azurewebsites.net/, xml http request js file.  
(function() {

    "use strict";

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