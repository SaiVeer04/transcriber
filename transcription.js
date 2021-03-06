var final_transcript = '';
var recognizing = false;
//get note input
var notes = document.getElementById("noteInput");
var notes1 = document.getElementById("noteInput");
//check browser supported
if ('webkitSpeechRecognition' in window) {

  var recognition = new webkitSpeechRecognition()
  
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
        //final_transcript += event.results[i][0].transcript;
        notes.innerHTML += capitalize(event.results[i][0].transcript);
      }
    }
    //final_transcript = capitalize(final_transcript);
    //final_span.innerHTML = linebreak(final_transcript);
    notes1.innerHTML = linebreak(notes1.innerHTML);
    
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
  var button = document.createElement("start_button");

  if (recognizing) {
    button.style.background = '#4CAF50';
    button.innerHTML = "Start";
    recognition.stop();
    return;
  }

  button.style.background='#f44336';
  button.innerHTML = "Stop";
  final_transcript = '';
  recognition.lang = 'en-US';
  recognition.start();
  final_span.innerHTML = '';
  interim_span.innerHTML = '';
}
