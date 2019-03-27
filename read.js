


var ref = firebase.database().ref().child("users");
	
ref.on("value", snap => { 
var test = "test5765";	
snap.forEach(function(data) {
var name = data.child("id: 107621796826103613669").val;
$("#read").append("<tr><td>"+name+"</td></tr>");
});


 	
         });
	

