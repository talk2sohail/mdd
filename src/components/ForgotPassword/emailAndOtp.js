import React, { Component } from "react";
import apiCall from "../../axios";
export default class EmailAndOtp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			message: "Email sent successfully.",
			error: "",
			isValid: false,
		};
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit = (e) => {
		const { values } = this.props;
		e.preventDefault();
		apiCall
			.post("/verifyOtp", { email: values.email, code: values.otp })
			.then((response) => {
				console.log(response.data);
				values.successMsg = response.data.msg;
				this.setState({
					isValid: false,
					error: "",
				});
				this.props.nextStep();
			})
			.catch((error) => {
				console.log(error.response.data);
				this.setState({
					isValid: true,
					error: error.response.data.msg,
				});
			});
	};

	render() {
		const { values, handleChange } = this.props;

		let errorCheck = this.state.isError ? (
			<p
				style={{
					color: "red",
					fontSize: 14,
				}}
			>
				{this.state.error}
			</p>
		) : (
			<p className="mb-3">Check Your Mail</p>
		);
		return (
			<React.Fragment>
				<form>
					<p
						style={{
							color: "green",
							fontSize: 14,
						}}
					>
						{this.state.message}
					</p>
					{errorCheck}
					<input
						type="email"
						name="email"
						value={values.email}
						onChange={handleChange("email")}
						placeholder="Email"
					/>
					<input
						type="text"
						name="otp"
						value={values.otp}
						onChange={handleChange("otp")}
						pattern="[0-9]{1}[0-9]{9}"
						placeholder="Enter OTP"
						maxLength="10"
						className="d-block"
					/>
					<a
						className="gradientText resendOTP font-weight-light d-block"
						href="javascript:void(0)"
					>
						Resend OTP
					</a>
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
