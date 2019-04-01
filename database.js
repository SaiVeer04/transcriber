var profile;
var userID = null;
// Get a reference to the database service
var database = firebase.database();
var users = null;
var textarea = document.getElementById("noteInput");
var dropDown = document.getElementById("selectTest");
var titlearea = document.getElementById("titleText");
var save = document.getElementById("buttonSave");
var givenname = null;
var id_token = null;
var email = null;
var uid = "work";
var id = null;
var num = 0;
var titles = "titles";

var date_time = null;

save.onclick = function() {
	var today = new Date();
	var time = today.getFullYear().toString() + today.getMonth().toString() + today.getDay().toString() + today.getHours().toString() + today.getMinutes().toString()  + today.getSeconds().toString();

	var title = titlearea.value;
	if (database != null && users != null && !titlearea.value.includes("/") && /\S/.test(title)) {
		var textValue = textarea.value;
		firebase.database().ref("users/" + id +"/titles").update ({
			[time]:
				titlearea.value,
		});
		firebase.database().ref("users/" + id ).update ({
			[titlearea.value]: {
				text: [textarea.value]
			}
		});
             		
	  	 
		
	} else if (titlearea.value.includes("/")) { 
		alert("The title of your document may not contain a slash, please remove them and try again...");
	} else if (!/\S/.test(title)) {
		alert("Please enter a title before saving!");
	} else {
		alert("Please sign in before you try to save!");	
	}
}

function Add(snapshot) {
        var ddl = document.getElementById("selectTest");
        var option = document.createElement("OPTION");
        var name = snapshot.val();
	var text = snapshot.child("text").val();
	
	console.log("Title: " + name);
	console.log("Name: " + text);
        option.innerHTML = name.toString();
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

        // The ID token you need to pass to your backend:
        //var id_token = googleUser.getAuthResponse().id_token;
	users = firebase.database().ref("users/");
	var select = document.getElementById("selectTest");
	var length = select.options.length;
	for (i = 1; i < length; i++) {
	  	select.options[i] = null;
	}
	var dbRef = database.ref("users/" + id + "");
	dbRef.on("child_added", function(snapshot) {
		if (snapshot.val().toString() != "titles") {
			Add(snapshot);
		}
	});
}

