import React, { Component } from "react";
import Sidebar from "./Sidebar";
import { Link, NavLink } from "react-router-dom";
import Header from "../header";
import Footer from "../footer";

export default class EditProfile extends Component {
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
														value="Md Javed"
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
														value="Akhtar"
													/>
												</div>
											</div>
											<div className="formGroup align-items-center row no-gutters justify-content-between">
												<div className="col-12 col-md-4">
													<h3>Gender</h3>
												</div>
												<div className="col-12 col-md-8">
													<select name="" id="" className="editProfileDetails">
														<option value="Not Selected" disabled selected>
															Select Gender
														</option>
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
														readonly
														value="javed@mailinator.com"
													/>
												</div>
											</div>
											<div className="formGroup align-items-center row no-gutters justify-content-between">
												<div className="col-12 col-md-4 d-flex d-md-block">
													<h3>Phone Number</h3>
													<a
														href="javascript:void(0)"
														className="changePassword"
													>
														(Send OTP)
													</a>
												</div>
												<div className="col-12 col-md-8">
													<input
														type="text"
														id="phonenumber"
														className="editProfileDetails"
														value="9831983198"
														pattern="[1-9]{1}[0-9]{9}"
														maxlength="10"
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
														type="text"
														className="editProfileDetails"
														value=""
														pattern="[0-9]{1}[0-9]{9}"
														maxlength="4"
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
