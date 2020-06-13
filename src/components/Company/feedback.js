import React, { Component } from "react";
import $ from "jquery";
import { store } from "react-notifications-component";

import apiCall from "../../axios";
import Header from "../header";
import CollabrateBannr from "../collabrateBanner";
import Modal from "../modal";
import Footer from "../footer";

const emailRegex = RegExp(
	/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);
const getInitialState = () => {
	return {
		first_name: "",
		last_name: "",
		email: "",
		contact: "",
		subject: "",
		message: "",
		//hanlding input from user elegantly
		wrongInputFromUser: "",
		isUserInputError: false,
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
		document.title = "FEEDBACK | Get your phone repair | MDDS";

		$("html, body").animate(
			{
				scrollTop: 0,
			},
			0
		);
	}
	handleChange = (e) => {
		const { name, value } = e.target;
		this.setState({
			isUserInputError: false,
			[name]: value,
		});
	};

	validate = () => {
		const errors = {
			isError: false,
			message: "",
		};
		for (let field of [
			"first_name",
			"last_name",
			"email",
			"contact",
			"subject",
			"message",
		]) {
			if (!this.state[field]) {
				errors.message = "*All fields are required.";
			}
		}

		if (!emailRegex.test(this.state.email)) {
			errors.message = "*Requires valid Email";
		}
		if (this.state.contact.length !== 10 || isNaN(+this.state.contact)) {
			errors.message = "*Requies valid Phone Number";
		}
		if (errors.message.length > 0) errors.isError = true;

		return errors;
	};

	handleSubmit = (e) => {
		e.preventDefault();
		const err = this.validate();
		if (err.isError) {
			this.setState({
				isUserInputError: true,
				wrongInputFromUser: err.message,
			});
		} else {
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
					const { success } = response.data;
					if (success) {
						store.addNotification({
							title: "Thank You.",
							message: "Thanks for the feedback.",
							type: "success",
							insert: "top",
							container: "top-right",
							dismiss: {
								duration: 500,
							},
						});

						this.props.history.push("/");
					}
				})
				.catch((error) => {
					if (!error.response) console.log("Something went wrong");
					else console.log(error.response.data.msg);
				});
		}
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
									<p style={{ color: "red" }}>
										{this.state.isUserInputError
											? this.state.wrongInputFromUser
											: null}
									</p>
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
