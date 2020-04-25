import React, { PureComponent } from "react";
import ForgotPassModal from "./ForgotPassword/forgotPassModal";
import { Link, withRouter } from "react-router-dom";
import ModalSignUp from "./modalSignUp";
import ModalSignIn from "./modalSignIn";
class Modal extends PureComponent {
	render() {
		return (
			<React.Fragment>
				<ForgotPassModal />
				<div
					className="modal fade"
					id="loginModalCenter"
					tabIndex="-1"
					role="dialog"
					aria-labelledby="loginModalCenterTitle"
					aria-hidden="true"
				>
					<div className="modal-dialog modal-dialog-centered" role="document">
						<div className="modal-content">
							<div className="modal-body" id="container">
								<ModalSignUp />
								<ModalSignIn />
								<div className="overlay-container">
									<button
										type="button"
										className="close"
										data-dismiss="modal"
										aria-label="Close"
									>
										<span aria-hidden="true">&times;</span>
									</button>
									<div className="overlay">
										<div className="overlay-panel overlay-left">
											<h3>Welcome Back!</h3>
											<p>
												To keep connected with us please login with your
												personal info
											</p>
											<a
												// to=""
												// href="javascript:void(0)"
												className="ghost gradientBtn"
												id="signIn"
											>
												Sign In
											</a>
										</div>
										<div className="overlay-panel overlay-right">
											<h3>Hello, Friend!</h3>
											<p>
												Enter your personal details and start journey with us
											</p>
											<a
												// href="javascript:void(0)"
												className="ghost gradientBtn"
												id="signUp"
											>
												Sign Up
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default withRouter(Modal);
