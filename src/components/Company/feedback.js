import React, { Component } from "react";
import Header from "../header";
import CollabrateBannr from "../collabrateBanner";
import Footer from "../footer";

export default class Feedback extends Component {
	render() {
		return (
			<React.Fragment>
				<Header />
				<section className="feedbackBanner">
					<div className="contentWrap">
						<div className="sectionWrapper">
							<div className="row align-items-center justify-content-center no-gutters">
								<div className="col-lg-7 mx-auto text-center">
									<h1>Are you facing any issues ?</h1>
									<p>
										Lorem ipsum dolor sit, amet consectetur adipisicing elit.
										Quasi aspernatur harum ut adipisci, earum soluta praesentium
										consequatur ea veritatis neque fuga.
									</p>
									<div className="scrollForMore">
										<div className="d-flex align-items-center justify-content-center contactDetailsWrap">
											<div className="detailsBlock">
												<div className="imgWrap">
													<img
														src="/assets/images/icons/gmail.svg"
														width="18"
														alt=""
													/>
												</div>
												<div className="content">support@mdds.com</div>
											</div>
											<div className="detailsBlock">
												<div className="imgWrap">
													<img
														src="/assets/images/icons/telephone.svg"
														width="18"
														alt=""
													/>
												</div>
												<div className="content">9831983198</div>
											</div>
											<div className="detailsBlock">
												<div className="imgWrap">
													<img
														src="/assets/images/icons/whatsapp.png"
														width="24"
														className="mr-1"
														alt=""
													/>
												</div>
												<div className="content">9831983198</div>
											</div>
										</div>
									</div>
									<img
										src="/assets/images/icons/contact_us.svg"
										width="550"
										className="img-fluid"
										alt=""
									/>
								</div>
							</div>
						</div>
					</div>
				</section>
				{/* <!-- form --> */}
				<section className="feedbackFormWrap">
					<div className="sectionWrapper">
						<div className="row no-gutters justify-content-center">
							<div className="col-12 col-lg-9 mx-auto">
								<form className="bg-white">
									<div className="row no-gutters">
										<div className="col-12 col-lg-6">
											<input type="text" placeholder="First Name" />
										</div>
										<div className="col-12 col-lg-6">
											<input
												type="text"
												placeholder="Last Name"
												className="ml-auto"
											/>
										</div>
									</div>
									<div className="row no-gutters">
										<div className="col-12 col-lg-6">
											<input type="email" placeholder="Email" />
										</div>
										<div className="col-12 col-lg-6">
											<input
												type="text"
												placeholder="Phone Number"
												className="ml-auto"
											/>
										</div>
									</div>
									<div className="row no-gutters">
										<div className="col-12">
											<input
												type="text"
												placeholder="Subject"
												className="w-100"
											/>
										</div>
									</div>
									<div className="row no-gutters">
										<div className="col-12">
											<textarea
												name=""
												id=""
												cols="30"
												rows="10"
												placeholder="Message"
											></textarea>
										</div>
									</div>
									<div className="row no-gutters">
										<div className="col-12">
											<input
												type="submit"
												value="Send Feedback"
												className="w-100 mb-0"
											/>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</section>
				<CollabrateBannr />
				<Footer />
			</React.Fragment>
		);
	}
}
