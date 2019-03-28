var profile;
var userID = null;
// Get a reference to the database service
var database = firebase.database();
var users = null;
var textarea = document.getElementById("noteInput");
var titlearea = document.getElementById("titleText");
var save = document.getElementById("buttonSave");
var givenname = null;
var id_token = null;
var email = null;
var uid = "work";
var id = null;
var num = 0;

save.onclick = function() {
	var title = titlearea.value;
	if (database != null && users != null && !titlearea.value.includes("/") && /\S/.test(title)) {
		var textValue = textarea.value;
		firebase.database().ref("users/" + id ).update ({
	
			titles : [titlearea.value],
			[titlearea.value]: [textValue],
			
		});	
	} else if (titlearea.value.includes("/")) { 
		alert("The title of your document may not contain a slash, please remove them and try again...");
	} else if (!/\S/.test(title)) {
		alert("Please enter a title before saving!");
	} else {
		alert("Please sign in before you try to save!");	
	}
}

function Add() {
       var ddl = document.getElementById("selectTest");
       var option = document.createElement("OPTION");
       option.innerHTML = "InnerHTML";
       option.value = "Value";
       ddl.options.add(option);
}

function onSignIn(googleUser) {
        // Useful data for your client-side scripts:
        profile = googleUser.getBasicProfile();
	id_token = googleUser.getAuthResponse().id_token;
        givenname = profile.getGivenName();
	email = profile.getEmail();
	id = profile.getId();
	id = "id: " + id;
	
        //console.log("ID: " + profile.getId()); // Don't send this directly to your server!
        //console.log('Full Name: ' + profile.getName());
        //console.log('Given Name: ' + profile.getGivenName());
        //console.log('Family Name: ' + profile.getFamilyName());
        //console.log("Image URL: " + profile.getImageUrl());
        //console.log("Email: " + profile.getEmail());

        // The ID token you need to pass to your backend:
        //var id_token = googleUser.getAuthResponse().id_token;
	users = firebase.database().ref("users/");

	users.update({
	   [id]: {
              id_token: [id_token],
	      user: givenname,
	   }
	});
}

