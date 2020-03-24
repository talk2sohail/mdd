import React, { PureComponent } from "react";
import Header from "../header";
import Footer from "../footer";
import CollaborateBanner from "../collabrateBanner";

export default class Faq extends PureComponent {
	render() {
		return (
			<React.Fragment>
				<Header />
				<section class="supportPageBanner">
					<div class="contentWrap">
						<div class="sectionWrapper">
							<div class="row align-items-center justify-content-center no-gutters">
								<div class="col-lg-7 mx-auto text-center">
									<h1>
										Have any doubts? <br />
										Let us solve it for you
									</h1>
									<p>
										Lorem ipsum dolor sit, amet consectetur adipisicing elit.
										Quasi aspernatur harum ut adipisci, earum soluta praesentium
										consequatur ea veritatis neque fuga
									</p>
									<img
										src="/assets/images/icons/faqa.svg"
										class="mt-1"
										width="350"
										alt=""
									/>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section class="faqsWrap">
					<div class="sectionWrapper">
						<div class="row no-gutters justify-content-center">
							<div class="col-12">
								<div class="slider slider-nav">
									<div class="faqNavBlock">
										<i class="glyph-icon flaticon-user"></i>
										<p>General</p>
									</div>
									<div class="faqNavBlock">
										<i class="glyph-icon flaticon-configuration"></i>
										<p>Repair</p>
									</div>
									<div class="faqNavBlock">
										<i class="glyph-icon flaticon-payment-method"></i>
										<p>Payment</p>
									</div>
									<div class="faqNavBlock">
										<i class="glyph-icon flaticon-box"></i>
										<p>Pick Up, Drop & Delivery</p>
									</div>
								</div>
							</div>
							<div class="col-12">
								<div class="slider slider-for">
									<div id="accordionExample" class="accordion">
										{/* <!-- Accordion item 1 --> */}
										<div class="card">
											<div
												id="headingOne"
												class="card-header bg-white border-0 m-0"
											>
												<h2 class="mb-0">
													<button
														type="button"
														data-toggle="collapse"
														data-target="#collapseOne"
														aria-expanded="false"
														aria-controls="collapseOne"
														class="btn btn-link collapsed w-100 position-relative text-left collapsible-link"
													>
														Will your technician also fix any other issue of my
														phone?
													</button>
												</h2>
											</div>
											<div
												id="collapseOne"
												aria-labelledby="headingOne"
												data-parent="#accordionExample"
												class="collapse"
											>
												<div class="card-body">
													<p class="font-weight-light m-0">
														It is definitely on the cards but for now, we only
														offer the services listed on our platform. Please
														let us know in advance for any issue with your
														device and, we will try our best to help.
													</p>
												</div>
											</div>
										</div>
										{/* <!-- End --> */}
									</div>
									<div id="accordionExampleTwo" class="accordion">
										{/* <!-- Accordion item 2 --> */}
										<div class="card">
											<div
												id="headingTwo"
												class="card-header bg-white border-0"
											>
												<h2 class="mb-0">
													<button
														type="button"
														data-toggle="collapse"
														data-target="#collapseTwo"
														aria-expanded="false"
														aria-controls="collapseTwo"
														class="btn btn-link collapsed w-100 position-relative text-left  collapsible-link"
													>
														Will your technician also fix any other issue of my
														phone?
													</button>
												</h2>
											</div>
											<div
												id="collapseTwo"
												aria-labelledby="headingTwo"
												data-parent="#accordionExampleTwo"
												class="collapse"
											>
												<div class="card-body">
													<p class="font-weight-light m-0">
														It is definitely on the cards but for now, we only
														offer the services listed on our platform. Please
														let us know in advance for any issue with your
														device and, we will try our best to help.
													</p>
												</div>
											</div>
										</div>
										{/* <!-- End --> */}
									</div>
									<div id="accordionExampleThree" class="accordion">
										{/* <!-- Accordion item 3 --> */}
										<div class="card">
											<div
												id="headingFour"
												class="card-header bg-white border-0"
											>
												<h2 class="mb-0">
													<button
														type="button"
														data-toggle="collapse"
														data-target="#collapseFour"
														aria-expanded="false"
														aria-controls="collapseFour"
														class="btn btn-link collapsed w-100 position-relative text-left  collapsible-link"
													>
														Will your technician also fix any other issue of my
														phone?
													</button>
												</h2>
											</div>
											<div
												id="collapseFour"
												aria-labelledby="headingFour"
												data-parent="#accordionExampleThree"
												class="collapse"
											>
												<div class="card-body">
													<p class="font-weight-light m-0">
														It is definitely on the cards but for now, we only
														offer the services listed on our platform. Please
														let us know in advance for any issue with your
														device and, we will try our best to help.
													</p>
												</div>
											</div>
										</div>
										{/* <!-- End --> */}
									</div>
									<div id="accordionExampleFour" class="accordion">
										{/* <!-- Accordion item 3 --> */}
										<div class="card">
											<div
												id="headingFive"
												class="card-header bg-white border-0"
											>
												<h2 class="mb-0">
													<button
														type="button"
														data-toggle="collapse"
														data-target="#collapseFive"
														aria-expanded="false"
														aria-controls="collapseFive"
														class="btn btn-link collapsed w-100 position-relative text-left  collapsible-link"
													>
														Will your technician also fix any other issue of my
														phone?
													</button>
												</h2>
											</div>
											<div
												id="collapseFive"
												aria-labelledby="headingFive"
												data-parent="#accordionExampleFour"
												class="collapse"
											>
												<div class="card-body">
													<p class="font-weight-light m-0">
														It is definitely on the cards but for now, we only
														offer the services listed on our platform. Please
														let us know in advance for any issue with your
														device and, we will try our best to help.
													</p>
												</div>
											</div>
										</div>
										{/* <!-- End --> */}
										<div class="card">
											<div
												id="headingSix"
												class="card-header bg-white border-0"
											>
												<h2 class="mb-0">
													<button
														type="button"
														data-toggle="collapse"
														data-target="#collapseSix"
														aria-expanded="false"
														aria-controls="collapseSix"
														class="btn btn-link collapsed w-100 position-relative text-left  collapsible-link"
													>
														Will your technician also fix any other issue of my
														phone?
													</button>
												</h2>
											</div>
											<div
												id="collapseSix"
												aria-labelledby="headingSix"
												data-parent="#accordionExampleFour"
												class="collapse"
											>
												<div class="card-body">
													<p class="font-weight-light m-0">
														It is definitely on the cards but for now, we only
														offer the services listed on our platform. Please
														let us know in advance for any issue with your
														device and, we will try our best to help.
													</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<CollaborateBanner />
				<Footer />
			</React.Fragment>
		);
	}
}
