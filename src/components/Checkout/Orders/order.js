import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
// import apiCall from "../../axios";
export default class Order extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			cart: [],
			hasOrder: false,
			isVerified: false,
		};
	}
	static getDerivedStateFromProps(props, state) {
		return {
			hasOrder: true,
			cart: props.cartData,
		};
	}
	render() {
		return (
			<React.Fragment>
				<div className="userDetails">
					{this.state.cart.length !== 0 && this.state.hasOrder
						? this.state.cart.map((cart, i) => {
								return (
									<div className="orderBlock" key={i}>
										<div
											className="orderBody d-flex justify-content-start flex-wrap "
											key={i}
										>
											<div className="imgWrap">
												<img src={cart.img} alt="cart" />
											</div>
											<div
												style={{ paddingLeft: 30, paddingTop: 7 }}
												className="contentWrap"
											>
												<h3>{cart.brand}</h3>
												<p>
													<span>Mobile: </span>
													{cart.mobile}
												</p>
												<ul
													style={{
														paddingLeft: 12,
													}}
												>
													{cart.issue.length !== 0
														? cart.issue.map((issue, index) => {
																return (
																	<li key={index}>{`${issue.issue_name}`}</li>
																);
														  })
														: null}
												</ul>
											</div>
											{/* <div className="d-flex">
													<Link to="/repair" className="gradientText">
														Edit
													</Link>
													<Link to="#" className="delete">
														Delete
													</Link>
												</div> */}
											{/* </div> */}
										</div>
									</div>
								);
						  })
						: null}
				</div>
			</React.Fragment>
		);
	}
}

// {
// 	this.props.order.mobile;
// }
