var profile;
var userID;

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

const app = firebase.initializeApp({
  // use your main config
  databaseUrl: "https://console.firebase.google.com/project/html5project-870df/database/firestore/data/"
});

// This is the default DB.
const db1 = app.database();

// Reference the second DB instance.
// Keep in mind that you need to upgrade to the latest release before this will work!
const db2 = app.database("https://multi-db501c7.firebaseio.com/");
