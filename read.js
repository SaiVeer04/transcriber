


var ref = firebase.database().ref().child("users");
	
ref.on('value', (snapshot) => { 
var test = "test5765";	

var name = snapshot.val;
$("#read").append("<tr><td>"+name+"</td></tr>");



 	
        });
	

