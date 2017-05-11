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

function getRandom() {
  var maxNum = parseInt(maxNumTextBox.value);
  var minNum = parseInt(minNumTextBox.value);
  return Math.floor(Math.random() * (maxNum - minNum)) + minNum;
}

var magicNumber = getRandom();

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
  if ((letsPlay < minNum) || (letsPlay > maxNum)){
    box.innerText = "ERROR";
    hint.innerText = "Guess is outside of parameters"
  }
})

eraseButton.addEventListener('click', function() {
  if (yourGuess.value = "") {
    document.getElementById('clear').setAttribute('disabled', true)
  }
  yourGuess.value = "";
})

startOverButton.addEventListener('click', function() {
  magicNumber = getRandom();
  console.log("your Magic number is: " + magicNumber);
  yourGuess.value = "";
  box.innerText = "";
  hint.innerText = "";
  lastGuess.innerText = "";
})

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
minNumTextBox.addEventListener("input", checkNewRange)
maxNumTextBox.addEventListener('input', checkNewRange)
