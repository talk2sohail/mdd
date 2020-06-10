import React, { PureComponent, Fragment } from "react";
import { withRouter } from "react-router-dom";
import { store } from "react-notifications-component";

import Header from "../header";
import Footer from "../footer";
import Modal from "../modal";
import Sidebar from "../Profile/Sidebar";

import apiCall from "../../axios";
class ChangePassword extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			current_password: "",
			new_password: "",
			confirm_password: "",
			isUserInputError: false,
			isErrorFromServer: false,
			error_message: "",
			error_msg_from_server: "",
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange = (e) => {
		const { value, name } = e.target;
		this.setState({
			isUserInputError: false,
			isErrorFromServer: false,
			[name]: value,
		});
	};

	handleSubmit = (e) => {
		e.preventDefault();
		//check for error existence before submit
		const { new_password, confirm_password } = this.state;
		const checkError = this.handleFormValidation();
		if (checkError.isError) {
			this.setState({
				isUserInputError: true,
				error_message: checkError.message,
			});
		} else if (new_password !== confirm_password) {
			this.setState({
				isUserInputError: true,
				error_message: "Password Doesn't match",
			});
		} else {
			//call  the api

			const token = apiCall.getToken();
			const accessToken = `Bearer ${token}`;

			apiCall
				.post("/editpassword", { new_password }, accessToken)
				.then((response) => {
					console.log(response.data);
					store.addNotification({
						title: "Congratulation!",
						message: "Your Password has been changed.",
						type: "success",
						insert: "top",
						container: "top-right",
						dismiss: {
							duration: 600,
						},
					});
					this.props.history.push("/profile");
				})
				.catch((error) => {
					if (!error.response) {
						console.log("Something went Wrong");
					} else {
						this.setState({
							isErrorFromServer: true,
							error_msg_from_server: error.response.data.msg,
						});
					}
				});
		}
	};

	handleFormValidation = () => {
		let error = {};
		error.isError = false;
		error.message = "";
		if (
			this.state.confirm_password === undefined ||
			this.state.current_password === undefined ||
			this.state.new_password === undefined ||
			!this.state.confirm_password ||
			!this.state.new_password ||
			!this.state.current_password
		)
			error.message = "All field must be filled.";
		else if (this.state.current_password === this.state.new_password)
			error.message = "New Password cannot be same as old password";

		//check if there was any error
		if (error.message.length > 0) error.isError = true;

		return error;
	};

	render() {
		return (
			<Fragment>
				<Header />
				<section className="profileWrapper">
					<div className="sectionWrapper">
						<div className="row justify-content-center">
							<Sidebar />
							<div className="col-lg-9 col-12">
								<div className="userWrapper phoneFixed">
									<div className="userHeader justify-content-start">
										<a href="profile.html" className="d-block d-lg-none">
											<img
												src="assets/images/icons/lessthan.png"
												width="22"
												className="mr-2"
											/>
										</a>
										<h2>Change Password</h2>
									</div>
									<p style={{ color: "red", textAlign: "center" }}>
										{this.state.isUserInputError
											? this.state.error_message
											: null}
									</p>
									<p style={{ color: "red", textAlign: "center" }}>
										{this.state.isErrorFromServer
											? this.state.error_message
											: null}
									</p>
									<div className="userDetails">
										<form>
											<div className="formGroup align-items-center row no-gutters justify-content-between">
												<div className="col-lg-4">
													<h3>Current Password</h3>
												</div>
												<div className="col-lg-8">
													<input
														type="password"
														className="editProfileDetails"
														value={this.state.current_password}
														name="current_password"
														onChange={this.handleChange}
													/>
												</div>
											</div>
											<div className="formGroup align-items-center row no-gutters justify-content-between">
												<div className="col-lg-4">
													<h3>New Password</h3>
												</div>
												<div className="col-lg-8">
													<input
														type="password"
														className="editProfileDetails"
														value={this.state.new_password}
														name="new_password"
														onChange={this.handleChange}
													/>
												</div>
											</div>
											<div className="formGroup align-items-center row no-gutters justify-content-between">
												<div className="col-lg-4">
													<h3>Confirm Password</h3>
												</div>
												<div className="col-lg-8">
													<input
														type="password"
														className="editProfileDetails"
														value={this.state.confirm_password}
														name="confirm_password"
														onChange={this.handleChange}
													/>
												</div>
											</div>
											<div className="formGroup align-items-center row no-gutters justify-content-between">
												<div className="col-12">
													<input
														type="submit"
														value="Save Changes"
														onClick={this.handleSubmit}
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

export default withRouter(ChangePassword);
