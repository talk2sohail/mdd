import React, { Component } from "react";
import HeadBar from "./headBar";
import Logo from "../assets/images/logo.png";
export default class Header extends Component {
	componentDidMount() {
		window.$(window).on("scroll load", function() {
			window.$(window).scrollTop() > window.$(".siteHeader").outerHeight()
				? window.$(".siteHeader").addClass("sticky")
				: window.$(".siteHeader").removeClass("sticky");
		});
	}
	render() {
		return (
			<React.Fragment>
				<HeadBar />
				<header className="siteHeader">
					<div className="sectionWrapper">
						<div className="row align-items-center justify-content-between no-gutters">
							{/* <!-- hamburger --> */}
							<div className="col-4 d-block d-lg-none">
								<a href="javascript:void(0)" className="mobileMenuTrigger">
									<button type="button" className="">
										<span className="icon-bar top-bar"></span>
										<span className="icon-bar middle-bar"></span>
										<span className="icon-bar bottom-bar m-0"></span>
									</button>
								</a>
							</div>
							{/* <!-- logo --> */}
							<div className="col-4 col-lg-2">
								<div className="logoWrapper">
									<a href="../html/index.html">
										<img src={Logo} width="120" alt="" />
									</a>
								</div>
							</div>
							{/* <!-- menu --> */}
							<div className="col-0 col-lg-10 containsBottomBar d-lg-block text-right">
								<div className="menuWrapper d-none d-lg-inline-block">
									<div className="menuItem">
										<a href="about.html">About Us</a>
									</div>
									<div className="menuItem">
										<a href="repair.html">Repair</a>
									</div>
									<div className="menuItem">
										<a href="javascript:void(0);">Brands</a>
									</div>
									<div className="menuItem">
										<a href="javascript:void(0);">New Offers</a>
									</div>
									<div className="menuItem">
										<a href="javascript:void(0);">Our Stores</a>
									</div>
									{/* <!-- <div className="menuItem">
                <a href="javascript:void(0);">Collaborate</a>
              </div> -->
                <!-- <div className="menuItem">
                <a href="javascript:void(0);">Contact Us</a>
              </div> --> */}
								</div>
								<div className="iconsWrapper">
									<div className="iconsItem d-inline-block d-md-block d-lg-none">
										<a href="index.html" className="active">
											<i className="glyph-icon flaticon-home-1"></i>
										</a>
									</div>
									<div className="iconsItem d-inline-block d-md-block d-lg-none">
										<a href="repair.html">
											<i className="glyph-icon flaticon-settings"></i>
										</a>
									</div>
									<div className="iconsItem  d-lg-inline-block d-md-block  ">
										<a
											href="javascript:void(0)"
											data-toggle="modal"
											data-target="#loginModalCenter"
											className="logInBtn"
										>
											<i className="glyph-icon flaticon-user"></i>
										</a>
										<ul className="subMenu">
											<li>
												<a href="profile.html">My Profile</a>
											</li>

											<li className="rule"></li>
											<li>
												<a href="address.html">Saved Address</a>
											</li>

											<li className="rule"></li>
											<li>
												<a href="repair.html">Repair Appointments</a>
											</li>

											<li className="rule"></li>

											<li>
												<a href="javascript:void(0)">Log Out</a>
											</li>
										</ul>
									</div>
									<div className="iconsItem d-none d-lg-inline-block">
										<a href="faq.html">
											<i className="glyph-icon flaticon-headphones"></i>
										</a>
									</div>
									<div className="iconsItem  d-lg-inline-block d-md-block hasItems">
										<a href="checkout.html">
											<i className="glyph-icon flaticon-note"></i>
											<div className="circleWrapper">
												<div className="circle"></div>
											</div>
										</a>
										<ul className="subMenu">
											<li>
												<a className="d-flex justify-content-center product">
													<div className="imgWrap">
														<img
															src="assets/images/mobiles/oneplus/oneplussixt.png"
															height="60"
															alt=""
														/>
													</div>
													<div className="content">
														<h3>OnePlus 6T</h3>
														<p>Screen Repair, Mic Repair</p>
														<p>
															Total Price: <span>Rs 1399</span>
														</p>
													</div>
												</a>
											</li>
										</ul>
									</div>
								</div>
							</div>
							{/* <!-- whatsapp --> */}
							<div className="col-4">
								<div className="whatsappWrapper">
									<a
										href="https://wa.me/7278885292?text=I'm%20interested%20in%20your%20car%20for%20sale"
										target="_blank"
									>
										<img src="assets/images/icons/whatsapp.png" alt="" />
									</a>
									<span className="pulse-ring"></span>
								</div>
							</div>
						</div>
					</div>
				</header>
			</React.Fragment>
		);
	}
}
