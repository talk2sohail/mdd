import React, { Component } from "react";
import CheckoutSummary from "./checkoutSummary";
import AddDetails from "../../Profile/AddressDetails/addDetails";
import Carts from "./Carts/carts";
import Footer from "../../footer";
import Header from "../../header";

export default class Checkout extends Component {
	state = {
		isFormOneLoaded: false,
		isFormTwoLoaded: false,
		cssColor: "selected",
	};
	formOneHandler = () => {
		this.setState({
			isFormOneLoaded: !this.state.isFormOneLoaded,
			cssColor: this.state.isLoaded ? "selected" : "",
		});
	};
	formTwoHandler = () => {
		this.setState({
			isFormTwoLoaded: !this.state.isFormTwoLoaded,
			cssColor: this.state.isLoaded ? "selected" : "",
		});
	};
	render() {
		return (
			<React.Fragment>
				<Header />
				<section className="checkoutWrapper profileWrapper">
					<div className="sectionWrapper">
						<div className="row justify-content-center">
							<div className="col-12 col-lg-8">
								<div className="userWrapper">
									<div className="userHeader">
										<h2>My Cart</h2>
									</div>
									<Carts />
								</div>
								<div className="userWrapper mt-4">
									<div className="userHeader">
										<h2>Pickup at home or Drop at shop</h2>
									</div>
									<div className="userDetails addressChange">
										<div className="pickdrropWrap">
											<ul
												className="nav nav-tabs mb-4 pb-2"
												id="myTab"
												role="tablist"
											>
												<li className="nav-item">
													<a
														className="nav-link active"
														id="home-tab"
														data-toggle="tab"
														href="#home"
														role="tab"
														aria-controls="home"
														aria-selected="true"
													>
														Pickup
													</a>
												</li>
												<li className="nav-item ml-3">
													<a
														className="nav-link"
														id="profile-tab"
														data-toggle="tab"
														href="#profile"
														role="tab"
														aria-controls="profile"
														aria-selected="false"
													>
														Drop
													</a>
												</li>
											</ul>
											<div className="tab-content" id="myTabContent">
												<div
													className="tab-pane fade show active"
													id="home"
													role="tabpanel"
													aria-labelledby="home-tab"
												>
													<a
														className="addAddress d-block gradientText"
														onClick={this.formOneHandler}
													>
														<svg
															xmlns="http://www.w3.org/2000/svg"
															width="18"
															height="18"
															viewBox="0 0 18 18"
															fill="#56ccf2"
														>
															<path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
														</svg>
														ADD NEW ADDRESS
													</a>
													<AddDetails
														cls={this.state.cssColor}
														loadEditDelete="0"
													/>
													{this.state.isFormOneLoaded ? (
														<form className="mt-4">
															<div className="formGroup no-gutters align-items-center row justify-content-between">
																<div className="col-lg-6">
																	<input
																		type="text"
																		className="editProfileDetails"
																		value=""
																		placeholder="First Name"
																	/>
																</div>
																<div className="col-lg-6">
																	<input
																		type="text"
																		className="editProfileDetails"
																		value=""
																		placeholder="Last Name"
																	/>
																</div>
															</div>
															<div className="formGroup no-gutters align-items-center row justify-content-between">
																<div className="col-lg-6">
																	<input
																		type="text"
																		className="editProfileDetails"
																		value=""
																		placeholder="Pincode"
																		pattern="[0-9]{1}[0-9]{9}"
																		maxLength="4"
																	/>
																</div>
																<div className="col-lg-6">
																	<input
																		type="text"
																		className="editProfileDetails"
																		value=""
																		placeholder="Locality"
																	/>
																</div>
															</div>
															<div className="formGroup no-gutters align-items-center row justify-content-start">
																<div className="col-12">
																	<textarea
																		name=""
																		id=""
																		cols="30"
																		rows="4"
																		className="mb-0"
																		placeholder="Address (Area &amp; Street)"
																	></textarea>
																</div>
															</div>
															<div className="formGroup no-gutters align-items-center row  justify-content-between">
																<div className="col-lg-6">
																	<input
																		type="text"
																		className="editProfileDetails"
																		value=""
																		pattern="[0-9]{1}[0-9]{9}"
																		maxLength="10"
																		placeholder="Phone Number"
																	/>
																</div>
																<div className="col-lg-6">
																	<input
																		type="email"
																		className="editProfileDetails"
																		value=""
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
																		value="Add Address"
																	/>
																</div>
															</div>
														</form>
													) : null}
												</div>
												<div
													className="tab-pane fade"
													id="profile"
													role="tabpanel"
													aria-labelledby="profile-tab"
												>
													<AddDetails
														cls={this.state.cssColor}
														loadEditDelete="0"
													/>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="userWrapper mt-4">
									<div className="userHeader">
										<h2>Deliver at home or pickup from shop</h2>
									</div>
									<div className="userDetails addressChange">
										<div className="pickdrropWrap">
											<ul
												className="nav nav-tabs mb-4 pb-2"
												id="myTabTwo"
												role="tablist"
											>
												<li className="nav-item">
													<a
														className="nav-link active"
														id="homedelivery-tab"
														data-toggle="tab"
														href="#homedelivery"
														role="tab"
														aria-controls="homedelivery"
														aria-selected="true"
													>
														Home Delivery
													</a>
												</li>
												<li className="nav-item ml-3">
													<a
														className="nav-link"
														id="pickshop-tab"
														data-toggle="tab"
														href="#pickshop"
														role="tab"
														aria-controls="pickshop"
														aria-selected="false"
													>
														Pick from Shop
													</a>
												</li>
											</ul>
											<div className="tab-content" id="myTabContentTwo">
												<div
													className="tab-pane fade show active"
													id="homedelivery"
													role="tabpanel"
													aria-labelledby="homedelivery-tab"
												>
													<a
														className="addAddress d-block gradientText"
														onClick={this.formTwoHandler}
													>
														<svg
															xmlns="http://www.w3.org/2000/svg"
															width="18"
															height="18"
															viewBox="0 0 18 18"
															fill="#56ccf2"
														>
															<path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
														</svg>
														ADD NEW ADDRESS
													</a>
													<AddDetails
														cls={this.state.cssColor}
														loadEditDelete="0"
													/>
												</div>

												{this.state.isFormTwoLoaded ? (
													<form className="mt-4">
														<div className="formGroup no-gutters align-items-center row justify-content-between">
															<div className="col-lg-6">
																<input
																	type="text"
																	className="editProfileDetails"
																	value=""
																	placeholder="First Name"
																/>
															</div>
															<div className="col-lg-6">
																<input
																	type="text"
																	className="editProfileDetails"
																	value=""
																	placeholder="Last Name"
																/>
															</div>
														</div>
														<div className="formGroup no-gutters align-items-center row justify-content-between">
															<div className="col-lg-6">
																<input
																	type="text"
																	className="editProfileDetails"
																	value=""
																	placeholder="Pincode"
																	pattern="[0-9]{1}[0-9]{9}"
																	maxLength="4"
																/>
															</div>
															<div className="col-lg-6">
																<input
																	type="text"
																	className="editProfileDetails"
																	value=""
																	placeholder="Locality"
																/>
															</div>
														</div>
														<div className="formGroup no-gutters align-items-center row justify-content-start">
															<div className="col-12">
																<textarea
																	name=""
																	id=""
																	cols="30"
																	rows="4"
																	className="mb-0"
																	placeholder="Address (Area &amp; Street)"
																></textarea>
															</div>
														</div>
														<div className="formGroup no-gutters align-items-center row  justify-content-between">
															<div className="col-lg-6">
																<input
																	type="text"
																	className="editProfileDetails"
																	value=""
																	pattern="[0-9]{1}[0-9]{9}"
																	maxLength="10"
																	placeholder="Phone Number"
																/>
															</div>
															<div className="col-lg-6">
																<input
																	type="email"
																	className="editProfileDetails"
																	value=""
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
																	value="Add Address"
																/>
															</div>
														</div>
													</form>
												) : null}
												<div
													className="tab-pane fade"
													id="pickshop"
													role="tabpanel"
													aria-labelledby="pickshop-tab"
												>
													<AddDetails
														cls={this.state.cssColor}
														loadEditDelete="1"
													/>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							{/* <!-- checkoutSummary --> */}
							<CheckoutSummary />
						</div>
					</div>
				</section>
				<Footer />
			</React.Fragment>
		);
	}
}
