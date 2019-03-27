
$(document).ready(function(){
var config = {
        apiKey: "AIzaSyB9p1VvVfhnbrcDwUKUuSqw9aQsqnDi4nQ",
        authDomain: "html5project-870df.firebaseapp.com",
        databaseURL: "https://html5project-870df.firebaseio.com",
        projectId: "html5project-870df",
        storageBucket: "html5project-870df.appspot.com",
        messagingSenderId: "54935462861"
      };
//firebase.initializeApp(config);
if (!firebase.apps.length) {
    firebase.initializeApp({});
}
var database = firebase.database();
var Rootref = database.ref().child("users");
	
Rootref.on("child_added", snap => { 
var test = "test5765";	

var name = snap.child("user").val;
console.log(snap.child("user").val);
$("#read").append("<tr><td>"+name+"</td></tr>");



 	
        });
	});
	

