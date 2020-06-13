import React, { Component } from "react";
import apiCall from "../../axios";
import Sidebar from "./Sidebar";
import { Link, withRouter } from "react-router-dom";
import Header from "../header";
import Footer from "../footer";
import Modal from "../modal";

class EditProfile extends Component {
	constructor(props) {
		super(props);
		this.state = {
			prevUsername: "",
			username: "",
			prevGender: "",
			gender: "Select Gender",
			email: "",
			contact: "",
			oldContact: "",
			wrongContactFromUser: "",

			code: "",
			showOtpSentMsg: "",
			wrongOtpFromUser: "",
			doesUserRequestOtp: false,

			doesUserChangeNameOrGender: false,
			doesUserChangedContact: false,

			isUserInputError: false,
			userInputError: "",

			isErrorFromServer: false,
			errorMsg: "",
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSumbitForm = this.handleSumbitForm.bind(this);
	}

	//whatever info user has, show it
	componentDidMount() {
		const token = apiCall.getToken();
		const accessToken = `Bearer ${token}`;
		apiCall
			.get("/user/profile", accessToken)
			.then((response) => {
				const { username, gender, email, contact } = response.data.user;
				this.setState({
					username,
					email,
					gender,
					contact,
					oldContact: contact,
					prevUsername: username,
					prevGender: gender,
				});
			})
			.catch((error) => {
				if (!error.response) {
					console.log("Somethng went wrong");
				}
				this.setState({
					error: error.response.data.msg,
				});
			});
	}
	handleChange = (e) => {
		const { name, value } = e.target;

		if (["username", "gender"].includes(name)) {
			this.setState({
				doesUserChangeNameOrGender: true,
			});
		}
		if (["contact", "code"].includes(name)) {
			this.setState({
				doesUserChangedContact: true,
			});
		}
		this.setState({
			isUserInputError: false,
			[name]: value,
		});
	};

	handleSumbitForm = async (e) => {
		e.preventDefault();
		console.log(this.state);
		const err = this.validate();
		console.log(err);
		if (err.isError) {
			this.setState({
				isUserInputError: true,
				userInputError: err.message,
			});

			return;
		}
		if (this.state.doesUserChangedContact) {
			//check the otp field first
			if (!this.state.code) {
				this.setState({
					wrongOtpFromUser: "Please enter OTP first",
				});
				return;
			} else if (
				this.state.code.length !== 8 ||
				!this.state.doesUserRequestOtp
			) {
				this.setState({
					wrongOtpFromUser: "Please enter valid OTP",
				});
				return;

				//check the contact
			} else if (
				this.state.contact.length !== 10 ||
				isNaN(+this.state.contact)
			) {
				this.setState({
					wrongContactFromUser: "Please enter valid contact",
				});
				return;
			} else {
				const { email, contact, code } = this.state;
				const token = apiCall.getToken();
				const accessToken = `Bearer ${token}`;
				try {
					const response = await apiCall.post(
						"/user/saveContact",
						{ email, contact, code },
						accessToken
					);
					if (response) {
						window.location.reload();
					}
				} catch (e) {
					if (!e.response) {
						console.log("Something went wrong");
					}
					if (!e.response.data.success) {
						this.setState({
							otpErrorMsg: e.response.data.msg,
						});

						return;
					}
				}
			}
		}
		if (this.state.doesUserChangeNameOrGender) {
			if (
				this.state.username !== this.state.prevUsername ||
				this.state.gender !== this.state.prevGender
			) {
				const { username, gender } = this.state;
				const token = apiCall.getToken();
				const accessToken = `Bearer ${token}`;
				apiCall
					.post(
						"/user/editprofile",
						{
							username,
							gender,
						},
						accessToken
					)
					.then((response) => {
						window.location.reload();
					})
					.catch((error) => {
						if (!error.response) {
							console.log("Somethng went wrong");
						} else {
							console.log(error.response.data.msg);
						}
					});
			}
		}
	};

	resentOTP = () => {
		const { email, contact } = this.state;
		const token = apiCall.getToken();
		const accessToken = `Bearer ${token}`;
		apiCall
			.post("/user/changeContact", { email, contact }, accessToken)
			.then((response) => {
				console.log(response.data);
				this.setState({
					doesUserRequestOtp: true,
					showOtpSentMsg: response.data.msg
						? "Resending OTP in few sec.."
						: response.data.msg,
				});
			})
			.catch((error) => {
				if (!error.response) {
					console.log("something went wrong");
				} else {
					console.log(error.response.data.msg);
				}
			});
	};

	validate = () => {
		const errors = {
			isError: false,
			message: "",
		};

		if (!this.state.username || !this.state.contact)
			errors.message = "Fileds cannot be empty";

		if (errors.message.length > 0) errors.isError = true;

		return errors;
	};

	render() {
		return (
			<React.Fragment>
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
										<h2>Profile Information</h2>
									</div>
									<div className="userDetails">
										<form>
											<div className="formGroup align-items-center row no-gutters justify-content-between">
												<div className="col-12 col-md-4">
													<h3>Name</h3>
												</div>
												<div className="col-12 col-md-8">
													<p
														style={{
															color: "red",
															fontSize: 14,
														}}
													>
														{this.state.isUserInputError
															? this.state.userInputError
															: null}
													</p>
													<input
														type="text"
														className="editProfileDetails"
														placeholder="Name"
														name="username"
														defaultValue={this.state.username}
														onChange={this.handleChange}
													/>
												</div>
											</div>
											<div className="formGroup align-items-center row no-gutters justify-content-between">
												<div className="col-12 col-md-4">
													<h3>Gender</h3>
												</div>
												<div className="col-12 col-md-8">
													<select
														className="editProfileDetails"
														defaultValue={this.state.gender}
														onChange={this.handleChange}
														name="gender"
														placeholder="Gender"
													>
														<option>{this.state.gender}</option>
														<option value="Male">Male</option>
														<option value="Female">Female</option>
														<option value="Others">Others</option>
													</select>
												</div>
											</div>
											<div className="formGroup align-items-center row no-gutters justify-content-between">
												<div className="col-12 col-md-4 d-flex d-md-block">
													<h3>Email</h3>
												</div>
												<div className="col-12 col-md-8">
													<input
														type="email"
														className="editProfileDetails"
														readOnly
														name="email"
														placeholder="Email"
														onChange={this.handleChange}
														defaultValue={this.state.email}
													/>
												</div>
											</div>
											<p
												style={{
													color: "green",
													fontSize: 14,
												}}
											>
												{this.state.showOtpSentMsg
													? this.state.showOtpSentMsg
													: null}
											</p>
											<div className="formGroup align-items-center row no-gutters justify-content-between">
												<div className="col-12 col-md-4 d-flex d-md-block">
													<h3>Phone Number</h3>
													<Link
														to="#"
														onClick={this.handleContactChange}
														className="changePassword"
													>
														(Send OTP)
													</Link>
												</div>
												<div className="col-12 col-md-8">
													<p
														style={{
															color: "red",
															fontSize: 14,
														}}
													>
														{this.state.wrongContactFromUser
															? this.state.wrongContactFromUser
															: null}
													</p>
													<input
														type="text"
														id="phonenumber"
														className="editProfileDetails"
														name="contact"
														onChange={this.handleChange}
														defaultValue={this.state.contact}
														placeholder="Phone Number"
														// pattern="[1-9]{1}[0-9]{9}"
														// maxLength="12"
													/>
												</div>
											</div>

											<div className="formGroup align-items-center row no-gutters justify-content-between">
												<div className="col-12 col-md-4 d-flex d-md-block">
													<h3>Enter OTP</h3>
													<Link
														to="#"
														onClick={this.resentOTP}
														className="changePassword"
													>
														(Resend OTP)
													</Link>
												</div>
												<div className="col-12 col-md-8">
													<p
														style={{
															color: "red",
															fontSize: 14,
														}}
													>
														{this.state.wrongOtpFromUser
															? this.state.wrongOtpFromUser
															: null}
													</p>
													<p
														style={{
															color: "red",
															fontSize: 14,
														}}
													>
														{this.state.otpErrorMsg
															? this.state.otpErrorMsg
															: null}
													</p>
													<input
														type="text"
														className="editProfileDetails"
														name="code"
														onChange={this.handleChange}
														defaultValue={this.state.code}
														// pattern="[0-9]{1}[0-9]{9}"
														// maxLength="4"
														placeholder="Enter OTP"
													/>
												</div>
											</div>
											<div className="formGroup align-items-center row no-gutters justify-content-between">
												<div className="col-12">
													<input
														type="submit"
														name=""
														className=""
														id=""
														value="Save Changes"
														onClick={this.handleSumbitForm}
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
			</React.Fragment>
		);
	}
}

export default withRouter(EditProfile);
