import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import Footer from "./footer";
import Header from "./header";
import Modal from "./modal";

export default class Thankyou extends PureComponent {
	render() {
		return (
			<React.Fragment>
				<Header />
				<section className="profileWrapper">
					<div className="sectionWrapper">
						<div className="row">
							<div className="col-12">
								<div className="thankuWrapper">
									<img
										src="/assets/images/icons/completed.svg"
										className="img-fluid"
										alt="completed"
									/>
									<p>
										Thank You! For Completing Your Repair Appointment With Us
									</p>
									<div className="buttons">
										<Link to="/appointments">Track Status</Link>
										<Link to="/">Go Back to Home</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<Footer />
				<Modal />
			</React.Fragment>
		);
	}
}
