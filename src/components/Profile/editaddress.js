import React, { Component } from "react";

export default class Editaddress extends Component {
	render() {
		return (
			<React.Fragment>
				<div className="col-lg-9 col-12">
					<div className="userWrapper">
						<div className="userHeader">
							<h2>Manage Address</h2>
						</div>
						<div className="userDetails">
							<a
								className="addAddress d-block gradientText"
								href="addaddress.html"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width={18}
									height={18}
									viewBox="0 0 18 18"
									fill="#56ccf2"
								>
									<path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z" />
								</svg>
								ADD NEW ADDRESS
							</a>
							<div className="savedAddress">
								<h3>
									Md Javed Akhtar <span>9831983198</span>
								</h3>
								<p>
									10, Park Street, Kolkata-700 016. Park Street Police Station
								</p>
								<p>Kolkata, West Bengal - 700016</p>
								<div className="d-flex">
									<a href="javascript:void(0)" className="gradientText">
										Edit
									</a>
									<a href="javascript:void(0)" className="delete">
										Delete
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}
