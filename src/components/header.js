import React, { PureComponent } from "react";
import { Link, Route } from "react-router-dom";
import HeadBar from "./headBar";
import Modal from "./modal";
export default class Header extends PureComponent {
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
								<Link href="javascript:void(0)" className="mobileMenuTrigger">
									<button type="button" className="">
										<span className="icon-bar top-bar"></span>
										<span className="icon-bar middle-bar"></span>
										<span className="icon-bar bottom-bar m-0"></span>
									</button>
								</Link>
							</div>
							{/* <!-- logo --> */}
							<div className="col-4 col-lg-2">
								<div className="logoWrapper">
									<Link to="/">
										<img src="/assets/images/logo.png" width="120" alt="" />
									</Link>
								</div>
							</div>
							{/* <!-- menu --> */}
							<div className="col-0 col-lg-10 containsBottomBar d-lg-block text-right">
								<div className="menuWrapper d-none d-lg-inline-block">
									<div className="menuItem">
										<Link to="/about">About Us</Link>
									</div>
									<div className="menuItem">
										<Link to="/repair">Repair</Link>
									</div>
									<div className="menuItem">
										<Link href="javascript:void(0);">New Offers</Link>
									</div>
									<div className="menuItem">
										<Link href="javascript:void(0);">Our Stores</Link>
									</div>
									{/* <!-- <div className="menuItem">
                <Link href="javascript:void(0);">Collaborate</Link>
              </div> -->
                <!-- <div className="menuItem">
                <Link href="javascript:void(0);">Contact Us</Link>
              </div> --> */}
								</div>
								<div className="iconsWrapper">
									<div className="iconsItem d-inline-block d-md-block d-lg-none">
										<Link href="index.html" className="active">
											<i className="glyph-icon flaticon-home-1"></i>
										</Link>
									</div>
									<div className="iconsItem d-inline-block d-md-block d-lg-none">
										<Link href="repair.html">
											<i className="glyph-icon flaticon-settings"></i>
										</Link>
									</div>
									<div className="iconsItem  d-lg-inline-block d-md-block  ">
										<Link
											href="javascript:void(0)"
											data-toggle="modal"
											data-target="#loginModalCenter"
											className="logInBtn"
										>
											<i className="glyph-icon flaticon-user"></i>
										</Link>
										<ul className="subMenu">
											<li>
												<Link to="/profile">My Profile</Link>
											</li>

											<li className="rule"></li>
											<li>
												<Link to="/address">Saved Address</Link>
											</li>

											<li className="rule"></li>
											<li>
												<Link to="/appointments">Repair Appointments</Link>
											</li>

											<li className="rule"></li>

											<li>
												<Link to="/logout">Log Out</Link>
											</li>
										</ul>
									</div>
									<div className="iconsItem d-none d-lg-inline-block">
										<Link href="faq.html">
											<i className="glyph-icon flaticon-headphones"></i>
										</Link>
									</div>
									<div className="iconsItem  d-lg-inline-block d-md-block hasItems">
										<Link href="checkout.html">
											<i className="glyph-icon flaticon-note"></i>
											<div className="circleWrapper">
												<div className="circle"></div>
											</div>
										</Link>
										<ul className="subMenu">
											<li>
												<Link className="d-flex justify-content-center product">
													<div className="imgWrap">
														<img
															src="/assets/images/mobiles/oneplus/oneplussixt.png"
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
												</Link>
											</li>
										</ul>
									</div>
								</div>
							</div>
							{/* <!-- whatsapp --> */}
							<div className="col-4">
								<div className="whatsappWrapper">
									<Link
										href="https://wa.me/7278885292?text=I'm%20interested%20in%20your%20car%20for%20sale"
										target="_blank"
									>
										<img src="/assets/images/icons/whatsapp.png" alt="" />
									</Link>
									<span className="pulse-ring"></span>
								</div>
							</div>
						</div>
					</div>
					{/* Signup modal */}
					<Modal />
					{/* mobile menu modal */}
					<div className="mobileMenuWrapperOuter d-lg-none">
						<div className="mobileMenuWrapper">
							<div className="mobile-menu-wrapper-header d-flex align-items-center position-relative">
								<Link
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
								</Link>
								<img
									src="/assets/images/icons/collaborate.svg"
									width="100"
									alt=""
								/>
								<div className="mobile-menu-header-inner">
									<Link href="javascript:void(0)">Hey Javed,</Link>
									<span>Welcome back</span>

									<Link
										href=""
										className="d-none"
										data-toggle="modal"
										data-target="#loginModalCenter"
									>
										Login / Signup
									</Link>
								</div>
							</div>
							<nav className="mobileMenu d-flex flex-column">
								<div className="borders">
									<Link to="/" className="mobileMenuLink">
										Home
									</Link>
									<Link to="/about" className="mobileMenuLink">
										About Us
									</Link>
									<Link to="/repair" className="mobileMenuLink">
										Repair
									</Link>
									<Link to="javascript:void(0)" className="mobileMenuLink">
										New Offers
									</Link>
									<Link to="javascript:void(0)" className="mobileMenuLink">
										Our Stores
									</Link>
								</div>
								<div className="borders">
									<Link to="/profile" className="mobileMenuLink">
										Profile
									</Link>
									<Link to="/appointments" className="mobileMenuLink">
										Repair Appointments
									</Link>
									<Link to="/address" className="mobileMenuLink">
										Saved Address
									</Link>
								</div>
								<div className="borders">
									<Link to="javascript:void(0)" className="mobileMenuLink">
										Collaborate
									</Link>
									<Link to="javascript:void(0)" className="mobileMenuLink">
										Blog
									</Link>
								</div>
								<div className="borders">
									<Link to="faq.html" className="mobileMenuLink">
										FAQs
									</Link>
									<Link to="javascript:void(0)" className="mobileMenuLink">
										Feedback
									</Link>
								</div>
							</nav>
						</div>
					</div>
				</header>
			</React.Fragment>
		);
	}
}
