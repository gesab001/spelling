
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function sayTheWord(rate, word){
	  // Check if Speech Synthesis supported
  console.log("sayTheWord: " + word);
  if ("speechSynthesis" in window) {
    const msg = new SpeechSynthesisUtterance();
    msg.text = word;
	msg.rate = rate;
    window.speechSynthesis.speak(msg);
  } else {
    // Speech Synthesis Not Supported
    alert("Sorry, your browser doesn't support text to speech!");
  }
}

function sayTheAnswer(rate, word, letterEl){
	  // Check if Speech Synthesis supported
  console.log("sayTheWord: " + word);
  if ("speechSynthesis" in window) {
    const msg = new SpeechSynthesisUtterance();
    msg.text = word;
	msg.rate = rate;
    window.speechSynthesis.speak(msg);
    //letterEl.style.backgroundColor = "yellow";
  } else {
    // Speech Synthesis Not Supported
    alert("Sorry, your browser doesn't support text to speech!");
  }
}

function loadWords(data){
	var containerList = document.getElementById("wordtoGuess");
	var max = data["items"].length;
	
	var randomNumber = getRandomInt(max);
	console.log("max: " + max);
	var word = data["items"][randomNumber];
	console.log(word);
	document.getElementById("answer").style.display = "none";
    document.getElementById("answer").innerHTML = word;

	sayTheWord(1, "Spell " + word);

	
}

function fetchWords(filename){
	
fetch(filename)
  .then((response) => response.json())
  .then(loadWords);
  
}

