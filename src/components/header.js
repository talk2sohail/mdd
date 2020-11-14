import React, { PureComponent } from "react";
import { Link, withRouter, useLocation } from "react-router-dom";
import HeadBar from "./headBar";
import Auth from "../Auth";
import apiCall from "../axios";
import { MobileMenuModal } from "./mobileMenuModal";
class Header extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			hasOrder: false,
			order: {},
			problems: "",
			totalPrice: 0,
		};

		this.handleLogout = this.handleLogout.bind(this);
	}
	static getDerivedStateFromProps(props, state) {
		//LOGGED IN SCENARIO
		//user wont get the data first time  so componentWillMount will  call api
		// and save the data to LS, further if user leave the site without loggout it will be there
		// and if user did logout then serve only one api call to get the data

		//get the cart_edit from the LS
		if (localStorage.getItem("cart-item")) {
			const order_info = localStorage.getItem("cart-item");
			return {
				hasOrder: true,
				order: JSON.parse(order_info)[0],
			};
		}
		return null;
	}

	updateCartData = () => {
		//update the data for the header icon checkout
		if (this.state.order !== undefined) {
			if (this.state.order.issue !== undefined) {
				const array = [...this.state.order.issue];
				let total = 0;
				array.forEach((issue) => {
					total += issue.high;
				});
				const problmes_array = array.map((issue) => issue.issue_name);
				this.setState({
					totalPrice: total,
					problems: problmes_array.join(),
				});
			}
		}
	};
	componentDidMount() {
		window.scroll(0, 0);

		//save this api call if the user is in the /cart page
		if (this.props.location.pathname === "/cart") {
			this.updateCartData();
			return;
		}
		//if there is user data in LS
		if (this.state.hasOrder) {
			this.updateCartData();
		}
		//get the data for icon when the user just logged in
		if (Auth.getAuth() && this.state.hasOrder === false) {
			const token = apiCall.getToken();
			const accessToken = `Bearer ${token}`;
			apiCall
				.get("/getcart", accessToken)
				.then((response) => {
					//save the data in LS
					localStorage.setItem(
						"cart-item",
						JSON.stringify(response.data.cart.carts)
					);
					this.setState({
						hasOrder: true,
					});
					this.updateCartData();
				})
				.catch((err) => {
					if (!err.response) console.log("Something went wrong.");
					else {
						const { msg, success } = err.response.data;
						if (success) {
							//empty cart
							this.setState({
								hasOrder: false,
								order: {},
							});
						} else if (!success) {
							//no cart dta
							this.setState({
								hasOrder: false,
								order: {},
							});
						}
					}
				});
		}
	}
	handleLogout = () => {
		Auth.logout();
		let location = this.props.location.pathname;
		if (location === "/") {
			window.location.reload();
		} else {
			this.props.history.push("/");
		}
	};

	render() {
		return (
			<React.Fragment>
				<HeadBar />
				<header className="siteHeader">
					<div className="sectionWrapper">
						<div className="row align-items-center justify-content-between no-gutters">
							{/* <!-- hamburger --> */}
							<div className="col-4 d-block d-lg-none">
								<a className="mobileMenuTrigger">
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
									<Link to="/">
										<img
											src="/assets/images/logo.png"
											width="120"
											alt="imageWrapper"
										/>
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
										<Link to="#">New Offers</Link>
									</div>
									<div className="menuItem">
										<Link to="#;">Our Stores</Link>
									</div>
								</div>
								<div className="iconsWrapper">
									<div className="iconsItem d-inline-block d-md-block d-lg-none">
										<Link to="/" className="active">
											<i className="glyph-icon flaticon-home-1"></i>
										</Link>
									</div>
									<div className="iconsItem d-inline-block d-md-block d-lg-none">
										<Link to="/repair">
											<i className="glyph-icon flaticon-settings"></i>
										</Link>
									</div>
									<div className="iconsItem itemHover  d-lg-inline-block d-md-block ">
										<Link
											data-toggle={Auth.getAuth() ? "" : "modal"}
											to={Auth.getAuth() ? "/profile" : "#"}
											data-target="#loginModalCenter"
											className="logInBtn"
										>
											<i className="glyph-icon flaticon-user"></i>
										</Link>
										{Auth.getAuth() ? (
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
													<Link to="#" onClick={this.handleLogout}>
														Log Out
													</Link>
												</li>
											</ul>
										) : null}
									</div>
									<div className="iconsItem d-none d-lg-inline-block">
										<Link to="/faq">
											<i className="glyph-icon flaticon-headphones"></i>
										</Link>
									</div>
									<div className="iconsItem  d-lg-inline-block d-md-block hasItems">
										<Link to="/cart">
											<i className="glyph-icon flaticon-note"></i>
											<div className="circleWrapper">
												<div className="circle"></div>
											</div>
										</Link>
										{Auth.getAuth() &&
										this.state.hasOrder &&
										this.state.order !== undefined ? (
											<ul className="subMenu mb-0">
												<li>
													<Link
														to="/cart"
														className="d-flex justify-content-center product"
													>
														<div className="imgWrap">
															<img
																src={this.state.order.img}
																height="60"
																alt="imageWrapperorder"
															/>
														</div>
														<div className="content ml-3">
															<h3 style={{marginBottom:'5px'}}>{this.state.order.brand}</h3>
															<p style={{fontSize:'10px',marginBottom:'0px'}}>{this.state.order.mobile}</p>
															<p style={{fontSize:'12px'}}>{this.state.problems}</p>
															{/*<p>
																Total Price:&nbsp;
																<span>{this.state.totalPrice}</span>
															</p>*/}
														</div>
													</Link>
												</li>
											</ul>
										) : (
											<ul className="subMenu mb-0">
												<li>
													<a className="d-flex justify-content-center product">
														<div className="content ml-0">
															<h3 className="mb-0">No Item in your Cart</h3>
														</div>
													</a>
												</li>
											</ul>
										)}
									</div>
								</div>
							</div>
							{/* <!-- whatsapp --> */}
							<div className="col-4">
								<div className="whatsappWrapper">
									<Link
										to="https://wa.me/7278885292?text=I'm%20interested%20in%20your%20car%20for%20sale"
										target="_blank"
									>
										<img
											src="/assets/images/icons/whatsapp.png"
											alt="imageWrapper"
										/>
									</Link>
									<span className="pulse-ring"></span>
								</div>
							</div>
						</div>
					</div>
					{/* Auth modal */}
					{/* <Modal /> */}

					{/* mobile menu modal */}
					<MobileMenuModal/>
				</header>
			</React.Fragment>
		);
	}
}

export default withRouter(Header);
