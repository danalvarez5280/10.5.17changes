// Phase One
var yourGuess = document.getElementById('entry');

var erase =document.getElementById('clear')

var box = document.getElementById('number');

var hint = document.getElementById('clue');

var submitButton = document.getElementById('guess');

var magicNumber = getRandom();

var lastGuess = document.getElementById('your-number');

submitButton.addEventListener('click', function() {
  var letsPlay = yourGuess.value;
  box.innerText = letsPlay;
  hint.innerText = "";
  lastGuess.innerText = "Your last guess was"
  // figure out how to determine if a string is a number.
  // if(letsPlay == NaN) {
  //   hint.innerText = "Come on Buddy!"
  // }

  if (letsPlay > magicNumber) {
    hint.innerText= 'That is Too High';
  }
  else if (letsPlay < magicNumber) {
    hint.innerText= 'That is Too Low';
  }
  else if (letsPlay == magicNumber) {
    hint.innerText = 'BOOM!';
  }

})

erase.addEventListener('click', function() {
  yourGuess.value = "";
})
function getRandom() {
return Math.floor(Math.random() * (99)) +1;
}
