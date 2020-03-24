import React, { Component } from "react";
import { Link } from "react-router-dom";
import AddDetails from "./AddressDetails/addDetails";
import Sidebar from "./Sidebar";
import Header from "../header";
import Footer from "../footer";

export default class Address extends Component {
	render() {
		return (
			<React.Fragment>
				<Header />
				<section className="profileWrapper">
					<div className="sectionWrapper">
						<div className="row justify-content-center">
							<Sidebar activeNumber="2" />
							<div className="col-lg-9 col-12">
								<div className="userWrapper">
									<div className="userHeader">
										<h2>Manage Address</h2>
									</div>
									<div className="userDetails">
										<Link
											className="addAddress d-block gradientText"
											to="/addAddress"
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="18"
												height={18}
												viewBox="0 0 18 18"
												fill="#56ccf2"
											>
												<path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z" />
											</svg>
											ADD NEW ADDRESS
										</Link>
										<AddDetails />
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<Footer />
			</React.Fragment>
		);
	}
}
