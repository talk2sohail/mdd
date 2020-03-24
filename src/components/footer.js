import React, { PureComponent } from "react";
import { Link } from "react-router-dom";

export default class Footer extends PureComponent {
	render() {
		return (
			<React.Fragment>
				<footer>
					<div class="sectionWrapper">
						<div class="footerWrapper d-flex flex-wrap justify-content-center">
							<div class="footerComponent about">
								<Link to="" class="logo">
									<img src="assets/images/logo.png" width="100" alt="" />
								</Link>
								<p>
									Lorem ipsum dolor sit, amet consectetur adipisicing elit.
									Dolorum voluptatem soluta asperiores, modi unde, voluptatum
									cupiditate reiciendis illum minima soluta asperiores, modi
								</p>
							</div>
							<div class="footerComponent">
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
							<div class="footerComponent">
								<h3>Help & Support</h3>
								<ul>
									<li>
										<Link to="">Contact Us</Link>
									</li>
									<li>
										<Link to="/faq">FAQ</Link>
									</li>
									<li>
										<Link to="">Sitemap</Link>
									</li>
									<li>
										<Link to="">Feedback</Link>
									</li>
								</ul>
							</div>
							<div class="footerComponent">
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
					<div class="absolutefooter">
						<div class="sectionWrapper">
							<div class="row">
								<div class="col-12 col-lg-6">
									<p class="mb-0">
										Copyright © 2020 MDDS. All Rights Reserved.
									</p>
								</div>
								<div class="col-12 col-lg-6">
									<div class="socialIconsWrapper d-flex flex-wrap justify-content-end">
										<Link to="facebook:void(0)" class="d-block socialIcons">
											<img
												src="/assets/images/icons/facebook.png"
												width="16"
												alt=""
											/>
										</Link>
										<Link to="instagram:void(0)" class="d-block socialIcons">
											<img
												src="/assets/images/icons/instagram.png"
												width="16"
												alt=""
											/>
										</Link>
										<Link to="twitter:void(0)" class="d-block socialIcons">
											<img
												src="/assets/images/icons/twitter.png"
												width="16"
												alt=""
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
