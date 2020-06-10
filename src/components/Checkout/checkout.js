import React, { PureComponent } from "react";
import { withRouter } from "react-router-dom";

import { store } from "react-notifications-component";
import apiCall from "../../axios";
import UserAddress from "./userAddress";
import Footer from "../footer";
import Modal from "../modal";

import Header from "../header";
import ShopAddress from "./shopAddress";
import AddressForm from "./addressForm";
import Order from "./Orders/order";

class Checkout extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			//receiving user address
			receiving_user_add: {},
			//deliverry user address
			delivery_user_add: {},
			//pickup and delivery info
			pick_up_at_home: true,
			delivery_at_home: true,
			drop_at_shop: false,
			pick_up_from_shop: false,
			//information on the screen
			_emailVerified: false,
			useraddress: [],
			shop_address: {},
			isFormOneLoaded: false,
			isFormTwoLoaded: false,
			add_1_index: 0,
			add_2_index: 0,

			//chceckoutSummary info
			argree_checkbox: false,
			hasOrder: false,
			cart_details: [],
			order: {},
			issues: [],
		};
		this.handleReceiveInfo = this.handleReceiveInfo.bind(this);
		this.handleDeliveryInfo = this.handleDeliveryInfo.bind(this);
		this.onBook = this.onBook.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange = () => {
		this.setState({
			argree_checkbox: !this.state.argree_checkbox,
		});
	};
	handleReceiveInfo = (query) => {
		if (query === "shop")
			this.setState({
				drop_at_shop: true,
				pick_up_at_home: false,
			});
		else if (query === "home") {
			this.setState({
				pick_up_at_home: true,
				drop_at_shop: false,
			});
		}
		// setTimeout(() => {
		// 	console.log(this.state);
		// }, 1200);
	};
	handleDeliveryInfo = (query) => {
		if (query === "shop")
			this.setState({
				pick_up_from_shop: true,
				delivery_at_home: false,
			});
		else if (query === "home") {
			this.setState({
				delivery_at_home: true,
				pick_up_from_shop: false,
			});
		}
	};
	componentDidMount() {
		//come to the top
		window.scroll(0, 0);
		//get the cart details from the backend
		const token = apiCall.getToken();
		const accessToken = `Bearer ${token}`;
		apiCall
			.get("/getcart", accessToken)
			.then((response) => {
				this.setState({
					cart_details: response.data.cart.carts,
				});
			})
			.catch((error) => {
				if (!error.response) {
					console.log("Something went Wrong");
				} else {
					console.log(error.response.data.msg);
				}
			});

		//get the user details and shop details from the api
		apiCall
			.get("/checkout", accessToken)
			.then((response) => {
				this.setState({
					_emailVerified: response.data.user.isVerified,
					useraddress: response.data.user.address,
					shop_address: response.data.shop,
					receiving_user_add: response.data.user.address[0],
					delivery_user_add: response.data.user.address[0],
				});
			})
			.catch((error) => {
				if (!error.response) {
					console.log("Something went Wrong");
				} else {
					console.log(error.response.data.msg);
				}
			});
		// get the charges from the api call here
	}
	formOneHandler = () => {
		this.setState({
			isFormOneLoaded: !this.state.isFormOneLoaded,
			// cssColor: this.state.isLoaded ? "selected" : "",
		});
	};
	formTwoHandler = () => {
		this.setState({
			isFormTwoLoaded: !this.state.isFormTwoLoaded,
			// cssColor: this.state.isLoaded ? "selected" : "",
		});
	};
	onAddOneSelect = (address, i) => {
		this.setState({
			add_1_index: i,
			receiving_user_add: address,
		});
		// setTimeout(() => {
		// 	console.log(this.state);
		// }, 1000);
	};
	onAddTwoSelect = (address, i) => {
		console.log(this.state);
		this.setState({
			add_2_index: i,
			delivery_user_add: address,
		});

		// setTimeout(() => {
		// 	console.log(this.state);
		// }, 1000);
	};

	onBook = (e) => {
		e.preventDefault();
		if (!this.state.argree_checkbox) {
			store.addNotification({
				title: "Warning!",
				message: "Please check the Terms & Conditions",
				type: "warning",
				insert: "top",
				container: "top-right",
				dismiss: {
					duration: 2000,
				},
			});
			return;
		}
		if (!this.state._emailVerified) {
			store.addNotification({
				title: "Error!",
				message: "Your Email is not verified yet.",
				type: "danger",
				insert: "top",
				container: "top-right",
				dismiss: {
					duration: 2000,
					// onScreen: true,
				},
			});
			return;
		}
		//check the address is not empty
		console.log(this.state.receiving_user_add);
		if (
			(this.state.delivery_at_home &&
				this.state.delivery_user_add === undefined) ||
			(this.state.pick_up_at_home &&
				this.state.receiving_user_add === undefined)
		) {
			store.addNotification({
				title: "Address is Empty",
				message: "Add the address first to book.",
				type: "warning",
				insert: "top",
				container: "top-right",
				dismiss: {
					duration: 1500,
				},
			});
			return;
		}

		const booking = {};
		booking.receiving_add = this.state.pick_up_at_home
			? this.state.receiving_user_add
			: null;
		booking.delivery_add = this.state.delivery_at_home
			? this.state.delivery_user_add
			: null;
		booking.shopadd = this.state.shop_address;
		booking.mobiles = this.state.cart_details;
		booking.method = "Paid in cash";
		booking.tax = 25;
		booking.pickup_charge = this.state.pick_up_at_home ? 125 : 0;
		booking.info = {
			pick_up_at_home: this.state.pick_up_at_home,
			delivery_at_home: this.state.delivery_at_home,
			drop_at_shop: this.state.drop_at_shop,
			pick_up_from_shop: this.state.pick_up_from_shop,
		};
		booking.status = 0;
		booking.booking_status = 0;
		booking.isCancelled = false;
		console.log(booking);
		//call the api to save the data in the db and redirect to the appointments
		const token = apiCall.getToken();
		const accessToken = `Bearer ${token}`;
		apiCall
			.post("/placeorder", booking, accessToken)
			.then((response) => {
				console.log(response.data);
				// this.props.history.push("/appointments");
				if (response.data.msg) {
					store.addNotification({
						title: "Congratulation!",
						message: "You Repair has been Submitted.",
						type: "success",
						insert: "top",
						container: "top-right",
						dismiss: {
							duration: 1500,
						},
					});
					const cart_id = this.state.cart_details._id;
					apiCall
						.post("/emptycart", cart_id, accessToken)
						.then((response) => {
							localStorage.removeItem("cart-item");
							if (response.data.msg) console.log("cart items deleted");
							this.props.history.push("/thankyou");
						})
						.catch((err) => {
							if (!err.response) console.log("Something went wrong");
						});
				}
			})
			.catch((error) => {
				if (!error.response) {
					console.log("Something went wrong");
				} else {
					if (error.response.data.msg) {
						store.addNotification({
							title: "Booking Error!",
							message: "You Repair Could not Submitted, due to technical Error",
							type: "danger",
							insert: "top",
							container: "top-left",
							dismiss: {
								duration: 1200,
							},
						});
					}
				}
			});
	};
	componentWillUpdate() {
		console.log(this.state);
	}
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
									<Order cartData={this.state.cart_details} />
									{/* <Carts order={this.state.order_details} /> */}
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
														onClick={() => this.handleReceiveInfo("home")}
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
														onClick={() => this.handleReceiveInfo("shop")}
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
													{/* add address button */}
													<a
														style={{ cursor: "pointer" }}
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
													<UserAddress
														index={this.state.add_1_index}
														handleSelectAddress={this.onAddOneSelect.bind(this)}
														userDetails={this.state.useraddress}
													/>
													{this.state.isFormOneLoaded ? <AddressForm /> : null}
												</div>
												<div
													className="tab-pane fade"
													id="profile"
													role="tabpanel"
													aria-labelledby="profile-tab"
												>
													<ShopAddress />
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
														onClick={() => this.handleDeliveryInfo("home")}
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
														onClick={() => this.handleDeliveryInfo("shop")}
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
														style={{ cursor: "pointer" }}
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
													<UserAddress
														index={this.state.add_2_index}
														handleSelectAddress={this.onAddTwoSelect.bind(this)}
														userDetails={this.state.useraddress}
													/>
													{this.state.isFormTwoLoaded ? <AddressForm /> : null}
												</div>
												<div
													className="tab-pane fade"
													id="pickshop"
													role="tabpanel"
													aria-labelledby="pickshop-tab"
												>
													<ShopAddress />
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							{/* <!-- checkoutSummary --> */}
							{this.state.cart_details.length !== 0 ? (
								<div className="col-12 col-lg-4">
									<div className="priceSummary">
										<div className="priceHeader">
											<h3>Price Summary</h3>
										</div>
										<div className="priceBody">
											{this.state.cart_details.map((cart, i) => {
												return (
													<span
														className="price priceHeader"
														style={{ fontSize: 14 }}
														key={i}
													>
														<span
															style={{
																fontWeight: "bold",
																display: "block",
																paddingBottom: 11,
															}}
														>
															{cart.brand} {cart.mobile}
														</span>
														{cart.issue.map((iss, j) => {
															return (
																<ul
																	style={{
																		paddingLeft: 0,
																		display: "flex",
																		justifyContent: "space-between",
																	}}
																	key={j}
																>
																	<li style={{ listStyle: "none" }}>
																		{iss.issue_name}
																	</li>
																	<span
																		style={{ paddingLeft: 85 }}
																		className="float-right"
																	>
																		Rs {iss.low} - Rs {iss.high}
																	</span>
																</ul>
															);
														})}
													</span>
												);
											})}
											<p className="tax">
												Tax <span className="float-right">Rs 25</span>
											</p>
											{this.state.pick_up_at_home ? (
												<p className="tax">
													Pickup Charge
													<span className="float-right">Rs 120</span>
												</p>
											) : null}
											<div className="position-relative agreeTC">
												<input
													type="checkbox"
													onChange={this.handleChange}
													id="agree"
												/>
												<label htmlFor="agree">
													<svg
														className="tick"
														width="22"
														height="22"
														viewBox="0 0 24 24"
														fill="none"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path d="M5 13L6 14L7 15L8 16L9 17L11 15L12 14L13 13L14 12L15 11L16 10L17 9L18 8" />
													</svg>
													I agree to the
													<a href="#"> Terms & Conditions</a>
												</label>
											</div>
										</div>
										<a
											href="#"
											onClick={this.onBook}
											className="d-block text-center btnBook"
										>
											BOOK NOW
										</a>
									</div>
								</div>
							) : null}
						</div>
					</div>
				</section>
				<Footer />
				<Modal />
			</React.Fragment>
		);
	}
}
export default withRouter(Checkout);
