$(document).ready(function(){
  var ref = firebase.database().ref().child("users");

  ref.on("child_added", snap => {
  var name = snap.child("0").val();

  });
 });

