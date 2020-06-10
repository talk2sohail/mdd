import React, { PureComponent } from "react";
import Tilt from "react-tilt";

export default class Services extends PureComponent {
	componentDidMount() {
		window.$(".services").slick({
			dots: false,
			infinite: false,
			nav: false,
			speed: 300,
			slidesToShow: 4,
			slidesToScroll: 1,
			variableWidth: true,
			prevArrow: window.$(".prevAchieve"),
			nextArrow: window.$(".nextAchieve"),
			responsive: [
				{
					breakpoint: 1199,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 3,
					},
				},
				{
					breakpoint: 991,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 2,
						infinite: true,
						variableWidth: false,
					},
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
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
				<section className="typesOfrepair">
					<div className="sectionWrapper">
						<div className="row align-items-center justify-content-between">
							<div className="col-12">
								<div className="title">
									<h2 className="text-center">Services</h2>
									<p className=" m-auto text-center">
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Eligendi placeat eos enim quibusdam illo dignissimos vel
									</p>
								</div>
							</div>
						</div>
						<div className="services">
							<Tilt
								className="Tilt"
								options={{ max: 35, scale: 1, reverse: true }}
							>
								<div className="Tilt-inner">
									<a
										style={{ cursor: "pointer" }}
										// data-tilt
										// data-tilt-reverse="true"
										href="/repair"
										className="text-center"
									>
										<img
											src="/assets/images/background/brokenscreen.jpg"
											alt="imageWrapper"
										/>
										<div className="content">
											<h2 className="text-center">Broken Screen</h2>
										</div>
									</a>
								</div>
							</Tilt>
							<Tilt
								className="Tilt"
								options={{ max: 35, scale: 1, reverse: true }}
							>
								<div className="Tilt-inner">
									<a
										style={{ cursor: "pointer" }}
										// data-tilt
										// data-tilt-reverse="true"
										href="/repair"
										className="text-center"
									>
										<img
											src="/assets/images/background/speakerrepair.png"
											alt="imageWrapper"
										/>
										<div className="content">
											<h2 className="text-center">Speaker Repair</h2>
										</div>
									</a>
								</div>
							</Tilt>
							<Tilt
								className="Tilt"
								options={{ max: 35, scale: 1, reverse: true }}
							>
								<div className="Tilt-inner">
									<a
										style={{ cursor: "pointer" }}
										// data-tilt
										// data-tilt-reverse="true"
										href="/repair"
										className="text-center"
									>
										<img
											src="/assets/images/background/camerarepair.png"
											alt="imageWrapper"
										/>
										<div className="content">
											<h2 className="text-center">Camera Repair</h2>
										</div>
									</a>
								</div>
							</Tilt>
							<Tilt
								className="Tilt"
								options={{ max: 35, scale: 1, reverse: true }}
							>
								<div className="Tilt-inner">
									<a
										style={{ cursor: "pointer" }}
										// data-tilt
										// data-tilt-reverse="true"
										href="/repair"
										className="text-center"
									>
										<img
											src="/assets/images/background/battery.jpg"
											alt="imageWrapper"
										/>
										<div className="content">
											<h2 className="text-center">Battery Repair</h2>
										</div>
									</a>
								</div>
							</Tilt>
							<Tilt
								className="Tilt"
								options={{ max: 35, scale: 1, reverse: true }}
							>
								<div className="Tilt-inner">
									<a
										style={{ cursor: "pointer" }}
										// data-tilt
										// data-tilt-reverse="true"
										href="/repair"
										className="text-center"
									>
										<img
											src="/assets/images/background/chargingjack.png"
											alt="imageWrapper"
										/>
										<div className="content">
											<h2 className="text-center">Charging Jack</h2>
										</div>
									</a>
								</div>
							</Tilt>
							<Tilt
								className="Tilt"
								options={{ max: 35, scale: 1, reverse: true }}
							>
								<div className="Tilt-inner">
									<a
										style={{ cursor: "pointer" }}
										// data-tilt
										// data-tilt-reverse="true"
										href="/repair"
										className="text-center"
									>
										<img
											src="/assets/images/background/waterdamage.png"
											alt="imageWrapper"
										/>
										<div className="content">
											<h2 className="text-center">Water Damage Repair</h2>
										</div>
									</a>
								</div>
							</Tilt>
							<Tilt
								className="Tilt"
								options={{ max: 35, scale: 1, reverse: true }}
							>
								<div className="Tilt-inner">
									<a
										style={{ cursor: "pointer" }}
										// data-tilt
										// data-tilt-reverse="true"
										href="/repair"
										className="text-center"
									>
										<img
											src="/assets/images/background/micrepair.png"
											alt="imageWrapper"
										/>
										<div className="content">
											<h2 className="text-center">Mic Repair</h2>
										</div>
									</a>
								</div>
							</Tilt>
							<Tilt
								className="Tilt"
								options={{ max: 35, scale: 1, reverse: true }}
							>
								<div className="Tilt-inner">
									<a
										style={{ cursor: "pointer" }}
										// data-tilt
										// data-tilt-reverse="true"
										href="/repair"
										className="text-center"
									>
										<img
											src="/assets/images/background/recieverepair.png"
											alt="imageWrapper"
										/>
										<div className="content">
											<h2 className="text-center">Receiver Repair</h2>
										</div>
									</a>
								</div>
							</Tilt>
							<Tilt
								className="Tilt"
								options={{ max: 35, scale: 1, reverse: true }}
							>
								<div className="Tilt-inner">
									<a
										style={{ cursor: "pointer" }}
										// data-tilt
										// data-tilt-reverse="true"
										href="/repair"
										className="text-center"
									>
										<img
											src="/assets/images/background/brokenscreen.jpg"
											alt="imageWrapper"
										/>
										<div className="content">
											<h2 className="text-center">Shattered Back</h2>
										</div>
									</a>
								</div>
							</Tilt>
						</div>
						<div className="navWrapAchieve d-flex align-items-center justify-content-end">
							<div className="prevAchieve slick-prev d-flex slick-slide">
								<span>
									<img
										src="/assets/images/icons/backward.png"
										alt="imageWrapper"
									/>
								</span>
							</div>
							<div className="nextAchieve slick-next d-flex text-right slick-slide">
								<span>
									<img
										src="/assets/images/icons/forward.png"
										alt="imageWrapper"
									/>
								</span>
							</div>
						</div>
					</div>
				</section>
			</React.Fragment>
		);
	}
}
