import React, { PureComponent } from "react";
import { Service } from "./service";

const serviceArray = [
	{
		repair: "Broken Screen",
		img: "/assets/images/background/brokenscreen.jpg",
	},
	{
		repair: "Speaker Repair",
		img: "/assets/images/background/speakerrepair.png",
	},
	{
		repair: "Camera Repair",
		img: "/assets/images/background/camerarepair.png",
	},
	{ repair: "Battery Repair", img: "/assets/images/background/battery.jpg" },
	{
		repair: "Charging Jack",
		img: "/assets/images/background/chargingjack.png",
	},
	{
		repair: "Water Damage Repair",
		img: "/assets/images/background/waterdamage.png",
	},
	{ repair: "Mic Repair", img: "/assets/images/background/micrepair.png" },
	{
		repair: "Receiver Repair",
		img: "/assets/images/background/recieverepair.png",
	},
	{
		repair: "Shattered Back",
		img: "/assets/images/background/brokenscreen.jpg",
	},
];

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
							{serviceArray.map((service, id) => (
								<Service key={id} repair={service.repair} img={service.img} />
							))}
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
