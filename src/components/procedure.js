import React, { PureComponent } from "react";

export default class Procedure extends PureComponent {
	render() {
		return (
			<React.Fragment>
				<section className="procedureWrapper">
					<div className="sectionWrapper">
						<div className="row align-items-center justify-content-between">
							<div className="col-12">
								<div className="title">
									<h2 className="text-center ">Procedure</h2>
									<p className="text-center  m-auto  ">
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Eligendi placeat eos enim quibusdam illo dignissimos vel
									</p>
								</div>
							</div>
							<div className="col-12 col-md-6 col-lg-3">
								<div className="procedure blueBg ">
									<div className="imgWrap">
										<div className="icon mobile">
											<i className="glyph-icon flaticon-smartphone"></i>
										</div>
									</div>
									<div className="contentWrap">
										<h3 className="">Mobile</h3>
										<p className="">
											Select your mobile brand and model from the list of
											available brands and devices
										</p>
									</div>
								</div>
							</div>
							<div className="col-12 col-md-6 col-lg-3">
								<div className="procedure yellowBg">
									<div className="imgWrap">
										<div className="icon issue">
											<i className="glyph-icon flaticon-phone"></i>
										</div>
									</div>
									<div className="contentWrap">
										<h3 className="">Issue</h3>
										<p className="">
											Select your mobile brand and model from the list of
											available brands and devices
										</p>
									</div>
								</div>
							</div>
							<div className="col-12 col-md-6 col-lg-3">
								<div className="procedure pinkBg">
									<div className="imgWrap">
										<div className="icon repair">
											<i className="glyph-icon flaticon-delivery-boy"></i>
										</div>
									</div>
									<div className="contentWrap">
										<h3 className="">Repair</h3>
										<p className="">
											Select your mobile brand and model from the list of
											available brands and devices
										</p>
									</div>
								</div>
							</div>
							<div className="col-12 col-md-6 col-lg-3">
								<div className="procedure greenBg">
									<div className="imgWrap">
										<div className="icon payment">
											<i className="glyph-icon flaticon-payment-method"></i>
										</div>
									</div>
									<div className="contentWrap">
										<h3 className="">Payment</h3>
										<p className="">
											Select your mobile brand and model from the list of
											available brands and devices
										</p>
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
