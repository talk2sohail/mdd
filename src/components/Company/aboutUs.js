import React, { PureComponent } from "react";
import $ from "jquery";
import Header from "../header";
import Footer from "../footer";
import Modal from "../modal";

import CollaborateBanner from "../collabrateBanner";

export default class About extends PureComponent {
	componentDidMount() {
		document.title = "ABOUT | Get your phone repair | MDDS";

		$("html, body").animate(
			{
				scrollTop: 0,
			},
			0
		);
	}
	render() {
		return (
			<React.Fragment>
				<Header />
				<section className="aboutBannerWrap">
					<div className="row align-items-center no-gutters">
						<div className="col-12 col-lg-6">
							<div className="content">
								<h1>Lorem Ipsum dolor sit amet elit est</h1>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Impedit, laudantium debitis iusto incidunt numquam voluptate
									fuga beatae nobis sapiente consequuntur aspernatur est illo
									neque animi unde deserunt provident accusantium in.
								</p>
							</div>
						</div>
						<div className="col-12 col-lg-6">
							<img
								src="/assets/images/background/mobirepair.jpg"
								alt="imageWrapper"
							/>
						</div>
					</div>
					<div className="floatingCont">
						<h2>Rxzaf sdf sdf</h2>
						<p className="font-weight-light">
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Praesentium tenetur consequuntur, ipsa perspiciatis nobis error
							quam nam esse cupiditate in officiis ipsa perspiciatis nobis error
							quam nam esse cupiditate in officiis
						</p>
						<p className="mb-0 font-weight-light">
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Praesentium tenetur consequuntur
						</p>
					</div>
				</section>
				{/* ourstory */}
				<section className="ourStoryWrap">
					<div className="sectionWrapper">
						<div className="row align-items-center justify-content-between">
							<div className="col-12 col-lg-6">
								<h2 className="font-weight-light">Mission &amp; Vision</h2>
								<p className="font-weight-light">
									Lorem ipsum dolor sit amet, consectetur adipisicing elit.
									Ipsum praesentium nostrum velit delectus quas harum, vel,
									aperiam excepturi neque voluptates dicta id iure at, veritatis
									consequuntur tempore accusantium amet ab.
								</p>
								<p className="font-weight-light">
									Lorem ipsum dolor sit amet, consectetur adipisicing elit.
									Ipsum praesentium nostrum velit delectus quas harum, vel,
									aperiam excepturi neque voluptates dicta id iure at, veritatis
									consequuntur tempore accusantium amet ab.
								</p>
								<p className="font-weight-light">
									Lorem ipsum dolor sit amet, consectetur adipisicing elit.
									Ipsum praesentium nostrum velit delectus quas harum, vel,
									aperiam excepturi neque voluptates dicta id iure at, veritatis
									consequuntur tempore accusantium amet ab.
								</p>
							</div>
							<div className="col-12 col-lg-6">
								<img
									className="d-block mx-auto img-fluid"
									src="/assets/images/icons/team_spirit.svg"
									alt="imageWrapper"
									height={400}
								/>
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
