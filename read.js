//var transcript_title = null;
//var transcript = null;
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
var Rootref = database.ref().child("users").child("id: 107621796826103613669").child("titles");
//var Rootref1 = database.ref().child("users").child("id: 113295907411766134791")/*.child("trans")*/;

//used to retrieve data	
Rootref.once("child_added", snap => { 
	//gets the child of titles stores it as variable
	var transcript_title = snap.child("titles").val();
	//gets the actual title and stores it as a var
	//var transcript = snap.child(transcript_title).val();

  var numtest = 0;
	//jquery - way to add html elemnts with javascript
  
	  $("#read").append('<h4 id = "clicked">'+transcript_title+'</h4>');
		//$("#read").append('<h4 >Test</h4>');
  
	//when button view was clicked it will show the transcriptiodn
	


        	
    

 });
