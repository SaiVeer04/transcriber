


var ref = firebase.database().ref().child("users");
	
ref.on("value", snap => { 
var test = "test5765";	
var name = snap.child("user").val;
$("#read").append("<tr><td>"+name+"</td></tr>");

 	
         });
	

