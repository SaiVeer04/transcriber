var profile;
var userID;
// Get a reference to the database service
var database = firebase.database();

function onSignIn(googleUser) {
          // Useful data for your client-side scripts:
          profile = googleUser.getBasicProfile();
          userID = profile.getId();
          console.log("ID: " + profile.getId()); // Don't send this directly to your server!
          //console.log('Full Name: ' + profile.getName());
          //console.log('Given Name: ' + profile.getGivenName());
          //console.log('Family Name: ' + profile.getFamilyName());
          //console.log("Image URL: " + profile.getImageUrl());
          //console.log("Email: " + profile.getEmail());

          // The ID token you need to pass to your backend:
          //var id_token = googleUser.getAuthResponse().id_token;
          //console.log("ID Token: " + id_token);
}

var playersRef = firebase.database().ref("players/");

playersRef.set ({
   John: {
      number: 1,
      age: 30
   },
	
   Amanda: {
      number: 2,
      age: 20
   }
});
