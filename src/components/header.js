import React, { Component } from "react";
import HeadBar from "./headBar";
import Logo from "../assets/images/logo.png";
import collaborate from "../assets/images/icons/collaborate.svg";
import whatsapp from "../assets/images/icons/whatsapp.png";
export default class Header extends Component {
	componentDidMount() {
		//Sticky Header
		window.$(window).on("scroll load", function() {
			window.$(window).scrollTop() > window.$(".siteHeader").outerHeight()
				? window.$(".siteHeader").addClass("sticky")
				: window.$(".siteHeader").removeClass("sticky");
		});

		// mobile menu js
		window.$(".mobileMenuTrigger").click(function() {
			window.$(".mobileMenuWrapperOuter").addClass("on");
			window.$("body").addClass("mobileMenuActive");
		});
		window.$(".mobileMenuCloseWrapper").click(function() {
			window.$(".mobileMenuWrapperOuter").removeClass("on");
			window.$("body").removeClass("mobileMenuActive");
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
										<img src={whatsapp} alt="" />
									</a>
									<span className="pulse-ring"></span>
								</div>
							</div>
						</div>
					</div>
					<div className="mobileMenuWrapperOuter d-lg-none">
						<div className="mobileMenuWrapper">
							<div className="mobile-menu-wrapper-header d-flex align-items-center position-relative">
								<a
									className="mobileMenuCloseWrapper"
									href="javascript:void(0);"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="18"
										height="18"
										viewBox="0 0 18 18"
										fill="#fff"
									>
										<path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
									</svg>
								</a>
								<img src={collaborate} width="100" alt="" />
								<div className="mobile-menu-header-inner">
									<a href="javascript:void(0)">Hey Javed,</a>
									<span>Welcome back</span>

									<a
										href=""
										className="d-none"
										data-toggle="modal"
										data-target="#loginModalCenter"
									>
										Login / Signup
									</a>
								</div>
							</div>
							<nav className="mobileMenu d-flex flex-column">
								<div className="borders">
									<a href="index.html" className="mobileMenuLink">
										Home
									</a>
									<a href="about.html" className="mobileMenuLink">
										About Us
									</a>
									<a href="repair.html" className="mobileMenuLink">
										Repair
									</a>
									<a href="javascript:void(0)" className="mobileMenuLink">
										Brand
									</a>
									<a href="javascript:void(0)" className="mobileMenuLink">
										New Offers
									</a>
									<a href="javascript:void(0)" className="mobileMenuLink">
										Our Stores
									</a>
								</div>
								<div className="borders">
									<a href="profile.html" className="mobileMenuLink">
										Profile
									</a>
									<a href="appointments.html" className="mobileMenuLink">
										Repair Appointments
									</a>
									<a href="address.html" className="mobileMenuLink">
										Saved Address
									</a>
								</div>
								<div className="borders">
									<a href="javascript:void(0)" className="mobileMenuLink">
										Collaborate
									</a>
									<a href="javascript:void(0)" className="mobileMenuLink">
										Blog
									</a>
								</div>
								<div className="borders">
									<a href="faq.html" className="mobileMenuLink">
										FAQs
									</a>
									<a href="javascript:void(0)" className="mobileMenuLink">
										Feedback
									</a>
								</div>
							</nav>
						</div>
					</div>
				</header>
			</React.Fragment>
		);
	}
}
