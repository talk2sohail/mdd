import React, { PureComponent } from "react";
import $ from "jquery";

export default class Banner extends PureComponent {
	componentDidMount() {
		window.$(".bannerSingle").slick({
			dots: true,
			infinite: true,
			speed: 1000,
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 2000,
		});
	}
	render() {
		return (
			<React.Fragment>
				<section className="bannerWrapper">
					<div className="bannerSingle">
						<div className="bannerItem">
							<img src="/assets/images/banner/bannerOne.jpg" alt="banner" />
						</div>
						<div className="bannerItem">
							<img src="/assets/images/banner/bannerTwo.jpg" alt="banner" />
						</div>
						<div className="bannerItem">
							<img src="/assets/images/banner/bannerOne.jpg" alt="banner" />
						</div>
						<div className="bannerItem">
							<img src="/assets/images/banner/bannerTwo.jpg" alt="banner" />
						</div>
					</div>
				</section>
			</React.Fragment>
		);
	}
}
