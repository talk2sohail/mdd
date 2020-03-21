import React, { Component } from "react";

export default class IssueSelection extends Component {
	render() {
		return (
			<React.Fragment>
				<section className="repairSelection">
					<div className="sectionWrapper">
						<div className="row no-gutters align-items-center justify-content-between">
							<div className="col-4">
								<a
									className="text-center progressBooking active"
									href="javascript:void(0)"
								>
									Brand
									<span>(OnePlus)</span>
								</a>
							</div>
							<div className="col-4">
								<a
									className="text-center progressBooking active"
									href="javascript:void(0)"
								>
									Mobile
									<span>(OnePlus 6T)</span>
								</a>
							</div>
							<div className="col-4">
								<a
									className="text-center progressBooking"
									href="javascript:void(0)"
								>
									Issue
								</a>
							</div>
						</div>
						<div className="row no-gutters justify-content-start align-items-center selectOption mt-2">
							<div className="col-12 col-md-6">
								<h2>Select issue in your OnePlus 6T Device</h2>
							</div>
							<div className="col-12 col-md-6 text-right buttons">
								<a href="javascript:void(0)">Checkout (Rs 999)</a>
							</div>
						</div>
						<div className="row no-gutters justify-content-start align-items-center issueSelection selectOption">
							<div className="col-12 col-md-6 col-lg-4">
								<div className="branWrap ">
									<div className="iconWrap">
										<img src="assets/images/icons/broken-phone.png" alt="" />
									</div>
									<div className="contentWrap">
										<h4>Broken Screen</h4>
										<p>Lorem ipsum dolor, sit amet consectetur</p>
										<p className="price">
											<span>Rs 1999</span>
											Rs 999
										</p>
									</div>
									<a href="javascript:void(0)" className>
										<span className>+ Add</span>
										<span className="d-none">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width={18}
												height={18}
												viewBox="0 0 18 18"
												fill="#fff"
											>
												<path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z" />
											</svg>
											Remove
										</span>
									</a>
								</div>
							</div>
							<div className="col-12 col-md-6 col-lg-4">
								<div className="branWrap ">
									<div className="iconWrap">
										<img src="assets/images/icons/microphone.png" alt="" />
									</div>
									<div className="contentWrap">
										<h4>Microphone Repair</h4>
										<p>Lorem ipsum dolor, sit amet consectetur</p>
										<p className="price">
											<span>Rs 1999</span>
											Rs 999
										</p>
									</div>
									<a href="javascript:void(0)" className="remove">
										<span className>+ Add</span>
										<span className>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width={18}
												height={18}
												viewBox="0 0 18 18"
												fill="#fff"
											>
												<path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z" />
											</svg>
											Remove
										</span>
									</a>
								</div>
							</div>
						</div>
					</div>
				</section>
			</React.Fragment>
		);
	}
}