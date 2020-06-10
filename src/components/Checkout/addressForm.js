import React, { PureComponent } from "react";
import apiCall from "../../axios";

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

export default class AddressForm extends PureComponent {
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
					email,
					locality,
				},
				accessToken
			)
			.then((response) => {
				// console.log(response.data);
				const { success, msg } = response.data;
				if (success) {
					console.log(msg);
					window.location.reload();
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
				<form className="mt-4">
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
								placeholder="Your Email Address"
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
			</React.Fragment>
		);
	}
}
