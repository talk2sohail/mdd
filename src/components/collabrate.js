import React, { Component } from "react";
import collaborate from "../assets/images/icons/collaborate.svg";
export default class Collabrate extends Component {
	render() {
		return (
			<React.Fragment>
				<section className="collaborateWrapper">
					<div className="sectionWrapper">
						<div className="row align-items-center justify-content-between">
							<div className="col-12 col-lg-6 text-center d-none d-lg-block">
								<img src={collaborate} alt="" />
							</div>
							<div className="col-12 col-lg-6">
								<p className="pill text-capitalize">repair</p>
								<h2 className="text-capitalize">
									have a issue in your mobile <br />
									let us fix it for you
								</h2>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
									aliquid repellendus asperiores quis
								</p>
								<div className="d-flex flex-wrap buttons justify-content-start">
									<a href="javascript:void(0);">
										<span>repair now</span>
									</a>
									<a href="javascript:void(0)">collaborate</a>
								</div>
							</div>
						</div>
					</div>
					<div className="shape-wrapper site-banner-shape">
						<div className="shape"></div>
						<div className="shape"></div>
						<div className="shape"></div>
						<div className="shape"></div>
						<div className="shape d-none d-md-block"></div>
						<div className="shape d-none d-md-block"></div>
						<div className="shape d-none d-md-block"></div>
					</div>
				</section>
			</React.Fragment>
		);
	}
}
