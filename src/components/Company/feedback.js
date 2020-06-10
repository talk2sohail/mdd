import React, { Component } from "react";
import apiCall from "../../axios";
import Header from "../header";
import CollabrateBannr from "../collabrateBanner";
import Modal from "../modal";
import Footer from "../footer";
import validate from "./formValidation";

const getInitialState = () => {
	return {
		first_name: "",
		last_name: "",
		email: "",
		contact: "",
		subject: "",
		message: "",
		formError: {
			firstNameError: "",
			lastNameError: "",
			emailError: "",
			contactError: "",
			subjectError: "",
			messageError: "",
		},
	};
};

export default class Feedback extends Component {
	constructor(props) {
		super(props);
		this.state = getInitialState();
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	componentDidMount() {
		window.scroll(0, 0);
	}
	handleChange = (e) => {
		const { name, value } = e.target;
		this.setState({
			[name]: value,
		});
	};

	handleSubmit = (e) => {
		console.log(this.state);
		e.preventDefault();

		const err = validate({ ...this.state });
		console.log(err);
		if (err.isError) {
			this.setState({
				formError: err.errors,
			});
			return;
		}
		this.setState((state) => {
			return getInitialState();
		});
		const {
			first_name,
			last_name,
			email,
			contact,
			subject,
			message,
		} = this.state;

		apiCall
			.post("/feedback", {
				first_name,
				last_name,
				email,
				contact,
				subject,
				message,
			})
			.then((response) => {
				// console.log(response.data);
				const { msg, success } = response.data;
				if (success && msg) {
					console.log(msg);
					this.props.history.push("/");
				}
			})
			.catch((error) => {
				console.log(error.response.data);
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
														alt="imageWrapper"
													/>
												</div>
												<div className="content">support@mdds.com</div>
											</div>
											<div className="detailsBlock">
												<div className="imgWrap">
													<img
														src="/assets/images/icons/telephone.svg"
														width="18"
														alt="imageWrapper"
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
														alt="imageWrapper"
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
										alt="imageWrapper"
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
											<p
												style={{
													color: "red",
													fontSize: 12,
												}}
											>
												{this.state.formError.firstNameError}
											</p>
											<input
												type="text"
												name="first_name"
												value={this.state.first_name}
												onChange={this.handleChange}
												placeholder="First Name"
											/>
										</div>
										<div className="col-12 col-lg-6">
											<p
												style={{
													color: "red",
													fontSize: 12,
												}}
											>
												{this.state.formError.lastNameError}
											</p>
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
											<p
												style={{
													color: "red",
													fontSize: 12,
												}}
											>
												{this.state.formError.emailError}
											</p>
											<input
												type="email"
												name="email"
												value={this.state.email}
												onChange={this.handleChange}
												placeholder="Email"
											/>
										</div>
										<div className="col-12 col-lg-6">
											<p
												style={{
													color: "red",
													fontSize: 12,
												}}
											>
												{this.state.formError.contactError}
											</p>
											<input
												name="contact"
												value={this.state.contact}
												onChange={this.handleChange}
												type="text"
												placeholder="Phone Number"
												className="ml-auto"
											/>
										</div>
									</div>
									<div className="row no-gutters">
										<div className="col-12">
											<p
												style={{
													color: "red",
													fontSize: 12,
												}}
											>
												{this.state.formError.subjectError}
											</p>
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
											<p
												style={{
													color: "red",
													fontSize: 12,
												}}
											>
												{this.state.formError.messageError}
											</p>
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
												type="submit"
												// value="Send Feedback"
												value="Submit"
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
				<Modal />
			</React.Fragment>
		);
	}
}
