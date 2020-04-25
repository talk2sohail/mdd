import React, { Component } from "react";
import apiCall from "../../axios";

const emailRegex = new RegExp(
	/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

export default class EmailOnly extends Component {
	constructor(props) {
		super(props);
		this.state = {
			error: "",
			isValid: false,
			emailError: "",
		};
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	continue = (e) => {
		e.preventDefault();
		this.props.nextStep();
	};
	validate = () => {
		let isError = false;
		const errors = {
			emailError: "",
		};
		if (!emailRegex.test(this.props.values.email)) {
			isError = true;
			errors.emailError = "Requires valid email";
		}

		return {
			isError,
			errors,
		};
	};
	handleSubmit = async (e) => {
		const { values } = this.props;
		e.preventDefault();

		const err = this.validate();
		console.log(err);
		const { isError, errors } = err;
		if (isError) {
			this.setState({
				emailError: errors.emailError,
				isValid: false,
				error: "",
			});
			console.log(this.state);
			return;
		}
		this.setState({
			emailError: "",
		});
		try {
			const response = await apiCall.post("/changepassword", {
				email: values.email,
			});
			const { msg } = response.data;
			this.props.values.successMsg = msg;
			this.props.values.errorMsg = "";
			this.props.nextStep();
		} catch (error) {
			console.log(error.response.data);
			const { msg } = error.response.data;
			this.setState({
				isValid: true,
				error: msg,
			});
		}
	};
	render() {
		const { values, handleChange } = this.props;

		return (
			<React.Fragment>
				<form>
					<p
						style={{
							color: "red",
							fontSize: 14,
						}}
					>
						{this.state.isValid ? this.state.error : this.state.emailError}
					</p>
					<p className="mb-3">We will email you an OTP</p>
					<input
						type="email"
						name="email"
						value={values.email}
						onChange={handleChange("email")}
						placeholder="Email"
					/>
					<input
						type="submit"
						value="submit"
						onClick={this.handleSubmit}
						className="gradientBtn"
					/>
				</form>
			</React.Fragment>
		);
	}
}
