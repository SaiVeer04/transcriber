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
        var ref = firebase.database().ref().child("users/").child(id);

        ref.on("child_added", snap => {
        var name = snap.child("0").val();
        console.log(id);
	document.getElementById('test').innerHTML = ;
        });
}
