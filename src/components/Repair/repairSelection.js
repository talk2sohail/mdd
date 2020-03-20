import React, { Component } from "react";

export default class RepairSelection extends Component {
	render() {
		return (
			<React.Fragment>
				<section className="repairSelection">
					<div className="sectionWrapper">
						<div className="row no-gutters align-items-center justify-content-between">
							<div className="col-4">
								<a
									className="text-center progressBooking"
									href="javascript:void(0)"
								>
									Brand
								</a>
							</div>
							<div className="col-4">
								<a
									className="text-center progressBooking"
									href="javascript:void(0)"
								>
									Mobile
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
						<div className="row no-gutters justify-content-start align-items-center selectOption">
							<div className="col-12 col-md-6">
								<h2>Select Your Mobile Brand</h2>
							</div>
							<div className="col-12 col-md-6 text-right mobileLeft">
								<form action="#" className="searchBar">
									<input
										type="search"
										placeholder="Search Your Mobile Here"
										className="mt-0"
									/>
									<button type="submit">
										<img
											src="assets/images/icons/search.png"
											alt=""
											width={20}
										/>
									</button>
								</form>
							</div>
						</div>
						<div className="row no-gutters justify-content-start align-items-center selectOption"></div>
					</div>
				</section>
			</React.Fragment>
		);
	}
}
