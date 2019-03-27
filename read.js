


var ref = firebase.database().ref().child("users");
	
ref.on('value', function(snapshot) { 
var test = "test5765";	

var name = snapshot.child().val;
$("#read").append("<tr><td>"+name+"</td></tr>");



 	
        });
	

