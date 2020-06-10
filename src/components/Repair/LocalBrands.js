import React, { Component } from "react";
import $ from "jquery";
export default class LocalBrands extends Component {
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
		this.Continue = this.Continue.bind(this);
	}
	Continue = (brandName) => (e) => {
		e.preventDefault();
		this.props.nextStep(brandName);

		$("html, body").animate(
			{
				scrollTop: 500,
			},
			0
		);
	};
	render() {
		return (
			<React.Fragment>
				{this.state.brands
					? this.state.brands.map((brand, i) => {
							return (
								<div className="col-6 col-md-4 col-lg-2" key={brand}>
									<div className="branWrap">
										<div className="imgWrapBrand">
											<img
												src={`/assets/images/brandLogos/${brand.toLowerCase()}.png`}
												className="d-block text-center mx-auto"
												alt=""
												onClick={this.Continue(`${brand}`)}
											/>
										</div>

										<h3 className="text-center uppercase">{brand}</h3>
									</div>
								</div>
							);
					  })
					: null}
			</React.Fragment>
		);
	}
}
