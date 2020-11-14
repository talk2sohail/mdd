import React, { PureComponent, Fragment } from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

import apiCall from "../../../axios";
export default class BookingDetails extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			loaded: false,
			error: "",
			details: {},
			receiving_add: {
				firstName: "",
				lastName: "",
				contact: "",
				address: [],
			},
			shopadd: {
				shop_name: "",
				contact: "",
				address: [],
			},
			mobiles: [],
		};
	}

	componentDidMount() {
		//on the top view when mounted
		window.scroll(0, 0);
		const { b_id } = this.props;
		const token = apiCall.getToken();
		const accessToken = `Bearer ${token}`;
		apiCall
			.post("/getbooking", { b_id }, accessToken)
			.then((response) => {
				console.log(response.data.booking);
				this.setState({
					loaded: true,
					details: response.data.booking,
					receiving_add: response.data.booking.receiving_add,
					shopadd: response.data.booking.shopadd,
					mobiles: response.data.booking.mobiles,
				});
			})
			.catch((err) => {
				if (!err.response) console.log("something went wrong");
				else {
					this.setState({
						loaded: true,
						error: err.response.data.msg,
					});
				}
			});
	}
	render() {
		return (
			<Fragment>
				<div className="col-lg-9 col-12">
					<div className="userWrapper">
						<div className="userHeader">
							<h2>Repair Details</h2>
							<a
								style={{ cursor: "pointer" }}
								onClick={() => this.props.getBack()}
							>
								Get Back
							</a>
						</div>
						{this.state.loaded ? (
							<div className="userDetails isRepairing">
								<div className="d-flex justify-content-between align-items-center flex-wrap">
									<h3>{`Order Number: #${this.state.details.booking_no}`}</h3>
									<h3>{`Order Time: ${this.state.details.booking_date} ${this.state.details.booking_time}`}</h3>
								</div>
								<div className="orderSummary mt-2 d-flex justify-content-between flex-wrap">
									{this.state.details.info.drop_at_shop ? (
										<div className="summaryBlock">
											<h3>Phone Dropped at:</h3>
											<p>
												<span>{this.state.shopadd.shop_name}</span>
											</p>
											<p>{this.state.shopadd.address[0].street} </p>
											<p>{this.state.shopadd.address[0].locality}</p>
											<p>{`${this.state.shopadd.address[0].city}, ${this.state.shopadd.address[0].state} ${this.state.shopadd.address[0].zipcode}`}</p>
											<p className="mt-2 mb-0">
												<span>Contact Number</span>:{" "}
												{this.state.shopadd.contact}
											</p>
										</div>
									) : null}
									{this.state.details.info.pick_up_at_home ? (
										<div className="summaryBlock">
											<h3>Phone Received from:</h3>
											<p>
												<span>
													{this.state.receiving_add.firstName} &nbsp;
													{this.state.receiving_add.lastName}
												</span>
											</p>
											<p>{this.state.receiving_add.street} </p>
											<p>{this.state.receiving_add.locality}</p>
											<p>{`${this.state.receiving_add.city}, ${this.state.receiving_add.state} ${this.state.receiving_add.zipcode}`}</p>
											<p className="mt-2 mb-0">
												<span>Contact Number</span>:{" "}
												{this.state.receiving_add.contact}
											</p>
										</div>
									) : null}
									{this.state.details.info.pick_up_from_shop ? (
										<div className="summaryBlock">
											<h3>Phone Delivery Address:</h3>
											<p>
												<span>{this.state.shopadd.shop_name}</span>
											</p>
											<p>{this.state.shopadd.address[0].street} </p>
											<p>{this.state.shopadd.address[0].locality}</p>
											<p>{`${this.state.shopadd.address[0].city}, ${this.state.shopadd.address[0].state} ${this.state.shopadd.address[0].zipcode}`}</p>
											<p className="mt-2 mb-0">
												<span>Contact Number</span>:{" "}
												{this.state.shopadd.contact}
											</p>
										</div>
									) : null}
									{this.state.details.info.delivery_at_home ? (
										<div className="summaryBlock">
											<>
												<h3>Phone Delivery Address:</h3>
												<p>
													<span>
														{this.state.details.delivery_add.firstName}
														&nbsp;
														{this.state.details.delivery_add.lastName}
													</span>
												</p>
												<p>{this.state.details.delivery_add.street}</p>
												<p>{this.state.details.delivery_add.locality}</p>
												<p>{`${this.state.details.delivery_add.city}, ${this.state.details.delivery_add.state} ${this.state.details.delivery_add.zipcode}`}</p>
												<p className="mt-2 mb-0">
													<span>Contact Number</span>: &nbsp;
													{this.state.details.delivery_add.contact}
												</p>
											</>
										</div>
									) : null}
									<div className="summaryBlock">
										<h3>Payment Method:</h3>
										<p>{this.state.details.method}</p>
										<a
											href="#"
											className="d-block gradientText d-flex align-items-center justify-content-start"
										>
											<img
												src="assets/images/icons/help.png"
												width="18"
												alt=""
												className="mr-2"
											/>
											Need Help
										</a>
										{/* this will come whnen admin changes the prices */}
										{/* <div style={{ paddingTop: 20 }} className="buttons">
											<a href="#">Pay Now</a>
										</div> */}
									</div>
								</div>
								<div className="orderBlock border-top-0">
									<div className="orderFoooter d-flex align-items-center justify-content-between">
										<p style={{ fontWeight: "bold" }}>
											<span>Shop Name</span>
											&nbsp;{this.state.shopadd.shop_name}
										</p>
										<p style={{ fontWeight: "bold" }}>
											<span>Contact Number</span>
											&nbsp;{this.state.shopadd.contact}
										</p>
									</div>
									{this.state.mobiles.length !== 0
										? this.state.mobiles.map((mobile, i) => {
												return (
													<div
														className="orderStatus d-flex justify-content-start flex-wrap mt-0"
														key={i} style={{border:0,borderTop:'1px solid #67718029'}}
													>
														<div className="imgWrap">
															<img src={mobile.img} alt="" />
														</div>
														<div
															style={{ paddingLeft: 30 }}
															className="contentWrap"
														>
															<h3>{mobile.brand}</h3>
															<p>
																<span>Mobile: </span> {mobile.mobile}
															</p>
															<ul style={{ paddingLeft: 13 }}>
																{mobile.issue.map((iss, index) => {
																	return (
																		<li key={index}>{`${iss.issue_name}`}</li>
																	);
																})}
															</ul>
														</div>
														<div className="pricing">
															<h3>Order Summary</h3>
															<ul
																style={{
																	justifyContent: "space-between",
																	listStyle: "none",
																	padding: 0,
																}}
															>
																{mobile.issue.map((iss, j) => {
																	return (
																		<li key={j}>
																			{iss.issue_name} :
																			<span
																				className="float-right"
																				style={{ paddingLeft: 2 }}
																			>{`Rs ${iss.low} - Rs ${iss.high}`}</span>
																		</li>
																	);
																})}
															</ul>
														</div>
													</div>
												);
										  })
										: null}
								</div>
								<div className="status">
									<ul>
										{/* <li
											className={
												this.state.details.status === -1 ? "completed" : "todo"
											}
										>
											<div className="circleOuter d-flex mx-auto position-relative align-items-center justify-content-center">
												<span></span>
											</div>
											<p>Under Review</p>
										</li> */}
										<li
											className={
												this.state.details.status >= 0 ? "completed" : "todo"
											}
										>
											<div className="circleOuter d-flex mx-auto position-relative align-items-center justify-content-center">
												<span></span>
											</div>
											<p>Under the Review </p>
										</li>
										<li
											className={
												this.state.details.status >= 1 ? "completed" : "todo"
											}
										>
											<div className="circleOuter d-flex mx-auto position-relative align-items-center justify-content-center">
												<span></span>
											</div>
											<p>Repair Started</p>
										</li>
										<li
											className={
												this.state.details.status >= 2 ? "completed" : "todo"
											}
										>
											<div className="circleOuter d-flex mx-auto position-relative align-items-center justify-content-center">
												<span></span>
											</div>
											<p>Repair Completed</p>
										</li>
										<li
											className={
												this.state.details.status === 3 ? "completed" : "todo"
											}
										>
											<div className="circleOuter d-flex mx-auto position-relative align-items-center justify-content-center">
												<span></span>
											</div>
											<p>Delivered</p>
										</li>
									</ul>
								</div>
							</div>
						) : (
							<Loader
								type="TailSpin"
								color="#00BFFF"
								height={100}
								width={100}
								timeout={5000}
								style={{ textAlign: "center", margin: "40px" }}
							/>
						)}
					</div>
				</div>
			</Fragment>
		);
	}
}
