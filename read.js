


var ref = firebase.database().ref().child("users");
	
ref.on("child_added", snap => { 
var test = "test5765";	
var name = snap.child("id").val;
$("#read").append("<tr><td>"+name+"</td></tr>");

 	
         });
	

