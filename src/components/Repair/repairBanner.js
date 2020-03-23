import React, { PureComponent } from "react";
import samsung from "../../assets/images/brandLogos/repair/samsung.png";
import oneplus from "../../assets/images/brandLogos/repair/oneplus.png";
import realme from "../../assets/images/brandLogos/repair/realme.png";
import oppo from "../../assets/images/brandLogos/repair/oppo.png";
import vivo from "../../assets/images/brandLogos/repair/vivo.png";
import motorola from "../../assets/images/brandLogos/repair/motorola.png";
import honor from "../../assets/images/brandLogos/repair/honor.png";
import search from "../../assets/images/icons/search.png";

export default class RepairBanner extends PureComponent {
	render() {
		return (
			<React.Fragment>
				<section className="repairBannerWrapper">
					<div className="sectionWrapper">
						<div className="row align-items-center justify-content-between no-gutters">
							<div className="col-12 col-lg-7 mx-auto">
								<h1>Companies big and small trust us with their email.</h1>
								<p>
									As a leading digital communications platform, Twilio SendGrid
									powers remarkable businesses across the globe.
								</p>
								<form action="#" className="searchBar">
									<input type="search" placeholder="Search Your Problem Here" />
									<button type="submit">
										<img src={search} alt="" width={20} />
									</button>
								</form>
							</div>
						</div>
					</div>
				</section>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 220">
					<defs>
						<linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
							<stop
								offset="0%"
								style={{
									stopColor: "rgba(86, 204, 242, 0.75)",
									stopOpacity: 1
								}}
							/>
							<stop
								offset="60%"
								style={{
									stopColor: "rgba(47, 128, 237, 0.75)",
									stopOpacity: 1
								}}
							/>
						</linearGradient>
					</defs>
					<path
						fill="url(#grad1)"
						fillOpacity={1}
						d="M0,160L80,176C160,192,320,224,480,218.7C640,213,800,171,960,165.3C1120,160,1280,192,1360,208L1440,224L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
					/>
				</svg>
				{/* Customer logos */}
				<section className="customerLogosWrapper">
					<div className="sectionWrapper">
						<div className="d-flex justify-content-around wrapper">
							<div className="customerLogo">
								<img alt="" src={samsung} />
							</div>
							<div className="customerLogo">
								<img alt="" src={oneplus} />
							</div>
							<div className="customerLogo">
								<img alt="" src={oppo} />
							</div>
							<div className="customerLogo">
								<img alt="" src={vivo} />
							</div>
							<div className="customerLogo">
								<img alt="" src={realme} />
							</div>
							<div className="customerLogo">
								<img alt="" src={motorola} />
							</div>
							<div className="customerLogo">
								<img alt="" src={honor} />
							</div>
						</div>
					</div>
				</section>
			</React.Fragment>
		);
	}
}
