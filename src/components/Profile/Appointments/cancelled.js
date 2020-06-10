import React, { PureComponent, Fragment } from "react";
import { Link } from "react-router-dom";

export default class Cancelled extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			op: [],
		};
	}
	static getDerivedStateFromProps(props, state) {
		return {
			op: props.order,
		};
	}

	render() {
		return (
			<Fragment>
				{this.state.op.length === 0 ? (
					<div className="emptyBlock">
						<img
							src="assets/images/icons/no_data.svg"
							className="img-fluid"
							alt=""
						/>
						<p>No Repair Appointments</p>
					</div>
				) : (
					this.state.op.map((order, i) => {
						return (
							<div className="orderBlock" key={i}>
								<div className="orderHeader d-flex align-items-center justify-content-between">
									<span className="orderStatus cancelled">Cancelled</span>
									<p className="d-none d-lg-block">
										<span>Order Time</span>
										&nbsp;
										{`${order.booking_date} ${order.booking_time}`}
									</p>
									<p className="d-none d-lg-block">
										<span>Order Number</span>
										&nbsp;{`${order.booking_no}`}
									</p>
									<div>
										<a
											style={{ cursor: "pointer" }}
											onClick={() => this.props.tabHandler(`${order._id}`)}
											className="gradientText"
										>
											Order Details
										</a>
									</div>
								</div>
								{order.mobiles.length !== 0 ? (
									order.mobiles.map((mob, j) => {
										return (
											<div
												className="orderBody d-flex justify-content-start flex-wrap "
												key={j}
											>
												<div className="imgWrap">
													<img src={mob.img} alt="mobile" />
												</div>
												<div
													style={{ paddingLeft: 30 }}
													className="contentWrap"
												>
													<h3>{mob.brand}</h3>
													<p>
														<span>Mobile: </span> {mob.mobile}
													</p>
													<ul style={{ paddingLeft: 13 }}>
														{mob.issue.map((iss, index) => {
															return <li key={index}>{`${iss.issue_name}`}</li>;
														})}
													</ul>
													<p className="price">Rs {order.price}</p>
												</div>
												<div className="contentWrapTwo">
													<h3>
														<span className="cancelled" />
														&nbsp;Repair cancelled
													</h3>
												</div>
											</div>
										);
									})
								) : (
									<div className="emptyBlock">
										<img
											src="assets/images/icons/no_data.svg"
											className="img-fluid"
											alt=""
										/>
										<p>No Repair Appointments</p>
									</div>
								)}
								<div className="orderFoooter d-flex align-items-center justify-content-between">
									<p>
										<span>Shop Name</span>
										&nbsp;
										<strong>{order.shopadd.shop_name}</strong>
									</p>
									<p>
										<span>Contact Number</span>
										&nbsp;
										<strong style={{ fontSize: 14 }}>
											{order.shopadd.contact}
										</strong>
									</p>
								</div>
							</div>
						);
					})
				)}
			</Fragment>
		);
	}
}
