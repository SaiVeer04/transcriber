


var ref = firebase.database().ref().child("users/id");
	
ref.on("child_added", snap => { 
var name = snap.child("id").val;
console.log(name);
alert(snap.val);
 	
         });
	

