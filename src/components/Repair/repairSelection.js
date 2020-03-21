import React, { Component } from "react";
import { Route, Link, Switch, withRouter } from "react-router-dom";
import search from "../../assets/images/icons/search.png";
import BrandsSelection from "./brandsSelection";
import MobileSelection from "./mobileSelection";

class RepairSelection extends Component {
	render() {
		const { match } = this.props;
		return (
			<React.Fragment>
				<section className="repairSelection">
					<div className="sectionWrapper">
						<div className="row no-gutters align-items-center justify-content-between">
							<div className="col-4">
								<Link
									className="text-center progressBooking"
									to={`${match.url}/brands`}
								>
									Brand
								</Link>
							</div>
							<div className="col-4">
								<Link
									className="text-center progressBooking"
									to={`${match.url}/mobiles`}
								>
									Mobile
								</Link>
							</div>
							<div className="col-4">
								<Link
									className="text-center progressBooking"
									to={`${match.url}/issue`}
								>
									Issue
								</Link>
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
										<img src={search} alt="" width={20} />
									</button>
								</form>
							</div>
						</div>
						{/* <Route exact path={`/repair/brands`} component={BrandsSelection} /> */}
					</div>
				</section>
			</React.Fragment>
		);
	}
}

export default withRouter(RepairSelection);
