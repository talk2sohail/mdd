import React, { Component } from "react";
import apiCall from "../../axios";
import Header from "../header";
import CollabrateBannr from "../collabrateBanner";
import Footer from "../footer";

export default class Feedback extends Component {
	constructor(props) {
		super(props);
		this.state = {
			first_name: "",
			last_name: "",
			email: "",
			ph_no: "",
			subject: "",
			message: "",
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange = (e) => {
		const target = e.target;
		const name = target.name;

		this.setState({
			[name]: target.value,
		});
	};

	handleSubmit = (e) => {
		console.log(this.state);
		e.preventDefault();
		const feedbacks = { ...this.state };
		const user_details = {};
		const feedback = {};
		user_details.first_name = feedbacks.first_name;
		user_details.last_name = feedbacks.last_name;
		user_details.email = feedbacks.email;
		user_details.ph_no = feedbacks.ph_no;
		feedback.subject = feedbacks.subject;
		feedback.message = feedbacks.message;
		apiCall
			.post("/feedback", { user_details, feedback })
			.then((response) => {
				console.log(response);
			})
			.catch((error) => {
				console.log(error);
			});
	};

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
								<form className="bg-white" onSubmit={this.handleSubmit}>
									<div className="row no-gutters">
										<div className="col-12 col-lg-6">
											<input
												type="text"
												name="first_name"
												value={this.state.first_name}
												onChange={this.handleChange}
												placeholder="First Name"
											/>
										</div>
										<div className="col-12 col-lg-6">
											<input
												name="last_name"
												value={this.state.last_name}
												onChange={this.handleChange}
												type="text"
												placeholder="Last Name"
												className="ml-auto"
											/>
										</div>
									</div>
									<div className="row no-gutters">
										<div className="col-12 col-lg-6">
											<input
												type="email"
												name="email"
												value={this.state.email}
												onChange={this.handleChange}
												placeholder="Email"
											/>
										</div>
										<div className="col-12 col-lg-6">
											<input
												name="ph_no"
												value={this.state.ph_no}
												onChange={this.handleChange}
												type="text"
												placeholder="Phone Number"
												className="ml-auto"
											/>
										</div>
									</div>
									<div className="row no-gutters">
										<div className="col-12">
											<input
												name="subject"
												value={this.state.subject}
												onChange={this.handleChange}
												type="text"
												placeholder="Subject"
												className="w-100"
											/>
										</div>
									</div>
									<div className="row no-gutters">
										<div className="col-12">
											<textarea
												name="message"
												value={this.state.message}
												onChange={this.handleChange}
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
												// onClick={this.handleSubmit}
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
