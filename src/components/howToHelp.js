import React, { PureComponent } from "react";
import { Link } from "react-router-dom";

export default class howToHelp extends PureComponent {
	render() {
		return (
			<React.Fragment>
				<section className="howToHelpWrapper">
					<div className="sectionWrapper">
						<div className="row align-items-top justify-content-between no-gutters">
							<div className="col-12 col-md-6 col-lg-4">
								<h3 className="text-capitalize">how we can help</h3>
								<h2>We Make Mobile Repair Stress Free</h2>
							</div>
							<div className="col-12 col-md-6 col-lg-4">
								<div className="serviceItem">
									<div className="itemImage">
										<img
											src="https://demo.cmssuperheroes.com/themeforest/wp-tekhfixers/wp-content/uploads/2019/06/Icon@3x.png"
											width="80"
											alt=""
										/>
									</div>
									<div className="contentHolder">
										<h4>Water Ingress Damage</h4>
										<p>
											We can often repair water damage from inside the phone,
											only rare cases where we cannot fix this.
										</p>
										<div className="readMore d-flex justify-content-between">
											<p>from Rs 100</p>
											<Link to="">View More</Link>
										</div>
									</div>
								</div>
							</div>
							<div className="col-12 col-md-6 col-lg-4">
								<div className="serviceItem">
									<div className="itemImage poorBattery">
										<img
											src="https://demo.cmssuperheroes.com/themeforest/wp-tekhfixers/wp-content/uploads/2019/06/Icon@3x1.png"
											width="80"
											alt=""
										/>
									</div>
									<div className="contentHolder">
										<h4>Poor Battery Life</h4>
										<p>
											As devices age, their batteries degrade. With a new
											battery you can enjoy many more hours of charge.
										</p>
										<div className="readMore d-flex justify-content-between">
											<p>from Rs 100</p>
											<Link to="">View More</Link>
										</div>
									</div>
								</div>
							</div>
							<div className="col-12 col-md-6 col-lg-4">
								<div className="serviceItem">
									<div className="itemImage crackedScreen">
										<img
											src="https://demo.cmssuperheroes.com/themeforest/wp-tekhfixers/wp-content/uploads/2019/06/Icon@3x3.png"
											width="80"
											alt=""
										/>
									</div>
									<div className="contentHolder">
										<h4>Cracked Screens</h4>
										<p>
											Our most common repair! We only use genuine parts to avoid
											voiding your warranty.
										</p>
										<div className="readMore d-flex justify-content-between">
											<p>from Rs 100</p>
											<Link to="">View More</Link>
										</div>
									</div>
								</div>
							</div>
							<div className="col-12 col-md-6 col-lg-4">
								<div className="serviceItem">
									<div className="itemImage bentChasis">
										<img
											src="https://demo.cmssuperheroes.com/themeforest/wp-tekhfixers/wp-content/uploads/2019/06/Icon@3x4.png"
											width="80"
											alt=""
										/>
									</div>
									<div className="contentHolder">
										<h4>Bent Chassis</h4>
										<p>
											Sat on your phone? We can straighten your current chassis
											or replace it with a factory original.
										</p>
										<div className="readMore d-flex justify-content-between">
											<p>from Rs 100</p>
											<Link to="">View More</Link>
										</div>
									</div>
								</div>
							</div>
							<div className="col-12 col-md-6 col-lg-4">
								<div className="serviceItem">
									<div className="itemImage brokenSpeaker">
										<img
											src="https://demo.cmssuperheroes.com/themeforest/wp-tekhfixers/wp-content/uploads/2019/06/Icon@3x2.png"
											width="80"
											alt=""
										/>
									</div>
									<div className="contentHolder">
										<h4>Broken Speakers</h4>
										<p>
											Many things can cause broken speakers, but we can replace
											them easily so you can hear again.
										</p>
										<div className="readMore d-flex justify-content-between">
											<p>from Rs 100</p>
											<Link to="">View More</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</React.Fragment>
		);
	}
}
