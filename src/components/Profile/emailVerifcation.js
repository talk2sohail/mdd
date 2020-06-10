import React, { PureComponent, Fragment } from "react";
import { store } from "react-notifications-component";

import { Link, withRouter } from "react-router-dom";
import Footer from "../footer";
import Header from "../header";
import Sidebar from "./Sidebar";
import Modal from "../modal";

import apiCall from "../../axios";

const otpRegex = new RegExp(/^\d{8}$/);

class EmailVerifcation extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			emailSentMsg: "",
			otp: "",
			otpError: "",
		};

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.resendOTP = this.resendOTP.bind(this);
	}
	handleChange = (e) => {
		const { name, value } = e.target;
		this.setState({
			[name]: value,
		});
	};
	handleSubmit = (e) => {
		console.log(this.state);
		e.preventDefault();

		const err = this.validate();
		if (err.isError) {
			this.setState({
				otpError: err.errors,
			});
		}
		this.setState({
			otpError: "",
		});
		const { email, otp } = this.state;
		apiCall
			.post("/verifyemail", { code: otp, email })
			.then((response) => {
				const { success } = response.data;
				if (success) {
					store.addNotification({
						title: "Congratulation!",
						message: "You Email has been verified.",
						type: "success",
						insert: "top",
						container: "top-right",
						dismiss: {
							duration: 1500,
						},
					});
					this.props.history.push("/profile");
				}
			})
			.catch((err) => {
				console.log(err.response.data);
				if (!err.response) {
					console.log("something went wrong");
				} else {
					this.setState({
						otpError: err.response.data.msg,
					});
				}
			});
	};
	resendOTP = () => {
		const token = apiCall.getToken();
		const accessToken = `Bearer ${token}`;
		apiCall
			.post("/emailverification", null, accessToken)
			.then((response) => {
				this.setState({
					emailSentMsg: response.data.msg ? "OTP Resent" : response.data.msg,
					email: response.data.email,
				});
			})
			.catch((error) => {
				console.log(error.response.data);
				this.setState({
					otpError: error.response.data.msg,
				});
			});
	};
	componentDidMount() {
		const token = apiCall.getToken();
		const accessToken = `Bearer ${token}`;
		apiCall
			.post("/emailverification", null, accessToken)
			.then((response) => {
				console.log(response.data);
				this.setState({
					emailSentMsg: response.data.msg,
					email: response.data.email,
				});
			})
			.catch((error) => {
				console.log(error.response.data);
				this.setState({
					otpError: error.response.data.msg,
				});
			});
	}
	validate = () => {
		let isError = false;
		let errors = {
			otpError: "",
		};
		if (
			!this.state.otp ||
			this.state.otp.length !== 8 ||
			!otpRegex.test(this.state.otp)
		) {
			isError = true;
			errors.otpError = "Invalid OTP";
		}

		return {
			isError,
			errors,
		};
	};

	render() {
		return (
			<Fragment>
				<Header />
				<section className="profileWrapper">
					<div className="sectionWrapper">
						<div className="row justify-content-center">
							<Sidebar activeNumber="1" />
							<div className="col-lg-9 col-12">
								<div className="userWrapper phoneFixed">
									<div className="userHeader justify-content-start">
										<Link to="/profile" className="d-block d-lg-none">
											<img
												src="/assets/images/icons/lessthan.png"
												width="22"
												className="mr-2"
											/>
										</Link>
										<h2>Email Verification</h2>
									</div>
									<p
										style={{
											color: "green",
											fontSize: "17px",
										}}
									>
										{this.state.emailSentMsg ? this.state.emailSentMsg : null}
									</p>
									<div className="userDetails">
										<form>
											<div className="formGroup align-items-center row no-gutters justify-content-between">
												<div className="col-5 col-lg-4">
													<h3>Enter OTP</h3>
													<Link
														to="#"
														onClick={this.resendOTP}
														className="changePassword"
													>
														(Resend OTP)
													</Link>
												</div>
												<div className="col-12 col-md-8">
													<p
														style={{
															color: "red",
															fontSize: "15px",
														}}
													>
														{this.state.otpError ? this.state.otpError : null}
													</p>
													<input
														type="text"
														name="otp"
														value={this.state.otp}
														onChange={this.handleChange}
														className="editProfileDetails"
														placeholder="Enter OTP"
													/>
												</div>
											</div>
											<div className="formGroup align-items-center row no-gutters justify-content-between">
												<div className="col-12">
													<input
														type="submit"
														className=""
														onClick={this.handleSubmit}
														value="Submit"
													/>
												</div>
											</div>
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<Footer />
				<Modal />
			</Fragment>
		);
	}
}

export default withRouter(EmailVerifcation);
