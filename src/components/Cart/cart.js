import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
export default class Cart extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			cart: [],
		};
	}

	static getDerivedStateFromProps(props, state) {
		return {
			cart: props.cartData,
		};
	}
	componentDidUpdate() {
		console.log(this.state);
	}

	render() {
		return (
			<React.Fragment>
				<div className="userDetails">
					{this.state.cart.length !== 0
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
												style={{ paddingLeft: 36, paddingTop: 7 }}
												className="contentWrap"
											>
												<h3>{cart.brand}</h3>
												<p>
													<span>Mobile: </span>
													{cart.mobile}
												</p>
												<ul style={{ paddingLeft: 15 }}>
													{cart.issue.length !== 0
														? cart.issue.map((issue, index) => {
																return (
																	<li key={index}>{`${issue.issue_name}`}</li>
																);
														  })
														: null}
												</ul>
												{/* <div>
													<span>
														{`Issues : `}
														
													</span>
												</div> */}
												<div className="d-flex" style={{ marginTop: 7 }}>
													{/* <Link
														to="/repair"
														onClick={() => this.props.edit(cart)}
														className="siteBtn"
													>
														Edit
													</Link> */}
													<Link
														to="/cart"
														onClick={() => this.props.delete(cart)}
														className="removeBtn"
													>
														Remove
													</Link>
												</div>
												{/* <div className="d-flex">
													<Link to="/repair" className="gradientText">
														Edit
													</Link>
													<Link to="#" className="delete">
														Delete
													</Link>
												</div> */}
											</div>
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
