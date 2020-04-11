import React, { PureComponent } from "react";
import ForgotPassModal from "./forgotPassModal";
import { Link } from "react-router-dom";
export default class Modal extends PureComponent {
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
								<div className="form-container sign-up-container">
									<form action="#">
										<h3>Create Account</h3>
										<p>
											Lorem ipsum dolor sit amet consectetur adipisicing elit.
										</p>
										<input type="text" placeholder="Name" />
										<input type="email" placeholder="Email" />
										<input type="password" placeholder="Password" />
										<input
											type="text"
											placeholder="Phone Number"
											pattern="[1-9]{1}[0-9]{9}"
											maxLength="10"
										/>

										<input
											type="submit"
											value="sign up"
											className="gradientBtn"
										/>
										<p className="login-info-text">- OR -</p>
										<Link to="" className="gLogin">
											<img src="/assets/images/icons/google.png" alt="" />
											&nbsp;&nbsp;sign in using gmail
										</Link>
									</form>
								</div>
								<div className="form-container sign-in-container">
									<form action="#">
										<h3>Sign in</h3>
										<p>
											Lorem ipsum dolor sit amet consectetur adipisicing elit.
										</p>
										<input type="email" placeholder="Email" />
										<input type="password" placeholder="Password" />
										<Link
											// href="javascript:void(0)"
											to=""
											data-target="#forgotPass"
											className="fogotPassword"
											data-toggle="modal"
											data-dismiss="modal"
										>
											Forgot your password?
										</Link>

										<input
											type="submit"
											value="sign in"
											className="gradientBtn"
										/>
										<p className="login-info-text">- OR -</p>
										<Link to="" className="gLogin">
											<img src="/assets/images/icons/google.png" alt="" />
											&nbsp;&nbsp;sign in using gmail
										</Link>
									</form>
								</div>
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
											<Link
												to=""
												// href="javascript:void(0)"
												className="ghost gradientBtn"
												id="signIn"
											>
												Sign In
											</Link>
										</div>
										<div className="overlay-panel overlay-right">
											<h3>Hello, Friend!</h3>
											<p>
												Enter your personal details and start journey with us
											</p>
											<Link
												to=""
												// href="javascript:void(0)"
												className="ghost gradientBtn"
												id="signUp"
											>
												Sign Up
											</Link>
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
