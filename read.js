
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
var Rootref1 = database.ref().child("users").child("id: 113295907411766134791").child("trans");
	
Rootref1.on("child_added", snap => { 



var transcript = snap.child("trans").val();

$("#read").append('<tr><td>'+transcript+'</td><td><button id = "clicked">View</button></td></tr>');

$("#clicked").click(function(){  
        $("p").append(" <b>"+transcript+"</b>.");  
    });  

 	
        });
	});
	

