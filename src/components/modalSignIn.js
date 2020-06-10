import React, { PureComponent } from "react";
import { store } from "react-notifications-component";

import apiCall from "../axios";
import Auth from "../Auth";

// regexpr for the valid email check
const emailRegex = new RegExp(
	/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

export default class ModalSignIn extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			password: "",
			successMsg: "",
			errorMsg: "",
			isUserInputError: false,
			isErrorFromServer: false,
			inputErrorMsg: "",
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange = (event) => {
		const { name, value } = event.target;
		this.setState({
			isErrorFromServer: false,
			isUserInputError: false,
			[name]: value,
		});
	};
	validate = () => {
		const errors = {
			message: "",
			isError: false,
		};
		if (!this.state.email || !this.state.password)
			errors.message = "All fields are required";

		if (!emailRegex.test(this.state.email)) {
			errors.message = "Requires valid email";
		}

		//check if there was any error
		if (errors.message.length > 0) errors.isError = true;

		return errors;
	};

	handleSubmit = (e) => {
		e.preventDefault();
		const err = this.validate();
		console.log(this.state);
		console.log(err);

		if (err.isError) {
			this.setState({
				isUserInputError: true,
				inputErrorMsg: err.message,
			});
			return;
		}

		const { email, password } = this.state;
		apiCall
			.post("/signIn", { email, password })
			.then((response) => {
				console.log(response.data);
				const { success, token } = response.data;
				if (success && token != undefined) {
					Auth.signInAuth(token);
					store.addNotification({
						title: "Welcome Back!",
						message: "It's good to see you here.",
						type: "default",
						insert: "top",
						container: "top-right",
						dismiss: {
							duration: 600,
						},
					});
					setTimeout(() => {
						window.location.reload();
					}, 500);
				}
			})
			.catch((error) => {
				if (!error.response) {
					console.log("Something went Wrong");
				} else {
					this.setState({
						isErrorFromServer: true,
						errorMsg: error.response.data.msg,
					});
				}
			});
	};

	render() {
		return (
			<React.Fragment>
				<div className="form-container sign-in-container">
					<form>
						<h3>Sign in</h3>
						<p
							style={{
								color: "red",
								fontSize: 14,
							}}
						>
							{!this.state.isUserInputError ? null : this.state.inputErrorMsg}
						</p>
						<p
							style={{
								color: "red",
								fontSize: 14,
							}}
						>
							{!this.state.isErrorFromServer ? null : this.state.errorMsg}
						</p>
						<input
							type="email"
							name="email"
							required
							value={this.state.email}
							onChange={this.handleChange}
							placeholder="Email"
						/>
						<input
							type="password"
							name="password"
							required
							value={this.state.password}
							onChange={this.handleChange}
							placeholder="Password"
						/>
						<a
							// href="javascript:void(0)"
							// to=""
							style={{ cursor: "pointer" }}
							data-target="#forgotPass"
							className="fogotPassword"
							data-toggle="modal"
							data-dismiss="modal"
						>
							Forgot your password?
						</a>

						<input
							type="submit"
							value="sign in"
							onClick={this.handleSubmit}
							className="gradientBtn"
						/>
						<p className="login-info-text">- OR -</p>
						<a className="gLogin">
							<img src="/assets/images/icons/google.png" alt="google" />
							&nbsp;&nbsp;sign in using gmail
						</a>
					</form>
				</div>
			</React.Fragment>
		);
	}
}
