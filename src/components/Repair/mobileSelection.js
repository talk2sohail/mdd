import React, { PureComponent } from "react";
import apiCall from "../../axios";
import $ from "jquery";
import LocalMobileFromDB from "./LocalMobileFromDB";
export default class MobileSelection extends PureComponent {
	// constructor(props) {
	// 	super(props);
	// 	this.state = {
	// 		error: "",
	// 		mobiles: [],
	// 	};
	// }
	componentDidMount() {
		window.scrollTo(0, 500);
	}
	continue = (mobileName, img) => () => {
		this.props.nextStep(this.props.values.brand, mobileName, img, false);
	};
	render() {
		return (
			<React.Fragment>
				<div className="row no-gutters justify-content-start align-items-center selectOption mobileSelect">
					{this.props.mobileList.length !== 0 ? (
						<>
							{this.props.mobileList.map((mobile, index) => {
								return (
									<div className="col-6 col-md-4 col-lg-2" key={index}>
										<div className="branWrap">
											<div className="imgWrapBrand">
												<img
													// src={`/assets/images/mobiles/oneplus/${mobile.toLowerCase()}.png`}
													src={mobile.img}
													className="d-block text-center mx-auto"
													alt=""
													onClick={this.continue(
														`${mobile.name}`,
														`${mobile.img}`
													)}
												/>
											</div>
											<h3 className="text-center uppercase">{mobile.name}</h3>
										</div>
									</div>
								);
							})}
							<div
								style={{
									color: "blue",
									paddingTop: "25px",
									cursor: "pointer",
								}}
								onClick={() => {
									$(window).scrollTop(500);
								}}
							>
								...Cannot find your Mobile? Click me to get to search bar.
							</div>
						</>
					) : (
						<>
							<LocalMobileFromDB
								brand={this.props.values.brand}
								nextStep={this.props.nextStep.bind(this)}
							/>
						</>
					)}
				</div>
			</React.Fragment>
		);
	}
}
