import React, { Component } from "react";
import { Link } from "react-router-dom";
import AddDetails from "./AddressDetails/addDetails";

export default class Address extends Component {
	render() {
		return (
			<React.Fragment>
				<section className="profileWrapper">
					<div className="sectionWrapper">
						<div className="row justify-content-center">
							<div className="col-lg-3 col-12 d-none d-lg-block">
								<div className="sideBarWrapper">
									<Link to="/profile" className="sideBarBlock ">
										<h3>My Profile</h3>
										<p>Your Name, Phone Number, Password, Gender,</p>
									</Link>
									<Link to="/address" className="sideBarBlock active">
										<h3>My Address</h3>
										<p>Add, Edit Addresses</p>
									</Link>
									<Link to="/appointments" className="sideBarBlock">
										<h3>My Repairs</h3>
										<p>Status of Repair Appointments, Past Repairs</p>
									</Link>
									<Link to="/logout" className="sideBarBlock">
										<h3>Logout</h3>
										<p>Logout of your account</p>
									</Link>
								</div>
							</div>
							<div className="col-lg-9 col-12">
								<div className="userWrapper">
									<div className="userHeader">
										<h2>Manage Address</h2>
										{/* <Link href="javascript:void(0)">Edit Info</Link> */}
									</div>
									<div className="userDetails">
										<Link
											className="addAddress d-block gradientText"
											to="/address"
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width={18}
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
			</React.Fragment>
		);
	}
}
