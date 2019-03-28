var transcript_title = null;
var transcript = null;
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
var Rootref1 = database.ref().child("users").child("id: 113295907411766134791")/*.child("trans")*/;
	
Rootref.on("child_added", snap => { 


alert(snap.val());
transcript_title = snap.child("titles").val().messageText;

transcript = snap.child(transcript_title).val();
$("#read").append('<tr><td>'+transcript_title+'</td><td><button id = "clicked">View</button></td></tr>');

$("#clicked").click(function(){  
        $("p").append(" <b>"+transcript+"</b>.");  
    });  

 	
        });

	

