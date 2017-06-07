// Phase One
var yourGuess = document.getElementById('entry');

var eraseButton =document.getElementById('clear')

var lastGuess = document.getElementById('your-number');

var box = document.getElementById('number');

var hint = document.getElementById('clue');

var submitButton = document.getElementById('guess');

var startOverButton = document.getElementById('reset')

var minNumTextBox = document.getElementById('min');

var maxNumTextBox = document.getElementById('max');

// This will generate my random Number
function getRandom() {
  var maxNum = parseInt(maxNumTextBox.value);
  var minNum = parseInt(minNumTextBox.value);
  return Math.floor(Math.random() * (maxNum - minNum)) + minNum;
}

// This is the random number as a variable.
var magicNumber = getRandom();

// This is the all the conditions of pushing the guess button.
submitButton.addEventListener('click', function() {
  var letsPlay = parseInt(yourGuess.value);
  lastGuess.innerText = "Your last guess was";
  box.innerText = letsPlay;
  hint.innerText = "";

  var maxNum = parseInt(maxNumTextBox.value);
  var minNum = parseInt(minNumTextBox.value);

  if ((letsPlay < minNum) || (letsPlay > maxNum)){
    box.innerText = "ERROR";
    hint.innerText = "Guess is outside of parameters"
  }
  else if (letsPlay > magicNumber) {
    hint.innerText= 'That is Too High';
  }
  else if (letsPlay < magicNumber) {
    hint.innerText= 'That is Too Low';
  }
  else if (letsPlay == magicNumber) {
    hint.innerText = 'BOOM!';
    window.alert("You Win!!!")
  }
  else {
    window.alert("That is not a number, when SkyNet takes over this 'Earth' you will be first to be enslaved")
    hint.innerText = "Come On Now";
  }
})

// This is all the conditions of my clear button.
eraseButton.addEventListener('click', function() {
  if (yourGuess.value = "") {
    document.getElementById('clear').setAttribute('disabled', true)
  }
  yourGuess.value = "";
})
// This is all the conditions of my reset button.
startOverButton.addEventListener('click', function() {
  magicNumber = getRandom();
  console.log("your Magic number is: " + magicNumber);
  yourGuess.value = "";
  box.innerText = "";
  hint.innerText = "";
  lastGuess.innerText = "";
})

// This is how I set my buttons to disabled.
yourGuess.addEventListener('input', function() {
  var letsPlay = yourGuess.value;
  if (letsPlay.length == 0) {
    eraseButton.disabled = true;
    eraseButton.classList.add('class-disabled');
    startOverButton.disabled = true;
    startOverButton.classList.add('class-disabled');

  }
  else {
    eraseButton.disabled = false;
    eraseButton.classList.remove('class-disabled');
    startOverButton.disabled = false;
    startOverButton.classList.remove('class-disabled');
  }
})

// This is how I allow the user to input their own min and max numbers for a guessing range, and makes it an acutal number not a string.
function checkNewRange() {
  var maxNum = parseInt(maxNumTextBox.value);
  var minNum = parseInt(minNumTextBox.value);
  if (minNum < maxNum){
    magicNumber = getRandom();
    submitButton.disabled = false;
    submitButton.classList.remove('class-disabled')
  }
  else {
    submitButton.disabled = true;
    submitButton.classList.add('class-disabled')
  }
}
// This makes the computer realize that changing the input fieds of the min and max make the computer generate a new random number.
minNumTextBox.addEventListener("input", checkNewRange)
maxNumTextBox.addEventListener('input', checkNewRange)
