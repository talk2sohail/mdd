import React, { PureComponent, Fragment } from "react";
import LocalBrands from "./LocalBrands";
import apiCall from "../../axios";
export default class BrandsSelection extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			brands: [
				"Apple",
				"Samsung",
				"Mi",
				"Oppo",
				"Realme",
				"vivo",
				"OnePlus",
				"Motorola",
				"Huawei",
				"Honor",
				"Google",
				"Nokia",
				"Asus",
				"Poco",
				"Lenovo",
			],
		};
		this.continue = this.continue.bind(this);
	}

	continue = (brandName) => (e) => {
		e.preventDefault();
		this.props.nextStep(brandName);
	};
	render() {
		return (
			<Fragment>
				<div className="row no-gutters justify-content-start align-items-center selectOption">
					{this.props.brandList.length !== 0 ? (
						this.props.brandList.map((brand) => {
							return (
								<div className="col-6 col-md-4 col-lg-2" key={brand.name}>
									<div className="branWrap">
										<div className="imgWrapBrand">
											<img
												src={`/assets/images/brandLogos/apple.png`}
												className="d-block text-center mx-auto"
												alt=""
												onClick={this.continue(`${brand.name}`)}
											/>
										</div>

										<h3 className="text-center uppercase">{brand.name}</h3>
									</div>
								</div>
							);
						})
					) : (
						<LocalBrands nextStep={this.props.nextStep.bind(this)} />
					)}
				</div>
			</Fragment>
		);
	}
}
{
}
