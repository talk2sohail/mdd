import React, { Component } from "react";
import { Link } from "react-router-dom";
import EditProfile from "./editProfile";

export default class Profile extends Component {
	render() {
		return (
			<React.Fragment>
				<section className="profileWrapper">
					<div className="sectionWrapper">
						<div className="row justify-content-center">
							<div className="col-lg-3 col-12 d-none d-lg-block">
								<div className="sideBarWrapper">
									<Link to="/profile" className="sideBarBlock active">
										<h3>My Profile</h3>
										<p>Your Name, Phone Number, Password, Gender,</p>
									</Link>
									<Link to="/address" className="sideBarBlock">
										<h3>My Address</h3>
										<p>Add, Edit Addresses</p>
									</Link>
									<Link to="/appointments" className="sideBarBlock">
										<h3>My Repairs</h3>
										<p>Status of Repair Appointments, Past Repairs</p>
									</Link>
									<Link to="/logout" className="sideBarBlock">
										<h3>Logout</h3>
										<p>Logout of your account</p>
									</Link>
								</div>
							</div>

							<div className="col-lg-9 col-12">
								<div className="userWrapper">
									<div className="userHeader">
										<h2>Profile Information</h2>
										<Link to="/profile/editprofile" className="edit-click">
											Edit Info
										</Link>
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
														defaultValue="Md Javed"
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
														defaultValue="Akhtar"
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
														defaultValue="Male"
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
														defaultValue="javed@mailinator.com"
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
														defaultValue={9831983198}
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
														defaultValue={9831983198}
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
			</React.Fragment>
		);
	}
}
