import React, { PureComponent } from "react";
import Sidebar from "../Sidebar";
import { Link } from "react-router-dom";
import Header from "../../header";
import Footer from "../../footer";
import Modal from "../..//modal";

import apiCall from "../../../axios";

const getInitialState = () => {
	return {
		firstName: "",
		lastName: "",
		email: "",
		contact: "",
		street: "",
		city: "",
		zipcode: "",
		state: "",
		locality: "",
		error: "",
		formError: {
			firstNameError: "",
			lastNameError: "",
			emailError: "",
			contactError: "",
			subjectError: "",
			messageError: "",
		},
	};
};

export default class AddAddress extends PureComponent {
	constructor(props) {
		super(props);
		this.state = getInitialState();
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit = (e) => {
		e.preventDefault();
		// const err = validate({ ...this.state });
		// console.log(err);
		// if (err.isError) {
		// 	this.setState({
		// 		formError: err.errors,
		// 	});
		// 	return;
		// }
		// this.setState((state) => {
		// 	return getInitialState();
		// });

		const token = apiCall.getToken();
		const accessToken = `Bearer ${token}`;
		const {
			firstName,
			lastName,
			email,
			contact,
			city,
			street,
			state,
			zipcode,
			locality,
		} = this.state;

		apiCall
			.post(
				"/user/addaddress",
				{
					firstName,
					lastName,
					email,
					contact,
					city,
					street,
					state,
					zipcode,
					locality,
				},
				accessToken
			)
			.then((response) => {
				// console.log(response.data);
				const { success, msg } = response.data;
				if (success) {
					console.log(msg);
					this.props.history.push("/address");
				}
			})
			.catch((error) => {
				if (!error.response) {
					console.log("Something went wrong");
				} else {
					this.setState({
						error: error.response.data.msg,
					});
				}
			});
	};
	handleChange = (e) => {
		const { name, value } = e.target;
		this.setState({
			[name]: value,
		});
	};
	render() {
		return (
			<React.Fragment>
				<Header />
				<section className="profileWrapper">
					<div className="sectionWrapper">
						<div className="row justify-content-center">
							<Sidebar activeNumber="2" />
							<div className="col-lg-9 col-12">
								<div className="userWrapper phoneFixed ">
									<div className="userHeader justify-content-start">
										<Link to="/address" className="d-block d-lg-none">
											<img
												src="/assets/images/icons/lessthan.png"
												width="22"
												className="mr-2"
											/>
										</Link>
										<h2>Add Address</h2>
									</div>

									<div className="userDetails addressChange">
										<form>
											<div className="formGroup no-gutters align-items-center row justify-content-between">
												<div className="col-lg-6">
													<input
														type="text"
														className="editProfileDetails"
														onChange={this.handleChange}
														name="firstName"
														value={this.state.firstName}
														placeholder="First Name"
													/>
												</div>
												<div className="col-lg-6">
													<input
														type="text"
														className="editProfileDetails"
														onChange={this.handleChange}
														value={this.state.lastName}
														name="lastName"
														placeholder="Last Name"
													/>
												</div>
											</div>
											<div className="formGroup no-gutters align-items-center row justify-content-between">
												<div className="col-lg-6">
													<input
														type="text"
														className="editProfileDetails"
														onChange={this.handleChange}
														value={this.state.zipcode}
														name="zipcode"
														placeholder="Pincode"
														// pattern="[0-9]{1}[0-9]{9}"
														// maxLength="4"
													/>
												</div>
												<div className="col-lg-6">
													<input
														type="text"
														className="editProfileDetails"
														name="locality"
														onChange={this.handleChange}
														value={this.state.locality}
														placeholder="Locality"
													/>
												</div>
											</div>
											<div className="formGroup no-gutters align-items-center row justify-content-between">
												<div className="col-lg-6">
													<input
														type="text"
														className="editProfileDetails"
														onChange={this.handleChange}
														name="state"
														value={this.state.state}
														// pattern="[0-9]{1}[0-9]{9}"
														// maxLength="10"
														placeholder="State"
													/>
												</div>
												<div className="col-12 col-md-6">
													<select
														className="editProfileDetails"
														name={this.state.city}
														onChange={this.handleChange}
														name="city"
														value={this.state.city}
														placeholder="City"
													>
														<option>Select City</option>
														<option name="Kolkata">Kolkata</option>
													</select>
												</div>
											</div>

											<div className="formGroup no-gutters align-items-center row justify-content-start">
												<div className="col-12">
													<textarea
														name="street"
														value={this.state.street}
														onChange={this.handleChange}
														id=""
														cols="30"
														rows="4"
														className="mb-0"
														placeholder="Address (Area & Street)"
													></textarea>
												</div>
											</div>
											<div className="formGroup no-gutters align-items-center row  justify-content-between">
												<div className="col-lg-6">
													<input
														type="text"
														className="editProfileDetails"
														onChange={this.handleChange}
														value={this.state.contact}
														name="contact"
														// pattern="[0-9]{1}[0-9]{9}"
														// maxLength="10"
														placeholder="Phone Number"
													/>
												</div>
												<div className="col-lg-6">
													<p style={{ color: "red", fontSize: 15 }}>
														{this.state.error ? this.state.error : null}
													</p>
													<input
														type="email"
														className="editProfileDetails"
														onChange={this.handleChange}
														name="email"
														value={this.state.email}
														placeholder="Email Address"
													/>
												</div>
											</div>
											<div className="formGroup no-gutters align-items-center row justify-content-between">
												<div className="col-12">
													<input
														type="submit"
														name="Submit"
														className=""
														id=""
														onClick={this.handleSubmit}
														value="Save Changes"
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
