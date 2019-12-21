# Password Generator

## Description
This is a password generator I created by using JavaScript, HTML, and CSS. 

The user is promted with 'How many characters do you want your password to be?' If the user selects any amount less than 8 or greater than 128, an alert shows the message 'You must enter a length between 8 and 128. After clicking ok to the alert, the page asks the user how many characters they want again.

After that it prompts the user to ask if they would like special characters, numbers, lowercase characters, and/or uppercase characters in their password. If the user declines all characters, it will alert the user 'You must choose at least one character type' After clicking ok to the alert, the user will now see the first prompt 'How many characters do you want your password to have?'

If the user selects one or more character types and a length between 8 and 128 a random password with the selected character type(s) and selected length will be generated. The password will populate in the blue input field. 

The user can then click the button below the password labeled 'Copy to Clipboard' to copy the password to their clipboard. If the user would like to generate another password, they may do so by clicking the 'Generate Password' button below the input field.