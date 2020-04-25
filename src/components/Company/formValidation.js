const emailRegex = RegExp(
	/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);
const validate = (state) => {
	let isError = false;
	const errors = {
		firstNameError: "",
		lastNameError: "",
		emailError: "",
		contactError: "",
		subjectError: "",
		messageError: "",
		usernameError: "",
		passwordError: "",
	};

	if (!state.first_name || state.first_name.length < 2) {
		state.formError.isValid = true;
		errors.firstNameError = "First Name needs to be atleast 2 characters.";
	}
	if (!state.password || state.password.length < 6) {
		state.formError.isValid = true;
		errors.passwordError = "Password needs to be atleast 6 characters.";
	}
	if (!state.last_name || state.last_name.length < 4) {
		state.formError.isValid = true;
		errors.lastNameError = "Last Name needs to be atleast 4 characters.";
	}

	if (!emailRegex.test(state.email)) {
		state.formError.isValid = true;
		errors.emailError = "Requires valid email";
	}

	if (!state.subject || state.subject.length < 5) {
		state.formError.isValid = true;
		errors.subjectError = "Subject needs to be atleast 5 characters.";
	}

	if (!state.contact || state.contact.length !== 10) {
		state.formError.isValid = true;
		errors.contactError = "Contact Number must 10 digits.";
	}
	if (!state.message || state.message.length < 100) {
		state.formError.isValid = true;
		errors.messageError = "Message needs to be atleast 100 characters.";
	}

	return {
		errors,
		isError,
	};
};

export default validate;
