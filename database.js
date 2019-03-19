var profile;
var userID;
// Get a reference to the database service
var database = firebase.database();
var users = null;

var save = document.getElementById("buttonSave");

save.onclick = function() {
	if (database != null && users != null) {
		users.update ({
		   [name]: {
		      transcript: [$("inputArea").val()]
		   }
		});	
	} else {
			
	}
}

function onSignIn(googleUser) {
        // Useful data for your client-side scripts:
        profile = googleUser.getBasicProfile();
	var id_token = googleUser.getAuthResponse().id_token;
        var name = profile.getGivenName();
	var email = profile.getEmail();
        //console.log("ID: " + profile.getId()); // Don't send this directly to your server!
        //console.log('Full Name: ' + profile.getName());
        //console.log('Given Name: ' + profile.getGivenName());
        //console.log('Family Name: ' + profile.getFamilyName());
        //console.log("Image URL: " + profile.getImageUrl());
        //console.log("Email: " + profile.getEmail());

        // The ID token you need to pass to your backend:
        //var id_token = googleUser.getAuthResponse().id_token;
	users = firebase.database().ref("users/");

	users.update ({
	   [name]: {
	      userIdToken: [id_token],
              email: [email],
	      transcript: "test"
	   }
	});

}
