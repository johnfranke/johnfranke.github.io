var specialCharArray = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];

var numberArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

var lowerCharArray = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];

var upperCharArray = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z"
];

 
var length = prompt("How many characters do you want your password to be?");
	if (length > 7 && length < 129) {
	console.log(length);
	var specialChar = confirm("Do you want special characters in your password?");
	console.log(specialChar);
	var numberChar = confirm("Do you want numbers in your password?");
	console.log(numberChar);
	var lowerChar = confirm("Do you want lowercase letters in your password?");
	console.log(lowerChar);
	var upperChar = confirm("Do you want uppercase letters in your password?");
	console.log(upperChar);
	
	var password = [""];
	for (var i = 0; i < length; i++) {
		if (lowerChar === true) {
		var randomLowerChar =
			lowerCharArray[Math.floor(Math.random() * lowerCharArray.length)];
		}
		if (numberChar === true) {
		var randomNumber = Math.floor(Math.random() * numberArray.length);
		}
		if (upperChar === true) {
		var randomUpperChar =
			upperCharArray[Math.floor(Math.random() * upperCharArray.length)];
		}
		if (specialChar === true) { 
		var randomSpecialChar =
			specialCharArray[Math.floor(Math.random() * specialCharArray.length)];
		}
		password.push(randomUpperChar);
	
		password.push(randomLowerChar);
	
		password.push(randomNumber);
	
		password.push(randomSpecialChar);
	}
	
	password = password.join("").slice(0,length)
	console.log("Password is " + password);
	console.log("password length is " + password.length);

	if (password.length === 0) {
		alert('You must choose at least one character type.');
		location.reload();
	}
	
	
	document.getElementById("thepassword").value = password;

	function myFunction() {
			var copyText = document.getElementById("thepassword");
		copyText.select();
		copyText.setSelectionRange(0, 99999)
		document.execCommand("copy");
		alert("Copied the text: " + copyText.value);
	  }



	} else {
		alert('You must enter a length between 8 and 128');
		location.reload();
	}

	function refreshPage() {
        window.location.reload();
    } 