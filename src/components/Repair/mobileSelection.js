import React, { PureComponent } from "react";
import search from "../../assets/images/icons/search.png";
import oneplus6t from "../../assets/images/mobiles/oneplus/oneplussixt.png";
export default class MobileSelection extends PureComponent {
	render() {
		return (
			<React.Fragment>
				<div className="row no-gutters justify-content-start align-items-center selectOption mobileSelect">
					<div className="col-4 col-md-4 col-lg-2">
						<div className="series branWrap">
							<h4>V4 Series</h4>
						</div>
					</div>
				</div>
				<div className="row no-gutters justify-content-start align-items-center selectOption mobileSelect">
					{/* oneplus six t*/}
					<div className="col-6 col-md-4 col-lg-2">
						<div className="branWrap">
							<div className="imgWrapBrand">
								<img
									src={oneplus6t}
									className="d-block text-center mx-auto"
									alt=""
								/>
							</div>
							<h3 className="text-center uppercase">OnePlus 6T</h3>
						</div>
					</div>
					<div className="col-6 col-md-4 col-lg-2">
						<div className="branWrap">
							<div className="imgWrapBrand">
								<img
									src={oneplus6t}
									className="d-block text-center mx-auto"
									alt=""
								/>
							</div>
							<h3 className="text-center uppercase">OnePlus 6T</h3>
						</div>
					</div>
					<div className="col-6 col-md-4 col-lg-2">
						<div className="branWrap">
							<div className="imgWrapBrand">
								<img
									src={oneplus6t}
									className="d-block text-center mx-auto"
									alt=""
								/>
							</div>
							<h3 className="text-center uppercase">OnePlus 6T</h3>
						</div>
					</div>
				</div>
				{/* </div>
				</section> */}
			</React.Fragment>
		);
	}
}
