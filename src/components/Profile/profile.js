import React, { Component } from "react";
import apiCall from "../../axios";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "../header";
import Footer from "../footer";

//arg: bcoz the user will be logged in before comming here
import Modal from "../modal";

export default class Profile extends Component {
	constructor(props) {
		super(props);
		this.state = {
			userDetails: {},
			isDataLoaded: false,
		};
	}

	componentDidMount() {
		document.title = "PROFILE | Get your phone repair | MDDS";

		const token = apiCall.getToken();
		const accessToken = `Bearer ${token}`;
		apiCall
			.get("/user/profile", accessToken)
			.then((response) => {
				console.log(response.data);
				this.setState({
					userDetails: response.data.user,
					isDataLoaded: true,
				});
			})
			.catch((error) => {
				if (!error.respsonse) {
					console.log("Something went Wrong");
				} else {
					console.log(error.response.data.msg);
				}
			});
	}
	render() {
		return (
			<>
				<Header />
				<section className="profileWrapper">
					<div className="sectionWrapper">
						<div className="row justify-content-center">
							<Sidebar activeNumber="1" />
							<div className="col-lg-9 col-12">
								<div className="userWrapper">
									{!this.state.isDataLoaded ? null : !this.state.userDetails
											.isVerified ? (
										<p style={{ color: "red", fontSize: 16 }}>
											Your Email is not Verfied.
										</p>
									) : null}
									<div className="userHeader">
										<h2>Profile Information</h2>
										<Link to="/editprofile">Edit Info</Link>
									</div>

									<div className="userDetails">
										<form>
											<div className="formGroup row no-gutters justify-content-between">
												<div className="col-5 col-lg-4">
													<h3>Name</h3>
												</div>
												<div className="col-7 col-lg-8">
													<input
														type="text"
														className="plainText"
														readOnly
														defaultValue={this.state.userDetails.username}
													/>
												</div>
											</div>
											{/* <div className="formGroup row no-gutters justify-content-between">
												<div className="col-5 col-lg-4">
													<h3>Last Name</h3>
												</div>
												<div className="col-7 col-lg-8">
													<input
														type="text"
														className="plainText"
														readOnly
														defaultValue={this.state.userDetails.last_name}
													/>
												</div>
											</div> */}
											<div className="formGroup row no-gutters justify-content-between">
												<div className="col-5 col-lg-4">
													<h3>Gender</h3>
												</div>
												<div className="col-7 col-lg-8">
													<input
														type="text"
														className="plainText"
														readOnly
														defaultValue={this.state.userDetails.gender}
													/>
												</div>
											</div>
											<div className="formGroup row no-gutters justify-content-between">
												<div className="col-5 col-lg-4">
													<h3>Email</h3>
													{!this.state.userDetails.isVerified ? (
														<a
															// onClick={this.handleContactChange}
															href="/emailverification"
															className="changePassword"
															style={{ fontSize: 13 }}
														>
															[Verify Email]
														</a>
													) : null}
												</div>
												<div className="col-7 col-lg-8">
													<input
														type="email"
														className="plainText"
														readOnly
														defaultValue={this.state.userDetails.email}
													/>
												</div>
											</div>
											<div className="formGroup row no-gutters justify-content-between">
												<div className="col-5 col-lg-4">
													<h3>Phone Number</h3>
												</div>
												<div className="col-7 col-lg-8">
													<input
														type="text"
														className="plainText"
														readOnly
														defaultValue={this.state.userDetails.contact}
													/>
												</div>
											</div>
											<div className="formGroup row no-gutters justify-content-between">
												<div className="col-5 col-lg-4">
													<h3>Password</h3>
													<Link
														to="/changepassword"
														className="changePassword"
														style={{ fontSize: 13 }}
													>
														(Change Password)
													</Link>
												</div>
												<div className="col-7 col-lg-8">
													<input
														type="password"
														className="plainText"
														readOnly
														name="password"
														defaultValue="**********"
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
			</>
		);
	}
}
