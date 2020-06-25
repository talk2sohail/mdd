import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import Sidebar from "../Sidebar";
import Header from "../../header";
import Footer from "../../footer";
import Modal from "../..//modal";

import apiCall from "../../../axios";

class Editaddress extends Component {
	constructor(props) {
		super(props);
		this.state = {
			_id: "",
			firstName: "",
			lastName: "",
			contact: "",
			city: "",
			locality: "",
			state: "",
			street: "",
			zipcode: "",
			email: "",
			error: "",
		};

		this.handleChange = this.handleChange.bind(this);
		this.onAddressSubmit = this.onAddressSubmit.bind(this);
	}
	componentDidMount() {

		//get the address from the local storage
		const address = JSON.parse(sessionStorage.getItem("user_add"));
		console.log(address);
		this.setState({
			_id: address._id,
			email: address.email,
			firstName: address.firstName,
			lastName: address.lastName,
			contact: address.contact,
			street: address.street,
			city: address.city,
			state: address.state,
			locality: address.locality,
			zipcode: address.zipcode,
		});
	}
	handleChange = (e) => {
		const { name, value } = e.target;
		this.setState({
			[name]: value,
		});
	};

	onAddressSubmit = (e) => {
		e.preventDefault();
		const {
			_id,
			street,
			email,
			firstName,
			lastName,
			state,
			contact,
			zipcode,
			locality,
			city,
		} = this.state;
		const token = apiCall.getToken();
		const accessToken = `Bearer ${token}`;
		apiCall
			.post(
				"/user/editaddress",
				{
					_id,
					street,
					email,
					firstName,
					lastName,
					state,
					contact,
					zipcode,
					locality,
					city,
				},
				accessToken
			)
			.then((response) => {
				const { success, msg } = response.data;
				if (success) {
					console.log(msg);
					this.props.history.push("/address");
				}
			})
			.catch((err) => {
				if (!err.response) {
					console.log("Something went wrong");
				} else {
					this.setState({
						error: err.response.data.msg,
					});
				}
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
										<h2>Edit Address</h2>
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
														name="lastName"
														value={this.state.lastName}
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
														name="zipcode"
														value={this.state.zipcode}
														placeholder="Pincode"
														// pattern="[0-9]{1}[0-9]{9}"
														// maxLength="4"
													/>
												</div>
												<div className="col-lg-6">
													<input
														type="text"
														className="editProfileDetails"
														onChange={this.handleChange}
														name="locality"
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
														id=""
														cols="30"
														rows="4"
														className="mb-0"
														value={this.state.street}
														onChange={this.handleChange}
														name="street"
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
														name="contact"
														value={this.state.contact}
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
														name=""
														className=""
														id=""
														onClick={this.onAddressSubmit}
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

export default withRouter(Editaddress);
