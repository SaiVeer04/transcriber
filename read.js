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
//         var ref = firebase.database().ref().child("users/" + id);
	
	ref.on("child_added", snap => {
         var userid = snap.child("id").val();
         console.log("test");
 	 var document.getElementById('test').innerHTML = userid;
         });
	
	/*var ref = firebase.database().ref().child("users/" + id);
	ref.on("child_added", function(snapshot, prevChildKey) {
	  var newPost = snapshot.val();
	  console.log("Author: " + newPost.author);
	  console.log("Title: " + newPost.title);
	  console.log("Previous Post ID: " + prevChildKey);
	});
}*/
