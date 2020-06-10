import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import { store } from "react-notifications-component";
import apiCall from "../axios";
import Auth from "../Auth";
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
			errorMsg: "",
			userInputError: "",
			isErrorFromServer: false,
			isUserInputError: false,
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	validate = () => {
		const errors = {
			isError: false,
			message: "",
		};
		if (
			!this.state.username ||
			!this.state.password ||
			!this.state.email ||
			!this.state.contact
		) {
			errors.message = "All fields are required";
		}

		if (
			!emailRegex.test(this.state.email) ||
			!phoneRegex.test(this.state.contact)
		) {
			errors.message = "Requires valid email or contact";
		}

		//check if there was any error
		if (errors.message.length > 0) errors.isError = true;

		return errors;
	};
	handleChange = (event) => {
		const { name, value } = event.target;
		this.setState({
			isUserInputError: false,
			isErrorFromServer: false,
			[name]: value,
		});
	};

	handleSubmit = (event) => {
		event.preventDefault();
		const err = this.validate();
		console.log(err);
		if (err.isError) {
			this.setState({
				isUserInputError: true,
				userInputError: err.message,
			});
		} else {
			const { username, contact, password, email } = this.state;
			apiCall
				.post("/signUp", { username, contact, password, email })
				.then((response) => {
					console.log(response.data);
					const { success, token } = response.data;
					if (success && token != undefined) {
						//set the auth for user in LS & SS

						store.addNotification({
							title: "Email Verification",
							message: "Please verify your email",
							type: "warning",
							insert: "top",
							container: "top-right",
							dismiss: {
								duration: 900,
							},
						});

						//authorize the user
						Auth.signUpAuth(token);

						//wait for the message to be shown to the user
						setTimeout(() => {
							window.location.reload();
						}, 1000);
					}
				})
				.catch((error) => {
					if (!error.response) {
						console.log("Something went wrong");
					} else {
						this.setState({
							isErrorFromServer: true,
							errorMsg: error.response.data.msg,
						});
					}
				});
		}
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
								fontSize: 13,
							}}
						>
							{this.state.isUserInputError ? this.state.userInputError : null}
						</p>
						<p
							style={{
								color: "red",
								fontSize: 13,
							}}
						>
							{this.state.isErrorFromServer ? this.state.errorMsg : null}
						</p>

						<input
							type="text"
							placeholder="Name"
							name="username"
							value={this.state.username}
							required
							onChange={this.handleChange}
						/>
						<input
							type="email"
							placeholder="Email"
							name="email"
							value={this.state.email}
							onChange={this.handleChange}
						/>
						<input
							type="password"
							placeholder="Password"
							name="password"
							value={this.state.password}
							required
							onChange={this.handleChange}
						/>
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
							<img src="/assets/images/icons/google.png" alt="google" />
							&nbsp;&nbsp;sign in using gmail
						</Link>
					</form>
				</div>
			</React.Fragment>
		);
	}
}
