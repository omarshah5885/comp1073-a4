// 
(function() {

    "use strict";

	var request = new XMLHttpRequest();
	request.open('GET', '../json.txt', true);
	request.send();
	request.addEventListener('readystatechange', function() {
		// wait for response 
		if (request.readyState === 4) {

			// declare general object about me which will gather json data 
			var omarInfo = {};

			console.log(omarInfo);
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


			if (documnt.getElementById("aboutMe1")) {
				// loop through each index array elements to fill DOM  
				for (var number = 0; number < index.length; number++) {
					// referencing DOM id tags
					var aboutMe = document.getElementById("aboutMe" + (number + 1));
					// accessing the DOM and using the strings from the index array as its values
					aboutMe.innerHTML = index[number];
				} // end for loop 
			} // end if 
			else if (document.getElementById("project1")) {
				// loop through each projects array elements to fill DOM 
				for (var number = 0; number < projects.length; number++) {
					// referencing project page DOM 
					var project = document.getElementById("project" + (number + 1));
					// accessing project page DOM 
					project.innherHTML = project[number];
				} // end loop
			} // end else if 
			else {
				var connect = document.getElementById("connect" + (number + 1));
				connect.innerHTML = contact[number];
			}

		} // end readystate if 
	}); // end anonymous function and eventlistener   

	if (location.pathname.substring(location.pathname.lastIndexOf("/") + 1) == 'index.html') {

		//onlick event created to link to my contact page once getintouch button is pressed
		var button = document.getElementById("getintouch");
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
	} // end else if 

})();