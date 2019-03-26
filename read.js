
  var ref = firebase.database().ref().child(id);

  ref.on("child_added", snap => {
  var name = snap.child("0").val();
  console.log(id);
  });
 
