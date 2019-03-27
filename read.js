var config = {
        apiKey: "AIzaSyB9p1VvVfhnbrcDwUKUuSqw9aQsqnDi4nQ",
        authDomain: "html5project-870df.firebaseapp.com",
        databaseURL: "https://html5project-870df.firebaseio.com",
        projectId: "html5project-870df",
        storageBucket: "html5project-870df.appspot.com",
        messagingSenderId: "54935462861"
      };
    firebase.initializeApp(config);

var database = firebase.database();
var ref = firebase.database().ref().child("users");
	
ref.on('value', (snapshot) => { 
var test = "test5765";	

var name = snapshot.val;
$("#read").append("<tr><td>"+name+"</td></tr>");



 	
        });
	

