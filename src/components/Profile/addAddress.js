import React, { PureComponent } from "react";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";
import Header from "../header";
import Footer from "../footer";
export default class AddAddress extends PureComponent {
	render() {
		return (
			<React.Fragment>
				<Header />
				<section className="profileWrapper">
					<div className="sectionWrapper">
						<div className="row justify-content-center">
							<Sidebar activeNumber="2" />
							<div className="col-lg-9 col-12">
								<div className="userWrapper phoneFixed ">
									<div className="userHeader justify-content-start">
										<Link to="/address" className="d-block d-lg-none">
											<img
												src="/assets/images/icons/lessthan.png"
												width="22"
												className="mr-2"
											/>
										</Link>
										<h2>Add Address</h2>
										{/* <!-- <Link href="javascript:void(0)">Edit Info</a> --> */}
									</div>
									<div className="userDetails addressChange">
										<form>
											<div className="formGroup no-gutters align-items-center row justify-content-between">
												<div className="col-lg-6">
													<input
														type="text"
														className="editProfileDetails"
														value=""
														placeholder="First Name"
													/>
												</div>
												<div className="col-lg-6">
													<input
														type="text"
														className="editProfileDetails"
														value=""
														placeholder="Last Name"
													/>
												</div>
											</div>
											<div className="formGroup no-gutters align-items-center row justify-content-between">
												<div className="col-lg-6">
													<input
														type="text"
														className="editProfileDetails"
														value=""
														placeholder="Pincode"
														// pattern="[0-9]{1}[0-9]{9}"
														// maxLength="4"
													/>
												</div>
												<div className="col-lg-6">
													<input
														type="text"
														className="editProfileDetails"
														value=""
														placeholder="Locality"
													/>
												</div>
											</div>
											<div className="formGroup no-gutters align-items-center row justify-content-start">
												<div className="col-12">
													<textarea
														name=""
														id=""
														cols="30"
														rows="4"
														className="mb-0"
														placeholder="Address (Area & Street)"
													></textarea>
												</div>
											</div>
											<div className="formGroup no-gutters align-items-center row  justify-content-between">
												<div className="col-lg-6">
													<input
														type="text"
														className="editProfileDetails"
														value=""
														// pattern="[0-9]{1}[0-9]{9}"
														// maxLength="10"
														placeholder="Phone Number"
													/>
												</div>
												<div className="col-lg-6">
													<input
														type="email"
														className="editProfileDetails"
														value=""
														placeholder="Email Address"
													/>
												</div>
											</div>
											<div className="formGroup no-gutters align-items-center row justify-content-between">
												<div className="col-12">
													<input
														type="submit"
														name=""
														className=""
														id=""
														value="Save Changes"
													/>
												</div>
											</div>
										</form>
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
