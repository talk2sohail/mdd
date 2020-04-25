import React, { Component } from "react";
import apiCall from "../../axios";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "../header";
import Footer from "../footer";

export default class Profile extends Component {
	constructor(props) {
		super(props);
		this.state = {
			userDetails: {
				first_name: "--",
				last_name: "--",
				gender: "--",
				email: "",
				contact: "",
			},
		};
	}

	componentDidMount() {
		const token = apiCall.getToken();
		// console.log(accessToken);
		const accessToken = `Bearer ${token}`;
		apiCall
			.get("/user/profile", accessToken)
			.then((response) => {
				this.setState((state) => {
					const userDetails = { ...response.data.user };

					return {
						state,
						userDetails,
					};
				});
			})
			.catch((error) => {
				console.log(error.response.data.msg);
			});
	}
	render() {
		return (
			<React.Fragment>
				<Header />
				<section className="profileWrapper">
					<div className="sectionWrapper">
						<div className="row justify-content-center">
							<Sidebar activeNumber="1" />
							<div className="col-lg-9 col-12">
								<div className="userWrapper">
									<div className="userHeader">
										<h2>Profile Information</h2>
										<Link to="/editprofile">Edit Info</Link>
									</div>
									<div className="userDetails">
										<form>
											<div className="formGroup row no-gutters justify-content-between">
												<div className="col-5 col-lg-4">
													<h3>First Name</h3>
												</div>
												<div className="col-7 col-lg-8">
													<input
														type="text"
														className="plainText"
														readOnly
														value={this.state.userDetails.first_name}
													/>
												</div>
											</div>
											<div className="formGroup row no-gutters justify-content-between">
												<div className="col-5 col-lg-4">
													<h3>Last Name</h3>
												</div>
												<div className="col-7 col-lg-8">
													<input
														type="text"
														className="plainText"
														readOnly
														value={this.state.userDetails.last_name}
													/>
												</div>
											</div>
											<div className="formGroup row no-gutters justify-content-between">
												<div className="col-5 col-lg-4">
													<h3>Gender</h3>
												</div>
												<div className="col-7 col-lg-8">
													<input
														type="text"
														className="plainText"
														readOnly
														value={this.state.userDetails.gender}
													/>
												</div>
											</div>
											<div className="formGroup row no-gutters justify-content-between">
												<div className="col-5 col-lg-4">
													<h3>Email</h3>
												</div>
												<div className="col-7 col-lg-8">
													<input
														type="email"
														className="plainText"
														readOnly
														value={this.state.userDetails.email}
													/>
												</div>
											</div>
											<div className="formGroup row no-gutters justify-content-between">
												<div className="col-5 col-lg-4">
													<h3>Phone Number</h3>
												</div>
												<div className="col-7 col-lg-8">
													<input
														type="number"
														className="plainText"
														readOnly
														value={this.state.userDetails.contact}
													/>
												</div>
											</div>
											<div className="formGroup row no-gutters justify-content-between">
												<div className="col-5 col-lg-4">
													<h3>Password</h3>
													<Link to="" className="changePassword">
														(Change Password)
													</Link>
												</div>
												<div className="col-7 col-lg-8">
													<input
														type="password"
														className="plainText"
														readOnly
														name="password"
														value={9007112199}
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
