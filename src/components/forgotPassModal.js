import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class ForgotPassModal extends Component {
	render() {
		return (
			<React.Fragment>
				<div
					className="modal fade"
					id="forgotPass"
					tabIndex="-1"
					role="dialog"
					aria-labelledby="forgotPassswordTitle"
					aria-hidden="true"
				>
					<div className="modal-dialog modal-dialog-centered" role="document">
						<div className="modal-content">
							<div className="modal-body">
								<button
									type="button"
									className="close"
									data-dismiss="modal"
									aria-label="Close"
								>
									<span aria-hidden="true" className="font-weight-light">
										&times;
									</span>
								</button>
								<form action="#">
									<h3>Forgot Password ?</h3>
									<p className="mb-3">We will email you a link to reset it.</p>
									<input type="email" placeholder="Email" />
									<input type="submit" value="send" className="gradientBtn" />
								</form>
								<p className="font-weight-light">
									Just remembered ?
									<Link
										className="gradientText"
										to=""
										// href="javascript:void(0)"
										data-target="#loginModalCenter"
										data-toggle="modal"
										data-dismiss="modal"
									>
										&nbsp;&nbsp;Log in
									</Link>
									&nbsp;&nbsp;Instead
								</p>
								<p className="mb-0 font-weight-light">
									Don’t have an account ? Please
									<Link
										className="gradientText"
										to=""
										// href="javascript:void(0)"
										data-target="#loginModalCenter"
										data-toggle="modal"
										data-dismiss="modal"
									>
										&nbsp;&nbsp;Sign up
									</Link>
									&nbsp;&nbsp;for exciting offers
								</p>
							</div>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}
