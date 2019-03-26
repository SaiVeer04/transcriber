


var ref = firebase.database().ref().child("users");
	
ref.on("child_added", snap => { 
 alert(snap.val);
 	
         });
	

