import React, { PureComponent, Fragment } from "react";

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

	continue = (brandName) => () => {
		this.props.nextStep(brandName);
	};
	render() {
		return (
			<Fragment>
				<div className="row no-gutters justify-content-start align-items-center selectOption">
					{this.state.brands.map((brand) => {
						return (
							<div className="col-6 col-md-4 col-lg-2" key={brand}>
								<div className="branWrap">
									<div className="imgWrapBrand">
										<img
											src={`/assets/images/brandLogos/${brand.toLowerCase()}.png`}
											className="d-block text-center mx-auto"
											alt=""
											onClick={this.continue(`${brand}`)}
										/>
									</div>

									<h3 className="text-center uppercase">{brand}</h3>
								</div>
							</div>
						);
					})}
				</div>
			</Fragment>
		);
	}
}
