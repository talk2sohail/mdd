import React, { Component } from "react";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "../header";
import Footer from "../footer";

export default class Editaddress extends Component {
	render() {
		return (
			<React.Fragment>
				<Header />
				<section class="profileWrapper">
					<div class="sectionWrapper">
						<div class="row justify-content-center">
							<Sidebar activeNumber="2" />
							<div class="col-lg-9 col-12">
								<div class="userWrapper phoneFixed ">
									<div class="userHeader justify-content-start">
										<Link to="/address" class="d-block d-lg-none">
											<img
												src="/assets/images/icons/lessthan.png"
												width="22"
												class="mr-2"
											/>
										</Link>
										<h2>Edit Address</h2>
										{/* <!-- <a href="javascript:void(0)">Edit Info</a> --> */}
									</div>
									<div class="userDetails addressChange">
										<form>
											<div class="formGroup no-gutters align-items-center row justify-content-between">
												<div class="col-lg-6">
													<input
														type="text"
														class="editProfileDetails"
														value="Md Javed"
														placeholder="First Name"
													/>
												</div>
												<div class="col-lg-6">
													<input
														type="text"
														class="editProfileDetails"
														value="Akhtar"
														placeholder="Last Name"
													/>
												</div>
											</div>
											<div class="formGroup no-gutters align-items-center row justify-content-between">
												<div class="col-lg-6">
													<input
														type="text"
														class="editProfileDetails"
														value="700016"
														placeholder="Pincode"
														pattern="[0-9]{1}[0-9]{9}"
														maxlength="4"
													/>
												</div>
												<div class="col-lg-6">
													<input
														type="text"
														class="editProfileDetails"
														value="Park Street"
														placeholder="Locality"
													/>
												</div>
											</div>
											<div class="formGroup no-gutters align-items-center row justify-content-start">
												<div class="col-12">
													<textarea
														name=""
														id=""
														cols="30"
														rows="4"
														class="mb-0"
														placeholder="Address (Area & Street)"
													>
														10, Park Street, Kolkata-700 016.
													</textarea>
												</div>
											</div>
											<div class="formGroup no-gutters align-items-center row  justify-content-between">
												<div class="col-lg-6">
													<input
														type="text"
														class="editProfileDetails"
														value="9831983198"
														pattern="[0-9]{1}[0-9]{9}"
														maxlength="10"
														placeholder="Phone Number"
													/>
												</div>
												<div class="col-lg-6">
													<input
														type="email"
														class="editProfileDetails"
														value="javed@mailinator.com"
														placeholder="Email Address"
													/>
												</div>
											</div>
											<div class="formGroup no-gutters align-items-center row justify-content-between">
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
				<Footer />
			</React.Fragment>
		);
	}
}
