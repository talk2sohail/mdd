import React, { PureComponent } from "react";
import Footer from "./footer";

export default class Error extends PureComponent {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<React.Fragment>
				<section class="profileWrapper">
					<div class="sectionWrapper">
						<div class="row">
							<div class="col-12">
								<div class="errorWrapper">
									<img
										src="/assets/images/icons/not_found.svg"
										class="img-fluid"
										alt=""
									/>
									<p>OOPS! Something went wrong</p>
									<a href="/" class="siteBtn mx-auto">
										Go Back to Home
									</a>
								</div>
							</div>
						</div>
					</div>
				</section>
				<Footer />
			</React.Fragment>
		);
	}
}
