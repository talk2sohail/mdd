import React, { Component } from "react";

export default class Modal extends Component {
	render() {
		return (
			<React.Fragment>
				<div
					class="modal fade"
					id="forgotPass"
					tabindex="-1"
					role="dialog"
					aria-labelledby="forgotPassswordTitle"
					aria-hidden="true"
				>
					<div class="modal-dialog modal-dialog-centered" role="document">
						<div class="modal-content">
							<div class="modal-body">
								<button
									type="button"
									class="close"
									data-dismiss="modal"
									aria-label="Close"
								>
									<span aria-hidden="true" class="font-weight-light">
										&times;
									</span>
								</button>
								<form action="#">
									<h3>Forgot Password ?</h3>
									<p class="mb-3">We will email you a link to reset it.</p>
									<input type="email" placeholder="Email" />
									<input type="submit" value="send" class="gradientBtn" />
								</form>
								<p class="font-weight-light">
									Just remembered ?
									<a
										class="gradientText"
										href="javascript:void(0)"
										data-target="#loginModalCenter"
										data-toggle="modal"
										data-dismiss="modal"
									>
										Log in
									</a>
									Instead
								</p>
								<p class="mb-0 font-weight-light">
									Don’t have an account ? Please
									<a
										class="gradientText"
										href="javascript:void(0)"
										data-target="#loginModalCenter"
										data-toggle="modal"
										data-dismiss="modal"
									>
										Sign up
									</a>
									for exciting offers
								</p>
							</div>
						</div>
					</div>
				</div>
				<div
					class="modal fade"
					id="loginModalCenter"
					tabindex="-1"
					role="dialog"
					aria-labelledby="loginModalCenterTitle"
					aria-hidden="true"
				>
					<div class="modal-dialog modal-dialog-centered" role="document">
						<div class="modal-content">
							<div class="modal-body" id="container">
								<div class="form-container sign-up-container">
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
											maxlength="10"
										/>

										<input type="submit" value="sign up" class="gradientBtn" />
										<p class="login-info-text">- OR -</p>
										<a href="javascript:void(0)" class="gLogin">
											<img src="assets/images/icons/google.png" alt="" />
											sign in using gmail
										</a>
									</form>
								</div>
								<div class="form-container sign-in-container">
									<form action="#">
										<h3>Sign in</h3>
										<p>
											Lorem ipsum dolor sit amet consectetur adipisicing elit.
										</p>
										<input type="email" placeholder="Email" />
										<input type="password" placeholder="Password" />
										<a
											href="javascript:void(0)"
											data-target="#forgotPass"
											class="fogotPassword"
											data-toggle="modal"
											data-dismiss="modal"
										>
											Forgot your password?
										</a>

										<input type="submit" value="sign in" class="gradientBtn" />
										<p class="login-info-text">- OR -</p>
										<a href="javascript:void(0)" class="gLogin">
											<img src="assets/images/icons/google.png" alt="" />
											sign in using gmail
										</a>
									</form>
								</div>
								<div class="overlay-container">
									<button
										type="button"
										class="close"
										data-dismiss="modal"
										aria-label="Close"
									>
										<span aria-hidden="true">&times;</span>
									</button>
									<div class="overlay">
										<div class="overlay-panel overlay-left">
											<h3>Welcome Back!</h3>
											<p>
												To keep connected with us please login with your
												personal info
											</p>
											<a
												href="javascript:void(0)"
												class="ghost gradientBtn"
												id="signIn"
											>
												Sign In
											</a>
										</div>
										<div class="overlay-panel overlay-right">
											<h3>Hello, Friend!</h3>
											<p>
												Enter your personal details and start journey with us
											</p>
											<a
												href="javascript:void(0)"
												class="ghost gradientBtn"
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
