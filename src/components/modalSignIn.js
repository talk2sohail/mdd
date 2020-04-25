import React, { PureComponent } from "react";
import apiCall from "../axios";
import { Alert } from "antd";

const emailRegex = new RegExp(
	/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const resetError = () => {
	return {
		emailError: "",
	};
};

export default class ModalSignIn extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			password: "",
			successMsg: "",
			errorMsg: "",
			isValid: false,
			formError: {
				emailError: "",
			},
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange = (event) => {
		const { name, value } = event.target;
		this.setState({
			[name]: value,
		});
	};
	validate = () => {
		let isError = false;
		const errors = {
			emailError: "",
		};
		if (!emailRegex.test(this.state.email)) {
			isError = true;
			errors.emailError = "Requires valid email";
		}

		return {
			isError,
			errors,
		};
	};
	handleSubmit = (event) => {
		event.preventDefault();
		const err = this.validate();
		console.log(err);
		if (err.isError) {
			this.setState({
				formError: err.errors,
				errorMsg: "",
			});
			return;
		}
		this.setState({
			formError: resetError(),
		});
		const { email, password } = this.state;
		apiCall
			.post("/signIn", { email, password })
			.then((response) => {
				console.log(response.data);
				const { success, token } = response.data;
				if (success && token != undefined) {
					localStorage.setItem("token", token);
					this.setState({
						errorMsg: "",
						successMsg: response.data.msg,
					});
					window.location.reload();
				}
			})
			.catch((error) => {
				const { msg } = error.response.data;
				this.setState({
					isValid: true,
					errorMsg: msg,
				});
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
							{this.state.isValid
								? this.state.errorMsg
								: this.state.formError.emailError}
						</p>
						<input
							type="email"
							name="email"
							value={this.state.email}
							onChange={this.handleChange}
							placeholder="Email"
						/>
						<input
							type="password"
							name="password"
							value={this.state.password}
							onChange={this.handleChange}
							placeholder="Password"
						/>
						<a
							// href="javascript:void(0)"
							// to=""
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
							<img src="/assets/images/icons/google.png" alt="" />
							&nbsp;&nbsp;sign in using gmail
						</a>
					</form>
				</div>
			</React.Fragment>
		);
	}
}
