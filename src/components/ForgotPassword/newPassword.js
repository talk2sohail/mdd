import React, { Component } from "react";
import { store } from "react-notifications-component";

import apiCall from "../../axios";
const resetError = () => {
	return {
		passwordError: "",
		confirmPasswordError: "",
	};
};
export default class NewPassword extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isValid: false,
			isMatch: true,
			matchError: "",
			error: "",
			passwordError: "",
		};

		this.handleSubmit = this.handleSubmit.bind(this);
	}
	validate = () => {
		let isError = false;
		const errors = {
			passwordError: "",
		};
		if (
			!this.props.values.new_password ||
			!this.props.values.confirm_password ||
			this.props.values.new_password.length < 6 ||
			this.props.values.confirm_password.length < 6
		) {
			isError = true;
			errors.passwordError = "password must be atleast 6 characters";
		}

		return {
			isError,
			errors,
		};
	};
	handleSubmit = (e) => {
		e.preventDefault();
		const { values } = this.props;
		const err = this.validate();
		console.log(err);
		if (err.isError) {
			this.setState({
				passwordError: err.errors.passwordError,
				error: "",
			});
			console.log(values);
			console.log(this.state);
			return;
		} else if (values.new_password !== values.confirm_password) {
			this.setState({
				isMatch: false,
				matchError: "Password does not match",
			});
			console.log(this.state);
			console.log(values);
			return;
		}
		this.setState({
			formError: resetError(),
		});
		apiCall
			.post("/resetpassword", {
				email: values.email,
				new_password: values.new_password,
			})
			.then((response) => {
				console.log(response.data);
				const { success, msg } = response.data;
				if (success && msg) {
					this.setState({
						error: "",
						passwordError: "",
						matchError: "",
					});

					store.addNotification({
						title: "Password Changed!",
						message: "Your password has been changed.",
						type: "success",
						insert: "top",
						container: "top-right",
						dismiss: {
							duration: 1500,
						},
					});

					setTimeout(() => {
						window.location.reload();
					}, 1000);
				}
			})
			.catch((error) => {
				console.log(error.response.data);
				const { msg } = error.response.data;
				this.setState({
					isValid: true,
					error: msg,
				});
			});
	};
	render() {
		const { values, handleChange } = this.props;

		return (
			<React.Fragment>
				<form className="d-block">
					<p className="mb-3">Enter Your New Password</p>
					<p
						style={{
							color: "red",
							fontSize: 14,
						}}
					>
						{this.state.isMatch
							? this.state.passwordError
							: this.state.matchError}
					</p>
					<p
						style={{
							color: "red",
							fontSize: 14,
						}}
					>
						{this.state.isValid ? this.state.error : null}
					</p>
					<input
						type="password"
						name="new_password"
						value={values.new_password}
						onChange={handleChange("new_password")}
						placeholder="Enter New Password"
					/>
					<input
						type="password"
						name="confirm_password"
						value={values.confirm_password}
						onChange={handleChange("confirm_password")}
						placeholder="Confirm New Password"
					/>
					<input
						type="submit"
						onClick={this.handleSubmit}
						value="submit"
						className="gradientBtn"
					/>
				</form>
			</React.Fragment>
		);
	}
}
