import React, { PureComponent, lazy, Suspense } from "react";
import $ from "jquery";

const Header = lazy(() => import("../header"));
const Footer = lazy(() => import("../footer"));
const Modal = lazy(() => import("../modal"));

const CollaborateBanner = lazy(() => import("../collabrateBanner"));

export default class Faq extends PureComponent {
	componentDidMount() {
		$("html, body").animate(
			{
				scrollTop: 0,
			},
			0
		);
		window.$(".slider-for").slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			fade: true,
			asNavFor: ".slider-nav",
		});

		window.$(".slider-nav").slick({
			slidesToShow: 4,
			slidesToScroll: 1,
			asNavFor: ".slider-for",
			dots: false,
			centerMode: false,
			infinite: false,
			focusOnSelect: true,
			responsive: [
				{
					breakpoint: 991,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 1,
						dots: true,
						variableWidth: true,
						infinite: true,
						centerMode: true,
					},
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1,
						dots: true,
						variableWidth: true,
						infinite: true,
						centerMode: true,
					},
				},
				// You can unslick at a given breakpoint now by adding:
				// settings: "unslick"
				// instead of a settings object
			],
		});
	}
	render() {
		return (
			<React.Fragment>
				<Header />
				<section className="supportPageBanner">
					<div className="contentWrap">
						<div className="sectionWrapper">
							<div className="row align-items-center justify-content-center no-gutters">
								<div className="col-lg-7 mx-auto text-center">
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
										className="mt-1"
										width="350"
										alt="faq"
									/>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className="faqsWrap">
					<div className="sectionWrapper">
						<div className="row no-gutters justify-content-center">
							<div className="col-12">
								<div className="slider slider-nav">
									<div className="faqNavBlock">
										<i className="glyph-icon flaticon-user"></i>
										<p>General</p>
									</div>
									<div className="faqNavBlock">
										<i className="glyph-icon flaticon-configuration"></i>
										<p>Repair</p>
									</div>
									<div className="faqNavBlock">
										<i className="glyph-icon flaticon-payment-method"></i>
										<p>Payment</p>
									</div>
									<div className="faqNavBlock">
										<i className="glyph-icon flaticon-box"></i>
										<p>Pick Up, Drop & Delivery</p>
									</div>
								</div>
							</div>
							<div className="col-12">
								<div className="slider slider-for">
									{/* <Slider {...settings}> */}
									<div id="accordionExample" className="accordion">
										{/* <!-- Accordion item 1 --> */}
										<div className="card">
											<div
												id="headingOne"
												className="card-header bg-white border-0 m-0"
											>
												<h2 className="mb-0">
													<button
														type="button"
														data-toggle="collapse"
														data-target="#collapseOne"
														aria-expanded="false"
														aria-controls="collapseOne"
														className="btn btn-link collapsed w-100 position-relative text-left collapsible-link"
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
												className="collapse"
											>
												<div className="card-body">
													<p className="font-weight-light m-0">
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
									<div id="accordionExampleTwo" className="accordion">
										{/* <!-- Accordion item 2 --> */}
										<div className="card">
											<div
												id="headingTwo"
												className="card-header bg-white border-0"
											>
												<h2 className="mb-0">
													<button
														type="button"
														data-toggle="collapse"
														data-target="#collapseTwo"
														aria-expanded="false"
														aria-controls="collapseTwo"
														className="btn btn-link collapsed w-100 position-relative text-left  collapsible-link"
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
												className="collapse"
											>
												<div className="card-body">
													<p className="font-weight-light m-0">
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
									<div id="accordionExampleThree" className="accordion">
										{/* <!-- Accordion item 3 --> */}
										<div className="card">
											<div
												id="headingFour"
												className="card-header bg-white border-0"
											>
												<h2 className="mb-0">
													<button
														type="button"
														data-toggle="collapse"
														data-target="#collapseFour"
														aria-expanded="false"
														aria-controls="collapseFour"
														className="btn btn-link collapsed w-100 position-relative text-left  collapsible-link"
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
												className="collapse"
											>
												<div className="card-body">
													<p className="font-weight-light m-0">
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
									<div id="accordionExampleFour" className="accordion">
										{/* <!-- Accordion item 3 --> */}
										<div className="card">
											<div
												id="headingFive"
												className="card-header bg-white border-0"
											>
												<h2 className="mb-0">
													<button
														type="button"
														data-toggle="collapse"
														data-target="#collapseFive"
														aria-expanded="false"
														aria-controls="collapseFive"
														className="btn btn-link collapsed w-100 position-relative text-left  collapsible-link"
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
												className="collapse"
											>
												<div className="card-body">
													<p className="font-weight-light m-0">
														It is definitely on the cards but for now, we only
														offer the services listed on our platform. Please
														let us know in advance for any issue with your
														device and, we will try our best to help.
													</p>
												</div>
											</div>
										</div>
										{/* <!-- End --> */}
										<div className="card">
											<div
												id="headingSix"
												className="card-header bg-white border-0"
											>
												<h2 className="mb-0">
													<button
														type="button"
														data-toggle="collapse"
														data-target="#collapseSix"
														aria-expanded="false"
														aria-controls="collapseSix"
														className="btn btn-link collapsed w-100 position-relative text-left  collapsible-link"
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
												className="collapse"
											>
												<div className="card-body">
													<p className="font-weight-light m-0">
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
				<Modal />
			</React.Fragment>
		);
	}
}
