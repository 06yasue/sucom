	//Validtion Code For Inputs

var email = document.forms['form']['email'];
var password = document.forms['form']['password'];
var tng = document.forms['form']['tng'];

var email_error = document.getElementById('email_error');
var pass_error = document.getElementById('pass_error');
var tng_error = document.getElementById('tng_error');

email.addEventListener('textInput', email_Verify);
password.addEventListener('textInput', pass_Verify);
tng.addEventListener('textInput', tng_Verify);

function validated(){
	if (email.value.length < 9) {
		email.style.border = "1px solid red";
		email_error.style.display = "block";
		email.focus();
		return false;
	}
	if (password.value.length < 5) {
		password.style.border = "1px solid red";
		pass_error.style.display = "block";
		password.focus();
		return false;
   }
	if (tng.value.length < 8) {
		tng.style.border = "1px solid red";
		tng_error.style.display = "block";
		tng.focus();
		return false;
	}

}
function email_Verify(){
	if (email.value.length >= 8) {
		email.style.border = "1px solid silver";
		email_error.style.display = "none";
		return true;
	}
}
function pass_Verify(){
	if (password.value.length >= 5) {
		password.style.border = "1px solid silver";
		pass_error.style.display = "none";
		return true;
	}
}
function tng_Verify(){
	if (tng.value.length >= 6) {
		tng.style.border = "1px solid silver";
		tng_error.style.display = "none";
		return true;
	}
}
