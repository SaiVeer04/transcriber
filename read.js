
//var titlejson = JSON.parse(title_s);
var teststring = "Test";


//This is to intialize everything and auth. with the firebase server
var config = {
        apiKey: "AIzaSyB9p1VvVfhnbrcDwUKUuSqw9aQsqnDi4nQ",
        authDomain: "html5project-870df.firebaseapp.com",
        databaseURL: "https://html5project-870df.firebaseio.com",
        projectId: "html5project-870df",
        storageBucket: "html5project-870df.appspot.com",
        messagingSenderId: "54935462861"
      };
//firebase.initializeApp(config);
//checks if it has been init
if (!firebase.apps.length) {
    firebase.initializeApp({});
}
//declare variables
var database = firebase.database();
//tells where the items are going to be	
var Rootref = database.ref().child("users");
var ref = firebase.database().ref("users");

ref.on("value", function(snapshot) {
   console.log(snapshot.val());
}, function (error) {
   console.log("Error: " + error.code);
});
//var Rootref1 = database.ref().child("users").child("id: 113295907411766134791")/*.child("trans")*/;

//used to retrieve data	
Rootref.on("child_added",snap => { 
	//gets the child of titles stores it as variable
  var transcript_title = snap.child("titles").val();
	//var transcript_title = (snap.val() && snap.val().titles);
	//gets the actual title and stores it as a var
	//var transcript = snap.child(transcript_title).val();

  $('#transcrip').val(snap.child('users/id: 107621796826103613669'))
	//jquery - way to add html elemnts with javascript
  
	 snap.child("titles").forEach(function(titleSnap) {
  $("#read").append('<h4 id = "clicked">'+titleSnap.val()+'</h4>');
})

  console.log(teststring);
  $( "#TitleButton" ).click(function() {
  var title_s = document.getElementById('TitleSearch');
   
   var search = snap.child(title_s.value).val();

  if(search != null){
  $("#ReadHere").append('<p>'+search+'</p>');
  
  }
   
  
  });
		//$("#read").append('<h4 >Test</h4>');
  
	//when button view was clicked it will show the transcriptiodn
	


        	
    

 });
