import React, { Component } from "react";
// import Slider from "react-slick";
import bannerOne from "../assets/images/banner/bannerOne.jpg";
import bannerTwo from "../assets/images/banner/bannerTwo.jpg";

export default class Banner extends Component {
	componentDidMount() {
		window.$(".bannerSingle").slick({
			dots: true,
			infinite: true,
			speed: 1000,
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 2000
		});
	}
	render() {
		return (
			<React.Fragment>
				<section className="bannerWrapper">
					<div className="bannerSingle">
						<div className="bannerItem">
							<img src={bannerOne} alt="" />
						</div>
						<div className="bannerItem">
							<img src={bannerTwo} alt="" />
						</div>
						<div className="bannerItem">
							<img src={bannerOne} alt="" />
						</div>
						<div className="bannerItem">
							<img src={bannerTwo} alt="" />
						</div>
					</div>
				</section>
			</React.Fragment>
		);
	}
}
