import React, { Component } from "react";
import brokenScreen from "../assets/images/background/brokenscreen.jpg";
import speakerRepair from "../assets/images/background/speakerrepair.png";
import cameraRepair from "../assets/images/background/camerarepair.png";
import battery from "../assets/images/background/battery.jpg";
import waterdamage from "../assets/images/background/waterdamage.png";
import chargingjack from "../assets/images/background/chargingjack.png";
import receiverepair from "../assets/images/background/recieverepair.png";
import forward from "../assets/images/icons/forward.png";
import backward from "../assets/images/icons/backward.png";
import backpanel from "../assets/images/background/backpanel.png";
import micrepair from "../assets/images/background/micrepair.png";

export default class Services extends Component {
	render() {
		return (
			<React.Fragment>
				<section class="typesOfrepair">
					<div class="sectionWrapper">
						<div class="row align-items-center justify-content-between">
							<div class="col-12">
								<div class="title">
									<h2 class="text-center">Services</h2>
									<p class=" m-auto text-center">
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Eligendi placeat eos enim quibusdam illo dignissimos vel
									</p>
								</div>
							</div>
						</div>
						<div class="services">
							<a
								data-tilt
								data-tilt-reverse="true"
								href="javascript:void(0)"
								class="text-center"
							>
								<img src={brokenScreen} alt="" />
								<div class="content">
									<h2 class="text-center">Broken Screen</h2>
								</div>
							</a>
							<a
								data-tilt
								data-tilt-reverse="true"
								href="javascript:void(0)"
								class="text-center"
							>
								<img src={speakerRepair} alt="" />
								<div class="content">
									<h2 class="text-center">Speaker Repair</h2>
								</div>
							</a>
							<a
								data-tilt
								data-tilt-reverse="true"
								href="javascript:void(0)"
								class="text-center"
							>
								<img src={cameraRepair} alt="" />
								<div class="content">
									<h2 class="text-center">Camera Repair</h2>
								</div>
							</a>
							<a
								data-tilt
								data-tilt-reverse="true"
								href="javascript:void(0)"
								class="text-center"
							>
								<img src={battery} alt="" />
								<div class="content">
									<h2 class="text-center">Battery Repair</h2>
								</div>
							</a>
							<a
								data-tilt
								data-tilt-reverse="true"
								href="javascript:void(0)"
								class="text-center"
							>
								<img src={chargingjack} alt="" />
								<div class="content">
									<h2 class="text-center">Charging Jack</h2>
								</div>
							</a>
							<a
								data-tilt
								data-tilt-reverse="true"
								href="javascript:void(0)"
								class="text-center"
							>
								<img src={waterdamage} alt="" />
								<div class="content">
									<h2 class="text-center">Water Damage Repair</h2>
								</div>
							</a>
							<a
								data-tilt
								data-tilt-reverse="true"
								href="javascript:void(0)"
								class="text-center"
							>
								<img src={micrepair} alt="" />
								<div class="content">
									<h2 class="text-center">Mic Repair</h2>
								</div>
							</a>
							<a
								data-tilt
								data-tilt-reverse="true"
								href="javascript:void(0)"
								class="text-center"
							>
								<img src={receiverepair} alt="" />
								<div class="content">
									<h2 class="text-center">Receiver Repair</h2>
								</div>
							</a>
							<a
								data-tilt
								data-tilt-reverse="true"
								href="javascript:void(0)"
								class="text-center"
							>
								<img src={backpanel} alt="" />
								<div class="content">
									<h2 class="text-center">Shattered Back</h2>
								</div>
							</a>
						</div>
						<div class="navWrapAchieve d-flex align-items-center justify-content-end">
							<div class="prevAchieve slick-prev d-flex slick-slide">
								<span>
									<img src={backward} alt="" />
								</span>
							</div>
							<div class="nextAchieve slick-next d-flex text-right slick-slide">
								<span>
									<img src={forward} alt="" />
								</span>
							</div>
						</div>
					</div>
				</section>
			</React.Fragment>
		);
	}
}
