import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
export default class Collabrate extends PureComponent {
	render() {
		return (
			<React.Fragment>
				<section className="collaborateWrapper">
					<div className="sectionWrapper">
						<div className="row align-items-center justify-content-between">
							<div className="col-12 col-lg-6 text-center d-none d-lg-block">
								<img src="/assets/images/icons/collaborate.svg" alt="" />
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
									<Link to="">
										<span>repair now</span>
									</Link>
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
