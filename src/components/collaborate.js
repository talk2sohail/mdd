import React, { PureComponent } from "react";
import Header from "./header";
import CollaborateBanner from "./collabrateBanner";
import Modal from "./modal";
import Footer from "./footer";

export default class Collaborate extends PureComponent {
	componentDidMount() {
		window.scroll(0, 0);
	}
	render() {
		return (
			<React.Fragment>
				<Header />
				<section className="collaborateBanner">
					<div className="row align-items-center justify-content-betweem">
						<div className="col-12 col-lg-5">
							<div className="content">
								<h1>Have a shop ? Collaborate With Us</h1>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
									quo quia aspernatur, dolor ducimus porro dolores, alias,
									nostrum ea asperiores facere cupiditate. Eligendi praesentium
									tenetur nostrum nulla aliquam expedita assumenda.
								</p>
								<a href="#register" className="registerBtn">
									<span className="gradientText">Register Now</span>
								</a>
							</div>
						</div>
						<div className="col-12 col-lg-7">
							<img
								src="https://image.freepik.com/free-photo/modern-man-working-electronics-service-shop_1098-15487.jpg"
								alt="imageWrapper"
							/>
						</div>
					</div>
				</section>
				{/* <!-- whyus --> */}
				<section className="whyCollaborate">
					<div className="sectionWrapper">
						<div className="row no-gutters">
							<div className="col-12">
								<div className="title text-center">
									<h2>Why Us</h2>
									<p className="mx-auto">
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Aliquid quisquam perspiciatis architecto? Dolores impedit
									</p>
								</div>
							</div>
						</div>
						<div className="row no-gutters mt-2 align-items-center justify-content-between">
							<div className="col-12 col-lg-6">
								<div className="whyUsWrap d-flex align-items-center justify-content-betweem">
									<div className="imgWrap">
										<img
											src="assets/images/icons/faqa.svg"
											height="80"
											alt="imageWrapper"
										/>
									</div>
									<div className="content">
										<h3>Lorem Ipsum</h3>
										<p className="mb-0">
											Lorem, ipsum dolor sit amet consectetur adipisicing elit.
											Obcaecati nesciunt nemo quae dolore
										</p>
									</div>
								</div>
							</div>
							<div className="col-12 col-lg-6">
								<div className="whyUsWrap d-flex align-items-center justify-content-betweem">
									<div className="imgWrap">
										<img
											src="assets/images/icons/faqa.svg"
											height="80"
											alt="imageWrapper"
										/>
									</div>
									<div className="content">
										<h3>Lorem Ipsum</h3>
										<p className="mb-0">
											Lorem, ipsum dolor sit amet consectetur adipisicing elit.
											Obcaecati nesciunt nemo quae dolore
										</p>
									</div>
								</div>
							</div>
							<div className="col-12 col-lg-6">
								<div className="whyUsWrap d-flex align-items-center justify-content-betweem">
									<div className="imgWrap">
										<img
											src="assets/images/icons/faqa.svg"
											height="80"
											alt="imageWrapper"
										/>
									</div>
									<div className="content">
										<h3>Lorem Ipsum</h3>
										<p className="mb-0">
											Lorem, ipsum dolor sit amet consectetur adipisicing elit.
											Obcaecati nesciunt nemo quae dolore
										</p>
									</div>
								</div>
							</div>
							<div className="col-12 col-lg-6">
								<div className="whyUsWrap d-flex align-items-center justify-content-betweem mb-0">
									<div className="imgWrap">
										<img
											src="assets/images/icons/faqa.svg"
											height="80"
											alt="imageWrapper"
										/>
									</div>
									<div className="content">
										<h3>Lorem Ipsum</h3>
										<p className="mb-0">
											Lorem, ipsum dolor sit amet consectetur adipisicing elit.
											Obcaecati nesciunt nemo quae dolore
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				{/* <!-- whatweneed --> */}
				<section className="whatWeNeed">
					<div className="sectionWrapper">
						<div className="row no-gutters">
							<div className="col-12">
								<div className="title text-center">
									<h2>Why You Need</h2>
									<p className="mx-auto">
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Aliquid quisquam perspiciatis architecto? Dolores impedit
									</p>
								</div>
							</div>
							<div className="col-12 col-lg-4">
								<div className="needWrap">
									<img
										src="assets/images/icons/faqa.svg"
										height="120"
										className="mb-4"
										alt="imageWrapper"
									/>
									<p className="font-weight-light mb-0">
										Lorem, ipsum dolor sit amet consectetur adipisicing elit.
										Eius est dolorum, dolorem odio Eius est dolorum, dolorem
										odio
									</p>
								</div>
							</div>
							<div className="col-12 col-lg-4">
								<div className="needWrap">
									<img
										src="assets/images/icons/faqa.svg"
										height="120"
										className="mb-4"
										alt="imageWrapper"
									/>
									<p className="font-weight-light mb-0">
										Lorem, ipsum dolor sit amet consectetur adipisicing elit.
										Eius est dolorum, dolorem odio Eius est dolorum, dolorem
										odio
									</p>
								</div>
							</div>
							<div className="col-12 col-lg-4">
								<div className="needWrap">
									<img
										src="assets/images/icons/faqa.svg"
										height="120"
										className="mb-4"
										alt="imageWrapper"
									/>
									<p className="font-weight-light mb-0">
										Lorem, ipsum dolor sit amet consectetur adipisicing elit.
										Eius est dolorum, dolorem odio Eius est dolorum, dolorem
										odio
									</p>
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
