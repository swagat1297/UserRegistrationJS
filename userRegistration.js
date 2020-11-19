let utility = require("./userRegistrationutility.js");
var readlineSync = require('readline-sync');
// taking user input// 
choiceUserRegistration = function () {
	let isTerminated = false;
	while (isTerminated == false) {
		let option = readlineSync.question(`Enter your choice to check:\n\n 1.FirstName\n 2.LastName\n 3.Email\n 4.PhoneNumber\n 5.password\n 6.Exit\n`)
		switch (option) {
			case 1: utility.validateFirstName();
				break;
			case 2: utility.validateLastName();
				break;
			case 3: utility.validateEmail();
				break;
			case 4: utility.validateMobileNumber();
				break;
			case 5: utility.validatePassword();
				break;
			case 6: isTerminated = true;
				break;
			default:
				console.log("Wrong Input");
				// option.close();
		}
	}

}
choiceUserRegistration();
