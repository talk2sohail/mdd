import React, { Component } from "react";

export default class Appointments extends Component {
	render() {
		return (
			<React.Fragment>
				<section className="profileWrapper">
					<div className="sectionWrapper">
						<div className="row justify-content-center">
							<div className="col-lg-3 col-12 d-none d-lg-block">
								<div className="sideBarWrapper">
									<a href="profile.html" className="sideBarBlock">
										<h3>My Profile</h3>
										<p>Your Name, Phone Number, Password, Gender,</p>
									</a>
									<a href="address.html" className="sideBarBlock">
										<h3>My Address</h3>
										<p>Add, Edit Addresses</p>
									</a>
									<a href="appointments.html" className="sideBarBlock active">
										<h3>My Repairs</h3>
										<p>Status of Repair Appointments, Past Repairs</p>
									</a>
									<a href="javascript:void(0)" className="sideBarBlock">
										<h3>Logout</h3>
										<p>Logout of your account</p>
									</a>
								</div>
							</div>
							<div className="col-lg-9 col-12">
								<div className="userWrapper">
									<div className="userHeader">
										<h2>My Repair Appointments</h2>
									</div>
									<div className="userDetails">
										<div className="typesofAppointments d-flex align-items-center justify-content-start">
											<a href="javascript:void(0)" className="active">
												All
											</a>
											<a href="javascript:void(0)">Completed</a>
											<a href="javascript:void(0)">Cancelled</a>
											<a href="javascript:void(0)">Revisions</a>
										</div>
										<div className="orderBlock">
											<div className="orderHeader d-flex align-items-center justify-content-between">
												<span className="orderStatus repairing">Repairing</span>
												<p className="d-none d-lg-block">
													<span>Order Time</span>
													12-03-2020 02:28
												</p>
												<p className="d-none d-lg-block">
													<span>Order Number</span>
													201485136
												</p>
												<div>
													<a href="javascript:void(0)" className="gradientText">
														Order Details
													</a>
												</div>
											</div>
											<div className="orderBody d-flex justify-content-start flex-wrap ">
												<div className="imgWrap">
													<img
														src="assets/images/mobiles/oneplus/oneplussixt.png"
														alt=""
													/>
												</div>
												<div className="contentWrap">
													<h3>OnePlus 6T</h3>
													<p>
														<span>Color: </span> Midnight Black
													</p>
													<p>
														<span>Issues: </span>
														Screen Repair, Mic Repair
													</p>
													<p className="price">Rs 1399</p>
												</div>
												<div className="contentWrapTwo">
													<h3>
														<span className="underRepair" />
														Repair to be completed by 13-03-2020
													</h3>
													<p>Device given at shop</p>
													<div className="buttons">
														<a href="javascript:void(0)">Download Invoice</a>
													</div>
												</div>
											</div>
											<div className="orderFoooter d-flex align-items-center justify-content-between">
												<p>
													<span>Shop Name</span>
													Mobi Quick
												</p>
												<p>
													<span>Contact Number</span>
													9831983198
												</p>
											</div>
										</div>
										<div className="orderBlock">
											<div className="orderHeader d-flex align-items-center justify-content-between">
												<span className="orderStatus completed">Completed</span>
												<p className="d-none d-lg-block">
													<span>Order Time</span>
													12-03-2020 02:28
												</p>
												<p className="d-none d-lg-block">
													<span>Order Number</span>
													201485136
												</p>
												<div>
													<a href="javascript:void(0)" className="gradientText">
														Order Details
													</a>
												</div>
											</div>
											<div className="orderBody d-flex justify-content-start flex-wrap ">
												<div className="imgWrap">
													<img
														src="assets/images/mobiles/oneplus/oneplussixt.png"
														alt=""
													/>
												</div>
												<div className="contentWrap">
													<h3>OnePlus 6T</h3>
													<p>
														<span>Color: </span> Midnight Black
													</p>
													<p>
														<span>Issues: </span>
														Screen Repair, Mic Repair
													</p>
													<p className="price">Rs 1399</p>
												</div>
												<div className="contentWrapTwo">
													<h3>
														<span className="repairCompleted" />
														Repair completed on 13-03-2020
													</h3>
													<p>Device picked up from home</p>
													<div className="buttons">
														<a href="javascript:void(0)">Download Invoice</a>
													</div>
												</div>
											</div>
											<div className="orderFoooter d-flex align-items-center justify-content-between">
												<p>
													<span>Shop Name</span>
													Mobi Quick
												</p>
												<p>
													<span>Contact Number</span>
													9831983198
												</p>
											</div>
										</div>
										<div className="orderBlock">
											<div className="orderHeader d-flex align-items-center justify-content-between">
												<span className="orderStatus cancelled">Cancelled</span>
												<p className="d-none d-lg-block">
													<span>Order Time</span>
													12-03-2020 02:28
												</p>
												<p className="d-none d-lg-block">
													<span>Order Number</span>
													201485136
												</p>
												<div>
													<a href="javascript:void(0)" className="gradientText">
														Order Details
													</a>
												</div>
											</div>
											<div className="orderBody d-flex justify-content-start flex-wrap ">
												<div className="imgWrap">
													<img
														src="assets/images/mobiles/oneplus/oneplussixt.png"
														alt=""
													/>
												</div>
												<div className="contentWrap">
													<h3>OnePlus 6T</h3>
													<p>
														<span>Color: </span> Midnight Black
													</p>
													<p>
														<span>Issues: </span>
														Screen Repair, Mic Repair
													</p>
													<p className="price">Rs 1399</p>
												</div>
												<div className="contentWrapTwo">
													<h3>
														<span className="cancelled" />
														Repair cancelled
													</h3>
												</div>
											</div>
											<div className="orderFoooter d-flex align-items-center justify-content-between">
												<p>
													<span>Shop Name</span>
													Mobi Quick
												</p>
												<p>
													<span>Contact Number</span>
													9831983198
												</p>
											</div>
										</div>
										<div className="orderBlock">
											<div className="orderHeader d-flex align-items-center justify-content-between">
												<span className="orderStatus revision">Revision</span>
												<p className="d-none d-lg-block">
													<span>Order Time</span>
													12-03-2020 02:28
												</p>
												<p className="d-none d-lg-block">
													<span>Order Number</span>
													201485136
												</p>
												<div>
													<a href="javascript:void(0)" className="gradientText">
														Order Details
													</a>
												</div>
											</div>
											<div className="orderBody d-flex justify-content-start flex-wrap ">
												<div className="imgWrap">
													<img
														src="assets/images/mobiles/oneplus/oneplussixt.png"
														alt=""
													/>
												</div>
												<div className="contentWrap">
													<h3>OnePlus 6T</h3>
													<p>
														<span>Color: </span> Midnight Black
													</p>
													<p>
														<span>Issues: </span>
														Screen Repair, Mic Repair
													</p>
													<p>
														<span>Revision: </span>
														Screen Repair, Speaker Repair
													</p>
													<p className="price">Rs 1299</p>
												</div>
												<div className="contentWrapTwo">
													<h3>
														<span className="revision" />
														Revision Added
													</h3>
													<p>Device picked up from home</p>
													<div className="buttons">
														<a href="javascript:void(0)">Download Invoice</a>
													</div>
												</div>
											</div>
											<div className="orderFoooter d-flex align-items-center justify-content-between">
												<p>
													<span>Shop Name</span>
													Mobi Quick
												</p>
												<p>
													<span>Contact Number</span>
													9831983198
												</p>
											</div>
										</div>
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
