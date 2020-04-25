import React, { Component } from "react";
import apiCall from "../../axios";
import Sidebar from "./Sidebar";
import { Link, NavLink } from "react-router-dom";
import Header from "../header";
import Footer from "../footer";

const getInitialState = () => {
	return {
		first_name: "",
		last_name: "",
		gender: "Select Gender",
		email: "",
		contact: "",
		oldContact: "",
		code: "",

		isError: false,
	};
};

export default class EditProfile extends Component {
	constructor(props) {
		super(props);
		this.state = getInitialState();
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentDidMount() {
		const token = apiCall.getToken();
		// console.log(accessToken);
		const accessToken = `Bearer ${token}`;
		apiCall
			.get("/user/profile", accessToken)
			.then((response) => {
				const {
					first_name,
					last_name,
					gender,
					email,
					contact,
				} = response.data.user;
				this.setState({
					first_name,
					last_name,
					email,
					gender,
					contact,
					oldContact: contact,
				});
			})
			.catch((error) => {
				console.log(error.response.data);
			});
	}
	handleChange = (e) => {
		const { name, value } = e.target;
		this.setState({
			[name]: value,
		});
	};

	handleContactChange = () => {
		const { email, contact } = this.state;
		const token = apiCall.getToken();
		const accessToken = `Bearer ${token}`;
		apiCall
			.post("/user/changeContact", { email, contact }, accessToken)
			.then((response) => {
				console.log(response.data);
			})
			.catch((error) => {
				console.log(error.response.data);
			});
	};
	handleSaveContact = () => {
		console.log(this.state);
		const { email, contact, code } = this.state;
		const token = apiCall.getToken();
		const accessToken = `Bearer ${token}`;
		apiCall
			.post("/user/saveContact", { email, contact, code }, accessToken)
			.then((response) => {
				console.log(response.data);
			})
			.catch((error) => {
				console.log(error.response.data);
			});
	};
	handleSubmit = (e) => {
		console.log(this.state);
		e.preventDefault();
		const { first_name, last_name, gender } = this.state;
		const token = apiCall.getToken();
		const accessToken = `Bearer ${token}`;
		apiCall
			.post(
				"/user/editprofile",
				{
					first_name,
					last_name,
					gender,
				},
				accessToken
			)
			.then((response) => {
				console.log(response.data);
				if (this.state.contact === this.state.newContact) {
					console.log("new number is not being set");
				} else {
					console.log("new number is being set.");
					this.handleSaveContact();
				}
			})
			.catch((error) => {
				console.log(error.response.data);
				this.setState({
					isError: true,
					error: error.response.data.msg,
				});
			});
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
													<h3>First Name</h3>
												</div>
												<div className="col-12 col-md-8">
													<input
														type="text"
														className="editProfileDetails"
														placeholder="First Name"
														name="first_name"
														value={this.state.first_name}
														onChange={this.handleChange}
													/>
												</div>
											</div>
											<div className="formGroup align-items-center row no-gutters justify-content-between">
												<div className="col-12 col-md-4">
													<h3>Last Name</h3>
												</div>
												<div className="col-12 col-md-8">
													<input
														type="text"
														className="editProfileDetails"
														onChange={this.handleChange}
														value={this.state.last_name}
														name="last_name"
														placeholder="Last Name"
													/>
												</div>
											</div>
											<div className="formGroup align-items-center row no-gutters justify-content-between">
												<div className="col-12 col-md-4">
													<h3>Gender</h3>
												</div>
												<div className="col-12 col-md-8">
													<select
														classname="editProfileDetails"
														value={this.state.gender}
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
												<div className="col-12 col-md-4">
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
														value={this.state.email}
													/>
												</div>
											</div>
											<div className="formGroup align-items-center row no-gutters justify-content-between">
												<div className="col-12 col-md-4 d-flex d-md-block">
													<h3>Phone Number</h3>
													<a
														onClick={this.handleContactChange}
														className="changePassword"
													>
														(Send OTP)
													</a>
												</div>
												<div className="col-12 col-md-8">
													<input
														type="number"
														id="phonenumber"
														className="editProfileDetails"
														name="contact"
														onChange={this.handleChange}
														value={this.state.contact}
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
														to="javascript:void(0)"
														className="changePassword"
													>
														(Resend OTP)
													</Link>
												</div>
												<div className="col-12 col-md-8">
													<input
														type="number"
														className="editProfileDetails"
														name="code"
														onChange={this.handleChange}
														value={this.state.code}
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
			</React.Fragment>
		);
	}
}
