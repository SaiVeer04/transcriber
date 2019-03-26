var profile;
var userID = null;
// Get a reference to the database service
var database = firebase.database();
var users = null;
var textarea = document.getElementById("noteInput");
var titlearea = document.getElementById("titleText");
var save = document.getElementById("buttonSave");
var load = document.getElementById("buttonLoad");
var givenname = null;
var id_token = null;
var email = null;
var id = null;

save.onclick = function() {
	if (database != null && users != null && !titlearea.value.includes("/")) {
		firebase.database().ref("users/" + id + "/trans/").update ({
		    [titlearea.value]: {
			text: [textarea.value]
		    }
		});	
	} else if (titlearea.value.includes("/")) { 
		alert("The title of your document may not contain a slash, please remove them and try again...");
	} else {
		alert("Please sign in before you try to save!");	
	}
}

load.onclick = function() {
	if (database != null && user != null) {
		// Load data from the drop-down menu selected database.
	} else {
		alert("Please sign-in before loading your saves!");	
	}
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
	      trans: [givenname]
	   }
	});
}

