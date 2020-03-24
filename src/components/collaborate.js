import React, { PureComponent } from "react";
import Header from "./header";
import CollaborateBanner from "./collabrateBanner";
import Footer from "./footer";

export default class Collaborate extends PureComponent {
	render() {
		return (
			<React.Fragment>
				<Header />
				<section class="collaborateBanner">
					<div class="row align-items-center justify-content-betweem">
						<div class="col-12 col-lg-5">
							<div class="content">
								<h1>Have a shop ? Collaborate With Us</h1>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
									quo quia aspernatur, dolor ducimus porro dolores, alias,
									nostrum ea asperiores facere cupiditate. Eligendi praesentium
									tenetur nostrum nulla aliquam expedita assumenda.
								</p>
								<a href="#register" class="registerBtn">
									<span class="gradientText">Register Now</span>
								</a>
							</div>
						</div>
						<div class="col-12 col-lg-7">
							<img
								src="https://image.freepik.com/free-photo/modern-man-working-electronics-service-shop_1098-15487.jpg"
								alt=""
							/>
						</div>
					</div>
				</section>
				{/* <!-- whyus --> */}
				<section class="whyCollaborate">
					<div class="sectionWrapper">
						<div class="row no-gutters">
							<div class="col-12">
								<div class="title text-center">
									<h2>Why Us</h2>
									<p class="mx-auto">
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Aliquid quisquam perspiciatis architecto? Dolores impedit
									</p>
								</div>
							</div>
						</div>
						<div class="row no-gutters mt-2 align-items-center justify-content-between">
							<div class="col-12 col-lg-6">
								<div class="whyUsWrap d-flex align-items-center justify-content-betweem">
									<div class="imgWrap">
										<img
											src="assets/images/icons/faqa.svg"
											height="80"
											alt=""
										/>
									</div>
									<div class="content">
										<h3>Lorem Ipsum</h3>
										<p class="mb-0">
											Lorem, ipsum dolor sit amet consectetur adipisicing elit.
											Obcaecati nesciunt nemo quae dolore
										</p>
									</div>
								</div>
							</div>
							<div class="col-12 col-lg-6">
								<div class="whyUsWrap d-flex align-items-center justify-content-betweem">
									<div class="imgWrap">
										<img
											src="assets/images/icons/faqa.svg"
											height="80"
											alt=""
										/>
									</div>
									<div class="content">
										<h3>Lorem Ipsum</h3>
										<p class="mb-0">
											Lorem, ipsum dolor sit amet consectetur adipisicing elit.
											Obcaecati nesciunt nemo quae dolore
										</p>
									</div>
								</div>
							</div>
							<div class="col-12 col-lg-6">
								<div class="whyUsWrap d-flex align-items-center justify-content-betweem">
									<div class="imgWrap">
										<img
											src="assets/images/icons/faqa.svg"
											height="80"
											alt=""
										/>
									</div>
									<div class="content">
										<h3>Lorem Ipsum</h3>
										<p class="mb-0">
											Lorem, ipsum dolor sit amet consectetur adipisicing elit.
											Obcaecati nesciunt nemo quae dolore
										</p>
									</div>
								</div>
							</div>
							<div class="col-12 col-lg-6">
								<div class="whyUsWrap d-flex align-items-center justify-content-betweem mb-0">
									<div class="imgWrap">
										<img
											src="assets/images/icons/faqa.svg"
											height="80"
											alt=""
										/>
									</div>
									<div class="content">
										<h3>Lorem Ipsum</h3>
										<p class="mb-0">
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
				<section class="whatWeNeed">
					<div class="sectionWrapper">
						<div class="row no-gutters">
							<div class="col-12">
								<div class="title text-center">
									<h2>Why You Need</h2>
									<p class="mx-auto">
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Aliquid quisquam perspiciatis architecto? Dolores impedit
									</p>
								</div>
							</div>
							<div class="col-12 col-lg-4">
								<div class="needWrap">
									<img
										src="assets/images/icons/faqa.svg"
										height="120"
										class="mb-4"
										alt=""
									/>
									<p class="font-weight-light mb-0">
										Lorem, ipsum dolor sit amet consectetur adipisicing elit.
										Eius est dolorum, dolorem odio Eius est dolorum, dolorem
										odio
									</p>
								</div>
							</div>
							<div class="col-12 col-lg-4">
								<div class="needWrap">
									<img
										src="assets/images/icons/faqa.svg"
										height="120"
										class="mb-4"
										alt=""
									/>
									<p class="font-weight-light mb-0">
										Lorem, ipsum dolor sit amet consectetur adipisicing elit.
										Eius est dolorum, dolorem odio Eius est dolorum, dolorem
										odio
									</p>
								</div>
							</div>
							<div class="col-12 col-lg-4">
								<div class="needWrap">
									<img
										src="assets/images/icons/faqa.svg"
										height="120"
										class="mb-4"
										alt=""
									/>
									<p class="font-weight-light mb-0">
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
			</React.Fragment>
		);
	}
}
