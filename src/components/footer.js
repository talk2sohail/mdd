import React, { PureComponent } from "react";
import { Link } from "react-router-dom";

export default class Footer extends PureComponent {
	render() {
		return (
			<React.Fragment>
				<footer>
					<div className="sectionWrapper">
						<div className="footerWrapper d-flex flex-wrap justify-content-center">
							<div className="footerComponent about">
								<Link to="" className="logo">
									<img
										src="assets/images/logo.png"
										width="100"
										alt="imageWrapper"
									/>
								</Link>
								<p>
									Lorem ipsum dolor sit, amet consectetur adipisicing elit.
									Dolorum voluptatem soluta asperiores, modi unde, voluptatum
									cupiditate reiciendis illum minima soluta asperiores, modi
								</p>
							</div>
							<div className="footerComponent">
								<h3>Company</h3>
								<ul>
									<li>
										<Link to="/about">About Us</Link>
									</li>
									<li>
										<Link to="">Blog</Link>
									</li>
									<li>
										<Link to="">Sitemap</Link>
									</li>
								</ul>
							</div>
							<div className="footerComponent">
								<h3>Help & Support</h3>
								<ul>
									<li>
										<Link to="">Contact Us</Link>
									</li>
									<li>
										<Link to="/faq">FAQ</Link>
									</li>
									<li>
										<Link to="/feedback">Feedback</Link>
									</li>
								</ul>
							</div>
							<div className="footerComponent">
								<h3>Policies</h3>
								<ul>
									<li>
										<Link to="">Privacy Policy</Link>
									</li>
									<li>
										<Link to="">Terms & Conditions</Link>
									</li>
									<li>
										<Link to="">Warranty Policy</Link>
									</li>
									<li>
										<Link to="">Terms of Use</Link>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="absolutefooter">
						<div className="sectionWrapper">
							<div className="row">
								<div className="col-12 col-lg-6">
									<p className="mb-0">
										Copyright © 2020 MDDS. All Rights Reserved.
									</p>
								</div>
								<div className="col-12 col-lg-6">
									<div className="socialIconsWrapper d-flex flex-wrap justify-content-end">
										<Link to="facebook:void(0)" className="d-block socialIcons">
											<img
												src="/assets/images/icons/facebook.png"
												width="16"
												alt="imageWrapper"
											/>
										</Link>
										<Link
											to="instagram:void(0)"
											className="d-block socialIcons"
										>
											<img
												src="/assets/images/icons/instagram.png"
												width="16"
												alt="imageWrapper"
											/>
										</Link>
										<Link to="twitter:void(0)" className="d-block socialIcons">
											<img
												src="/assets/images/icons/twitter.png"
												width="16"
												alt="imageWrapper"
											/>
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</footer>
			</React.Fragment>
		);
	}
}
