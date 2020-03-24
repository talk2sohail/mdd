import React, { Component } from "react";
import CheckoutSummary from "./checkoutSummary";
import AddDetails from "../../Profile/AddressDetails/addDetails";
import Carts from "./Carts/carts";
import Footer from "../../footer";
import Header from "../../header";

export default class Checkout extends Component {
	render() {
		return (
			<React.Fragment>
				<Header />
				<section class="checkoutWrapper profileWrapper">
					<div class="sectionWrapper">
						<div class="row justify-content-center">
							<div class="col-12 col-lg-8">
								<div class="userWrapper">
									<div class="userHeader">
										<h2>My Cart</h2>
									</div>
									<Carts />
								</div>
								<div class="userWrapper mt-4">
									<div class="userHeader">
										<h2>Pickup at home or Drop at shop</h2>
									</div>
									<div class="userDetails addressChange">
										<div class="pickdrropWrap">
											<ul
												class="nav nav-tabs mb-4 pb-2"
												id="myTab"
												role="tablist"
											>
												<li class="nav-item">
													<a
														class="nav-link active"
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
												<li class="nav-item ml-3">
													<a
														class="nav-link"
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
											<div class="tab-content" id="myTabContent">
												<div
													class="tab-pane fade show active"
													id="home"
													role="tabpanel"
													aria-labelledby="home-tab"
												>
													<a
														class="addAddress d-block gradientText"
														href="javasscript:void(0)"
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
													<AddDetails />
													<form class="mt-4">
														<div class="formGroup no-gutters align-items-center row justify-content-between">
															<div class="col-lg-6">
																<input
																	type="text"
																	class="editProfileDetails"
																	value=""
																	placeholder="First Name"
																/>
															</div>
															<div class="col-lg-6">
																<input
																	type="text"
																	class="editProfileDetails"
																	value=""
																	placeholder="Last Name"
																/>
															</div>
														</div>
														<div class="formGroup no-gutters align-items-center row justify-content-between">
															<div class="col-lg-6">
																<input
																	type="text"
																	class="editProfileDetails"
																	value=""
																	placeholder="Pincode"
																	pattern="[0-9]{1}[0-9]{9}"
																	maxlength="4"
																/>
															</div>
															<div class="col-lg-6">
																<input
																	type="text"
																	class="editProfileDetails"
																	value=""
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
																	placeholder="Address (Area &amp; Street)"
																></textarea>
															</div>
														</div>
														<div class="formGroup no-gutters align-items-center row  justify-content-between">
															<div class="col-lg-6">
																<input
																	type="text"
																	class="editProfileDetails"
																	value=""
																	pattern="[0-9]{1}[0-9]{9}"
																	maxlength="10"
																	placeholder="Phone Number"
																/>
															</div>
															<div class="col-lg-6">
																<input
																	type="email"
																	class="editProfileDetails"
																	value=""
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
																	value="Add Address"
																/>
															</div>
														</div>
													</form>
												</div>
												<div
													class="tab-pane fade"
													id="profile"
													role="tabpanel"
													aria-labelledby="profile-tab"
												>
													<AddDetails />
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="userWrapper mt-4">
									<div class="userHeader">
										<h2>Deliver at home or pickup from shop</h2>
									</div>
									<div class="userDetails addressChange">
										<div class="pickdrropWrap">
											<ul
												class="nav nav-tabs mb-4 pb-2"
												id="myTabTwo"
												role="tablist"
											>
												<li class="nav-item">
													<a
														class="nav-link active"
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
												<li class="nav-item ml-3">
													<a
														class="nav-link"
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
											<div class="tab-content" id="myTabContentTwo">
												<div
													class="tab-pane fade show active"
													id="homedelivery"
													role="tabpanel"
													aria-labelledby="homedelivery-tab"
												>
													<a
														class="addAddress d-block gradientText"
														href="javasscript:void(0)"
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
													<AddDetails />
												</div>
												<div
													class="tab-pane fade"
													id="pickshop"
													role="tabpanel"
													aria-labelledby="pickshop-tab"
												>
													<AddDetails />
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
