// DOM manipulation created by Omar Shah for site, omarshah.azurewebsites.net which is a site about me and my works.

"use strict";

//iify 
(function () {
//conditional statement to display my string variables for their respective nodes on each webpage
	if (location.pathname.substring(location.pathname.lastIndexOf("/") + 1) == 'index.html') {

//string variables are as follows
		var aboutMeTitle = document.getElementById("aboutMeTitle");
		aboutMeTitle.innerHTML = "About Me";

		var aboutMe = document.getElementById("aboutMe");
		aboutMe.innerHTML = "Hello, my name is Omar Shah and I am an ambitious developer that wants to be a professional in the field of marketing with emphasis on digital tools and business intelligence. I am currently enrolled at Georgian College's Interactive Web Design and Development program and am seeking a CO-OP for summer 2016 with a firm that has a strong leadership and work culture.";

		var getintouch = document.getElementById("getintouch");
		getintouch.innerHTML = "Get In Touch!";

//onlick event created to link to my contact page once getintouch button is pressed
		var button = document.getElementById("getintouch");
		button.onclick = function () {
			location.href = "contact.html";
		};

	} if (location.pathname.substring(location.pathname.lastIndexOf("/") + 1) == 'projects.html') {

//string variables for my figcaption under each project
		var project1 = document.getElementById("project1");
		project1.innerHTML = "This is a website I created for a product before the popularization of the internet. I chose to do it on the Nintendo NES game console. I used no framework for this project and all the layout was performed manually";

		var project2 = document.getElementById("project2");
		project2.innerHTML = "I created an interactive JavaScript game through a complex set of decision structures. The game is based on randomization and each choice has a different set of outcomes.";

		var project3 = document.getElementById("project3");
		project3.innerHTML = "A PHP coded assignment which links back to few databases I created using SQL. It is a list of NBA players with their stats and any user can add whoever he likes and get an email sent back to him confirming the record. Every input is validated to prevent datatype errors.";
	}
	else if (location.pathname.substring(location.pathname.lastIndexOf("/") + 1) == 'contact.html') {
		var connect = document.getElementById("connect");
		connect.innerHTML = "Connect With Me";

		var connectBlurb = document.getElementById("connectBlurb");
		connectBlurb.innerHTML = "If you're interested with how I can help your organization have a better digital footprint, please feel free to contact me.";
//second onclick function created to link back to home page once submit button is pressed 
		var submit = document.getElementById("submit");
		submit.addEventListener( "click", function (event) {
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
		} );
		
		
	}




})();