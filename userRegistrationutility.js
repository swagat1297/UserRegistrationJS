var readlineSync = require('readline-sync');
class Registration {
	//to validate first name//
	validateFirstName = () => {
		try {
			const read = /[A-Z][a-z]{3,}/;
			let text = readlineSync.question(`Enter Valid First Name:`);
			// let result = text.match(read);
			const result = read.exec(text);
			if (result) {
				console.log("Valid");
			}
			else {
				console.log("Invalid");
			}
			// alert(result);
			// const result = match.matches();
			//console.log(result);
		}
		catch (e) {
			console.log(e);
		}
	}
	//to validate last name//
	validateLastName = () => {
		try {
			const read = /[A-Z][a-z]{3,}/;
			let text = readlineSync.question(`Enter Valid Last Name:`);
			// let result = text.match(read);
			const result = read.exec(text);
			if (result) {
				console.log("Valid");
			}
			else {
				console.log("Invalid");
			}
			// alert(result);
			// const result = match.matches();
			//console.log(result);
		}
		catch (e) {
			console.log(e);
		}
	}
	//to validate email
	validateEmail = () => {
		try {
			const read = /^[0-9a-zA-Z]+([._+-][0-9a-zA-Z]+)*[@][0-9A-Za-z]+([.][a-zA-Z]{2,4})*$/;
			let text = readlineSync.question(`Enter Valid Email Address:`);
			// let result = text.match(read);
			const result = read.exec(text);
			if (result) {
				console.log("Valid");
			}
			else {
				console.log("Invalid");
			}
			// alert(result);
			// const result = match.matches();
			//console.log(result);
		}
		catch (e) {
			console.log(e);
		}
	}
	//to cvalidate mobile number//
	validateMobileNumber = () => {
		try {
			const read = /^[0-9]{2}[ ][0-9]{10}$/;
			let text = readlineSync.question(`Enter Valid Pnone Number:`);
			// let result = text.match(read);
			const result = read.exec(text);
			if (result) {
				console.log("Valid");
			}
			else {
				console.log("Invalid");
			}
			// alert(result);
			// const result = match.matches();
			//console.log(result);
		}
		catch (e) {
			console.log(e);
		}
	}
	//check password with Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character//
	validatePassword = () => {
		try {
			const read = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
			let text = readlineSync.question(`Enter Valid Password:`);
			// let result = text.match(read);
			const result = read.exec(text);
			if (result) {
				console.log("Valid");
			}
			else {
				console.log("Invalid");
			}
			// alert(result);
			// const result = match.matches();
			//console.log(result);
		}
		catch (e) {
			console.log(e);
		}
	}


}
module.exports = new Registration();
