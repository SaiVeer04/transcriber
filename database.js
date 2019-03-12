var final_transcript = '';
      var recognizing = false;

      if ('webkitSpeechRecognition' in window) {

        var recognition = new webkitSpeechRecognition();

        recognition.continuous = true;
        recognition.interimResults = true;

        recognition.onstart = function() {
          recognizing = true;
        };

        recognition.onerror = function(event) {
          console.log(event.error);
        };

        recognition.onend = function() {
          recognizing = false;
        };

        recognition.onresult = function(event) {
          var interim_transcript = '';
          for (var i = event.resultIndex; i < event.results.length; ++i) {
            if (event.results[i].isFinal) {
              final_transcript += event.results[i][0].transcript;
            } else {
              interim_transcript += event.results[i][0].transcript;
            }
          }
          final_transcript = capitalize(final_transcript);
          final_span.innerHTML = linebreak(final_transcript);
          interim_span.innerHTML = linebreak(interim_transcript);

        };
      }

      var two_line = /\n\n/g;
      var one_line = /\n/g;
      function linebreak(s) {
        return s.replace(two_line, '<p></p>').replace(one_line, '<br>');
      }

      function capitalize(s) {
        return s.replace(s.substr(0,1), function(m) { return m.toUpperCase(); });
      }

      function startDictation(event) {
        if (recognizing) {
          recognition.stop();
          return;
        }
        final_transcript = '';
        recognition.lang = 'en-US';
        recognition.start();
        final_span.innerHTML = '';
        interim_span.innerHTML = '';
        console.log("Transcript: " + final_transcript);
      }

function onSignIn(googleUser) {
          // Useful data for your client-side scripts:
          var profile = googleUser.getBasicProfile();
          var userID = profile.getId();
          console.log("ID: " + profile.getId()); // Don't send this directly to your server!
          //console.log('Full Name: ' + profile.getName());
          //console.log('Given Name: ' + profile.getGivenName());
          //console.log('Family Name: ' + profile.getFamilyName());
          //console.log("Image URL: " + profile.getImageUrl());
          //console.log("Email: " + profile.getEmail());

          // The ID token you need to pass to your backend:
          //var id_token = googleUser.getAuthResponse().id_token;
          //console.log("ID Token: " + id_token);
          
          
}

const app = firebase.initializeApp({
  // use your main config
  databaseUrl: "https://console.firebase.google.com/project/html5project-870df/database/firestore/data/"
});

// This is the default DB.
const db1 = app.database();

// Reference the second DB instance.
// Keep in mind that you need to upgrade to the latest release before this will work!
const db2 = app.database("https://multi-db501c7.firebaseio.com/");
