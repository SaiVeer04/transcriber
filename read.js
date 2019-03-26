


var ref = firebase.database().ref().child("users");
	
ref.on("child_added", snap => { 
var name = snap.child("user").val;
console.log(name);
alert(snap.val);
 	
         });
	

