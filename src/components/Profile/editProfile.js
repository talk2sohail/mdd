import React, { Component } from "react";

export default class EditProfile extends Component {
	render() {
		return (
			<React.Fragment>
				<section class="profileWrapper">
					<div class="sectionWrapper">
						<div class="row justify-content-center">
							<div class="col-lg-3 col-12 d-none d-lg-block">
								<div class="sideBarWrapper">
									<a href="profile.html" class="sideBarBlock active">
										<h3>My Profile</h3>
										<p>Your Name, Phone Number, Password, Gender,</p>
									</a>
									<a href="address.html" class="sideBarBlock">
										<h3>My Address</h3>
										<p>Add, Edit Addresses</p>
									</a>
									<a href="appointments.html" class="sideBarBlock">
										<h3>My Repairs</h3>
										<p>Status of Repair Appointments, Past Repairs</p>
									</a>
									<a href="javascript:void(0)" class="sideBarBlock">
										<h3>Logout</h3>
										<p>Logout of your account</p>
									</a>
								</div>
							</div>
							<div class="col-lg-9 col-12">
								<div class="userWrapper phoneFixed">
									<div class="userHeader justify-content-start">
										<a href="profile.html" class="d-block d-lg-none">
											<img
												src="assets/images/icons/lessthan.png"
												width="22"
												class="mr-2"
											/>
										</a>
										<h2>Profile Information</h2>
									</div>
									<div class="userDetails">
										<form>
											<div class="formGroup align-items-center row no-gutters justify-content-between">
												<div class="col-12 col-md-4">
													<h3>First Name</h3>
												</div>
												<div class="col-12 col-md-8">
													<input
														type="text"
														class="editProfileDetails"
														value="Md Javed"
													/>
												</div>
											</div>
											<div class="formGroup align-items-center row no-gutters justify-content-between">
												<div class="col-12 col-md-4">
													<h3>Last Name</h3>
												</div>
												<div class="col-12 col-md-8">
													<input
														type="text"
														class="editProfileDetails"
														value="Akhtar"
													/>
												</div>
											</div>
											<div class="formGroup align-items-center row no-gutters justify-content-between">
												<div class="col-12 col-md-4">
													<h3>Gender</h3>
												</div>
												<div class="col-12 col-md-8">
													<select name="" id="" class="editProfileDetails">
														<option value="Not Selected" disabled selected>
															Select Gender
														</option>
														<option value="Male">Male</option>
														<option value="Female">Female</option>
														<option value="Others">Others</option>
													</select>
												</div>
											</div>
											<div class="formGroup align-items-center row no-gutters justify-content-between">
												<div class="col-12 col-md-4">
													<h3>Email</h3>
												</div>
												<div class="col-12 col-md-8">
													<input
														type="email"
														class="editProfileDetails"
														readonly
														value="javed@mailinator.com"
													/>
												</div>
											</div>
											<div class="formGroup align-items-center row no-gutters justify-content-between">
												<div class="col-12 col-md-4 d-flex d-md-block">
													<h3>Phone Number</h3>
													<a href="javascript:void(0)" class="changePassword">
														(Send OTP)
													</a>
												</div>
												<div class="col-12 col-md-8">
													<input
														type="text"
														id="phonenumber"
														class="editProfileDetails"
														value="9831983198"
														pattern="[1-9]{1}[0-9]{9}"
														maxlength="10"
													/>
												</div>
											</div>
											<div class="formGroup align-items-center row no-gutters justify-content-between">
												<div class="col-12 col-md-4 d-flex d-md-block">
													<h3>Enter OTP</h3>
													<a href="javascript:void(0)" class="changePassword">
														(Resend OTP)
													</a>
												</div>
												<div class="col-12 col-md-8">
													<input
														type="text"
														class="editProfileDetails"
														value=""
														pattern="[0-9]{1}[0-9]{9}"
														maxlength="4"
													/>
												</div>
											</div>
											<div class="formGroup align-items-center row no-gutters justify-content-between">
												<div class="col-12">
													<input
														type="submit"
														name=""
														class=""
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
			</React.Fragment>
		);
	}
}
