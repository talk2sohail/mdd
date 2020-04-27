import React, { PureComponent } from "react";
import apiCall from "../../axios";
export default class MobileSelection extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			error: "",
			mobiles: [],
		};
	}

	componentDidMount() {
		const brand = this.props.values.brand;
		brand.toLowerCase();
		apiCall
			.get(`/${brand}/${brand}`)
			.then((response) => {
				// console.log(response.data.mobiles);
				if (response) {
					this.setState({
						mobiles: response.data.mobiles,
					});
				}
			})
			.catch((error) => {
				if (!error.response) {
					console.log("Something went wrong");
				} else {
					console.log(error.response.data);
					this.setState({
						error: error.response.data.msg,
					});
				}
			});
	}
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
					{this.state.mobiles
						? this.state.mobiles.map((mobile, index) => {
								return (
									<div className="col-6 col-md-4 col-lg-2" key={index}>
										<div className="branWrap">
											<div className="imgWrapBrand">
												<img
													// src={`/assets/images/mobiles/oneplus/${mobile.toLowerCase()}.png`}
													src={mobile.img}
													className="d-block text-center mx-auto"
													alt=""
													onClick={this.continue(`${mobile.name}`)}
												/>
											</div>
											<h3 className="text-center uppercase">{mobile.name}</h3>
										</div>
									</div>
								);
						  })
						: null}
				</div>
			</React.Fragment>
		);
	}
}
