import React, { Component } from "react";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "../header";
import Footer from "../footer";

export default class Profile extends Component {
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
				<Footer />
			</React.Fragment>
		);
	}
}
