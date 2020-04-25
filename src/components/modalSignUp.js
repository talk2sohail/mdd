import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import apiCall from "../axios";
// import { Alert } from "antd";
// import validate from "./Company/formValidation";

const emailRegex = new RegExp(
	/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const phoneRegex = new RegExp(/^\d{10}$/);
const resetError = () => {
	return {
		usernameError: "",
		emailError: "",
		passwordError: "",
		contactError: "",
	};
};

export default class ModalSignUp extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			username: "",
			email: "",
			password: "",
			contact: "",
			isValid: false,
			errorMsg: "",
			formError: {
				usernameError: "",
				emailError: "",
				passwordError: "",
				contactError: "",
			},
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	validate = () => {
		let isError = false;
		const errors = {
			usernameError: "",
			emailError: "",
			passwordError: "",
			contactError: "",
		};
		if (!this.state.username || this.state.username.length < 5) {
			isError = true;
			errors.usernameError = "Name needs to be atleast 5 characters.";
		}
		if (!this.state.password || this.state.password.length < 6) {
			isError = true;
			errors.passwordError = "Password needs to be atleast 6 characters.";
		}

		if (!emailRegex.test(this.state.email)) {
			isError = true;
			errors.emailError = "Requires valid email";
		}
		if (
			!this.state.contact ||
			this.state.contact.length != 10 ||
			!phoneRegex.test(this.state.contact)
		) {
			isError = true;
			errors.contactError = "Contact Number must 10 digits.";
		}

		return {
			isError,
			errors,
		};
	};
	handleChange = (event) => {
		const target = event.target;
		const name = target.name;
		this.setState({
			[name]: target.value,
		});
	};

	handleSubmit = (event) => {
		event.preventDefault();
		const err = this.validate();
		console.log(err);
		if (err.isError) {
			this.setState({
				errorMsg: "",
				formError: err.errors,
			});
			console.log(this.state);
			return;
		}
		this.setState({
			formError: resetError(),
		});
		const { username, contact, password, email } = this.state;
		apiCall
			.post("/signUp", { username, contact, password, email })
			.then((response) => {
				console.log(response.data);
				const { success, token } = response.data;
				if (success && token != undefined) {
					localStorage.setItem("token", token);
					this.setState({
						errorMsg: "",
					});
					window.location.reload();
				}
			})
			.catch((error) => {
				const { msg } = error.response.data;
				this.setState((state) => {
					state.errorMsg = msg;

					return {
						...state,
						isValid: true,
					};
				});
			});
	};
	render() {
		return (
			<React.Fragment>
				<div className="form-container sign-up-container">
					<form>
						<h3>Create Account</h3>
						<p
							style={{
								color: "red",
								fontSize: 12,
							}}
						>
							{this.state.formError.usernameError}
						</p>
						<input
							type="text"
							placeholder="Name"
							name="username"
							value={this.state.username}
							required
							onChange={this.handleChange}
						/>
						<p
							style={{
								color: "red",
								fontSize: 12,
							}}
						>
							{this.state.isValid
								? this.state.errorMsg
								: this.state.formError.emailError}
						</p>
						<input
							type="email"
							placeholder="Email"
							name="email"
							value={this.state.email}
							onChange={this.handleChange}
						/>
						<p
							style={{
								color: "red",
								fontSize: 12,
							}}
						>
							{this.state.formError.passwordError}
						</p>
						<input
							type="password"
							placeholder="Password"
							name="password"
							value={this.state.password}
							required
							onChange={this.handleChange}
						/>
						<p
							style={{
								color: "red",
								fontSize: 12,
							}}
						>
							{this.state.formError.contactError}
						</p>
						<input
							type="text"
							placeholder="Phone Number"
							pattern="[1-9]{1}[0-9]{9}"
							maxLength="10"
							name="contact"
							value={this.state.contact}
							onChange={this.handleChange}
							required
						/>
						<input
							type="submit"
							value="Submit"
							className="gradientBtn"
							onClick={this.handleSubmit}
						/>
						<p className="login-info-text">- OR -</p>
						<Link to="" className="gLogin">
							<img src="/assets/images/icons/google.png" alt="" />
							&nbsp;&nbsp;sign in using gmail
						</Link>
					</form>
				</div>
			</React.Fragment>
		);
	}
}
