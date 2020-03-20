import React, { Component } from "react";
import bannerOne from "../assets/images/banner/bannerOne.jpg";
import bannerTwo from "../assets/images/banner/bannerTwo.jpg";

export default class Banner extends Component {
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
