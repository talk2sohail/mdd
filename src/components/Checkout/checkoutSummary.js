import React, { Component } from "react";

export default class CheckoutSummary extends Component {
	constructor(props) {
		super(props);
		this.state = {
			hasOrder: false,
			order: {},
			issues: [],
		};
	}

	static getDerivedStateFromProps(props, state) {
		return {
			hasOrder: true,
			order: props.order,
			issues: props.order.issue,
		};
	}

	render() {
		console.log(this.state);
		return (
			<React.Fragment>
				<div className="col-12 col-lg-4">
					<div className="priceSummary">
						<div className="priceHeader">
							<h3>Price Summary</h3>
						</div>
						<div className="priceBody">
							{this.state.hasOrder && this.state.issues
								? this.state.issues.map((issue, i) => {
										return (
											<p className="price borderB" key={i}>
												{this.state.order.brand} {issue.issue_name}
												<span className="float-right">
													Rs {issue.low} - Rs {issue.high}
												</span>
											</p>
										);
								  })
								: null}
							<p className="tax">
								Tax <span className="float-right">Rs 0</span>
							</p>
							<p className="tax">
								Pickup Charge <span className="float-right">Rs 0</span>
							</p>
							<div className="position-relative agreeTC">
								<input type="checkbox" defaultChecked id="agree" name="" />
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
						<a href="#" className="d-block text-center btnBook">
							BOOK NOW
						</a>
					</div>
				</div>
			</React.Fragment>
		);
	}
}
