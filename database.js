const app = firebase.initializeApp({
  // use your main config
  databaseUrl: "https://console.firebase.google.com/project/html5project-870df/database/firestore/data/"
});

// This is the default DB.
const db1 = app.database();

// Reference the second DB instance.
// Keep in mind that you need to upgrade to the latest release before this will work!
const db2 = app.database("https://multi-db501c7.firebaseio.com/");
