import React, { PureComponent } from "react";
import Select from "react-select";
import $ from "jquery";

const options = [
	{ value: "Camera Repair", label: "Camera Repair" },
	{ value: "Battery Repair", label: "Battery Repair" },
	{ value: "Microphone Repair", label: "Microphone Repair" },
	{ value: "Speaker Repair", label: "Speaker Repair" },
	{ value: "Broken screen", label: "Broken screen" },
	{ value: "Shattered Back", label: "Shattered Back" },
	{ value: "Water Damage Repair", label: "Water Damage Repair" },
	{ value: "Charging Jack", label: "Charging Jack" },
];

const colourStyles = {
	option: (provided, state) => ({
		...provided,
		borderBottom: "1px dotted pink",
		color: state.isSelected ? "red" : "black",
		padding: 13,
	}),
};
export default class RepairBanner extends PureComponent {
	state = {
		selectedOption: null,
		selectedProblems: null,
	};
	handleChange = (selectedOption) => {
		this.setState({ selectedOption });
	};
	handleSubmit = (e) => {
		e.preventDefault();
		const options = this.state.selectedOption;
		const issue_names = options ? options.map((issue) => issue.value) : [];
		//update the sessionStorage
		sessionStorage.setItem("searchItems", JSON.stringify(issue_names));
		//scroll to bottom
		$("html, body").animate(
			{
				scrollTop: $(".repairSelection").offset().top,
			},
			400
		);
	};

	render() {
		const { selectedOption } = this.state;
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
									{/* <input type="search" placeholder="Search Your Problem Here" /> */}
									<Select
										// defaultValue={[options[1]]}
										value={selectedOption}
										options={options}
										onChange={this.handleChange}
										isMulti
										placeholder="Search Your Problem Here.."
										options={options}
										styles={colourStyles}
									/>
									<button
										type="submit"
										onClick={this.handleSubmit}
										style={{ float: "left" }}
									>
										<img
											src="/assets/images/icons/search.png"
											alt=""
											width={20}
										/>
									</button>
									{/* i don't what am i doing */}
									<div id="clear" style={{ clear: "both" }}></div>
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
									stopOpacity: 1,
								}}
							/>
							<stop
								offset="60%"
								style={{
									stopColor: "rgba(47, 128, 237, 0.75)",
									stopOpacity: 1,
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
								<img
									alt=""
									src="/assets/images/brandLogos/repair/samsung.png"
								/>
							</div>
							<div className="customerLogo">
								<img
									alt=""
									src="/assets/images/brandLogos/repair/motorola.png"
								/>
							</div>
							<div className="customerLogo">
								<img alt="" src="/assets/images/brandLogos/repair/vivo.png" />
							</div>
							<div className="customerLogo">
								<img alt="" src="/assets/images/brandLogos/repair/oppo.png" />
							</div>
							<div className="customerLogo">
								<img alt="" src="/assets/images/brandLogos/repair/honor.png" />
							</div>
							<div className="customerLogo">
								<img alt="" src="/assets/images/brandLogos/repair/realme.png" />
							</div>
							<div className="customerLogo">
								<img
									alt=""
									src="/assets/images/brandLogos/repair/oneplus.png"
								/>
							</div>
						</div>
					</div>
				</section>
			</React.Fragment>
		);
	}
}
