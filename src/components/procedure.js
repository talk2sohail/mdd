import React, { Component } from "react";

export default class Procedure extends Component {
	render() {
		return (
			<React.Fragment>
				<section class="procedureWrapper">
					<div class="sectionWrapper">
						<div class="row align-items-center justify-content-between">
							<div class="col-12">
								<div class="title">
									<h2 class="text-center ">Procedure</h2>
									<p class="text-center  m-auto  ">
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Eligendi placeat eos enim quibusdam illo dignissimos vel
									</p>
								</div>
							</div>
							<div class="col-12 col-md-6 col-lg-3">
								<div class="procedure blueBg ">
									<div class="imgWrap">
										<div class="icon mobile">
											<i class="glyph-icon flaticon-smartphone"></i>
										</div>
									</div>
									<div class="contentWrap">
										<h3 class="">Mobile</h3>
										<p class="">
											Select your mobile brand and model from the list of
											available brands and devices
										</p>
									</div>
								</div>
							</div>
							<div class="col-12 col-md-6 col-lg-3">
								<div class="procedure yellowBg">
									<div class="imgWrap">
										<div class="icon issue">
											<i class="glyph-icon flaticon-phone"></i>
										</div>
									</div>
									<div class="contentWrap">
										<h3 class="">Issue</h3>
										<p class="">
											Select your mobile brand and model from the list of
											available brands and devices
										</p>
									</div>
								</div>
							</div>
							<div class="col-12 col-md-6 col-lg-3">
								<div class="procedure pinkBg">
									<div class="imgWrap">
										<div class="icon repair">
											<i class="glyph-icon flaticon-delivery-boy"></i>
										</div>
									</div>
									<div class="contentWrap">
										<h3 class="">Repair</h3>
										<p class="">
											Select your mobile brand and model from the list of
											available brands and devices
										</p>
									</div>
								</div>
							</div>
							<div class="col-12 col-md-6 col-lg-3">
								<div class="procedure greenBg">
									<div class="imgWrap">
										<div class="icon payment">
											<i class="glyph-icon flaticon-payment-method"></i>
										</div>
									</div>
									<div class="contentWrap">
										<h3 class="">Payment</h3>
										<p class="">
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
