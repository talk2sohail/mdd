import React, { PureComponent } from "react";

export default class Footer extends PureComponent {
	render() {
		return (
			<React.Fragment>
				<footer>
					<div className="sectionWrapper">
						<div className="footerWrapper d-flex flex-wrap justify-content-center">
							<div className="footerComponent about">
								<a href="javascript:void(0)" className="logo">
									<img src="/assets/images/logo.png" width="100" alt="" />
								</a>
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
										<a href="about.html">About Us</a>
									</li>
									<li>
										<a href="javascript:void(0)">Blog</a>
									</li>
									<li>
										<a href="javascript:void(0)">Collaborate</a>
									</li>
								</ul>
							</div>
							<div className="footerComponent">
								<h3>Help & Support</h3>
								<ul>
									<li>
										<a href="javascript:void(0)">Feedback</a>
									</li>
									<li>
										<a href="faq.html">FAQ</a>
									</li>
									<li>
										<a href="javascript:void(0)">Sitemap</a>
									</li>
								</ul>
							</div>
							<div className="footerComponent">
								<h3>Policies</h3>
								<ul>
									<li>
										<a href="privacypolicy.html">Privacy Policy</a>
									</li>
									<li>
										<a href="javascript:void(0)">Terms & Conditions</a>
									</li>
									<li>
										<a href="javascript:void(0)">Warranty Policy</a>
									</li>
									<li>
										<a href="javascript:void(0)">Terms of Use</a>
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
										<a
											href="javascript:void(0)"
											className="d-block socialIcons"
										>
											<img
												src="/assets/images/icons/facebook.png"
												width="16"
												alt=""
											/>
										</a>
										<a
											href="javascript:void(0)"
											className="d-block socialIcons"
										>
											<img
												src="/assets/images/icons/instagram.png"
												width="16"
												alt=""
											/>
										</a>
										<a
											href="javascript:void(0)"
											className="d-block socialIcons"
										>
											<img
												src="/assets/images/icons/twitter.png"
												width="16"
												alt=""
											/>
										</a>
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
