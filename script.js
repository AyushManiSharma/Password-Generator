var myDocument = document;

function generatePassword() {

    var password = "";
    var charset = "";
    var lowercase = "abcdefghijklmnopqrstuvwxyz";
    var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numbers = "0123456789";
    var symbols = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

    var passwordLength = parseInt(prompt("Enter the desired length of your password (between 8 and 128 characters):"));
    var HasLowercase = prompt("Do you want to include lowercase letters in your password?");
    var HasUppercase = prompt("Do you want to include uppercase letters in your password?");
    var HasNumbers = prompt("Do you want to include numbers in your password?");
    var HasSymbols = prompt("Do you want to include symbols in your password?");


    if (!(passwordLength) || passwordLength < 8 || passwordLength > 128) {
        alert("Please enter a number between 8 and 128.");
        return "";
    }
    if (HasLowercase == ("yes") || ("Y")) {
        charset += lowercase;
    }
    if (HasUppercase == ("yes") || ("Y")) {
        charset += uppercase;
    }
    if (HasNumbers == ("yes") || ("Y")) {
        charset += numbers;
    }
    if (HasSymbols == ("yes") || ("Y")) {
        charset += symbols;
    }
    if (charset === "") {
        alert("You must select at least one character type for the password.");
        return "";
    }
    for (var i = 0; i < passwordLength; i++) {
        var randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    return password;
}

function writePassword() {
    var password = generatePassword();
    var passwordText = myDocument.querySelector("#password");

    passwordText.value = password;
}

generate.addEventListener("click", writePassword);