import React, { Component } from "react";
import { Link } from "react-router-dom";
import EmailAndOtp from "./emailAndOtp";
import NewPassword from "./newPassword";
import EmailOnly from "./emailOnly";

export default class ForgotPassModal extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			new_password: "",
			confirm_password: "",
			otp: "",
			step: 1,
			successMsg: "",
			errorMsg: "",
		};
	}
	//handle input
	handleChange = (input) => (e) => {
		e.preventDefault();
		this.setState({
			[input]: e.target.value,
		});
	};
	//proceed to next step
	nextStep = () => {
		const { step } = this.state;
		this.setState({
			step: step + 1,
		});
	};
	render() {
		const { step, email, new_password, confirm_password, otp } = this.state;
		const values = { email, new_password, confirm_password, otp };
		let form = null;
		switch (step) {
			case 1:
				form = (
					<EmailOnly
						nextStep={this.nextStep}
						values={values}
						handleChange={this.handleChange}
					/>
				);
				break;
			case 2:
				form = (
					<EmailAndOtp
						nextStep={this.nextStep}
						values={values}
						handleChange={this.handleChange}
					/>
				);
				break;
			case 3:
				form = (
					<NewPassword
						nextStep={this.nextStep}
						values={values}
						handleChange={this.handleChange}
					/>
				);
				break;
		}
		return (
			<React.Fragment>
				<div
					className="modal fade"
					id="forgotPass"
					tabIndex="-1"
					role="dialog"
					aria-labelledby="forgotPassswordTitle"
					aria-hidden="true"
				>
					<div className="modal-dialog modal-dialog-centered" role="document">
						<div className="modal-content">
							<div className="modal-body">
								<button
									type="button"
									className="close"
									data-dismiss="modal"
									aria-label="Close"
								>
									<span aria-hidden="true" className="font-weight-light">
										&times;
									</span>
								</button>
								<h3>Forgot Password ?</h3>
								{form}
								<p className="font-weight-light">
									Just remembered ?
									<a
										className="gradientText"
										href="javascript:void(0)"
										data-target="#loginModalCenter"
										data-toggle="modal"
										data-dismiss="modal"
									>
										Log in
									</a>
									Instead
								</p>
								<p className="mb-0 font-weight-light">
									Don’t have an account ? Please
									<a
										className="gradientText"
										href="javascript:void(0)"
										data-target="#loginModalCenter"
										data-toggle="modal"
										data-dismiss="modal"
									>
										Sign up
									</a>
									for exciting offers
								</p>
							</div>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}
