import React, { PureComponent } from "react";
import apiCall from "../../axios";
export default class MobileSelection extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			mobiles: ["oneplussixt", "oneplussixt", "oneplussixt"],
		};
	}

	// componentDidMount() {
	// 	apiCall
	// 		.get(`/${this.props.values.brand}/${this.props.values.brand}`)
	// 		.then((response) => {
	// 			console.log(response.data);
	// 		})
	// 		.catch((error) => {
	// 			console.log(error.response.data);
	// 		});
	// }
	continue = (mobileName) => () => {
		this.props.nextStep(this.props.values.brand, mobileName, false);
	};
	render() {
		return (
			<React.Fragment>
				{/* <div className="row no-gutters justify-content-start align-items-center selectOption mobileSelect">
					<div className="col-4 col-md-4 col-lg-2">
						<div className="series branWrap">
							<h4>V4 Series</h4>
						</div>
					</div>
				</div> */}
				<div className="row no-gutters justify-content-start align-items-center selectOption mobileSelect">
					{this.state.mobiles.map((mobile, index) => {
						return (
							<div className="col-6 col-md-4 col-lg-2" key={index}>
								<div className="branWrap">
									<div className="imgWrapBrand">
										<img
											src={`/assets/images/mobiles/oneplus/${mobile.toLowerCase()}.png`}
											className="d-block text-center mx-auto"
											alt=""
											onClick={this.continue(`${mobile}`)}
										/>
									</div>
									<h3 className="text-center uppercase">OnePlus 6T</h3>
								</div>
							</div>
						);
					})}
				</div>
			</React.Fragment>
		);
	}
}
