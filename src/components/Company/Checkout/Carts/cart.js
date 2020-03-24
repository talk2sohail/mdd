import React, { Component } from "react";

export default class Cart extends Component {
	render() {
		return (
			<React.Fragment>
				<div class="userDetails">
					<div class="orderBlock">
						<div class="orderBody d-flex justify-content-start flex-wrap ">
							<div class="imgWrap">
								<img
									src="assets/images/mobiles/oneplus/oneplussixt.png"
									alt=""
								/>
							</div>
							<div class="contentWrap">
								<h3>OnePlus 6T</h3>
								<p>
									<span>Color: </span> Midnight Black
								</p>
								<p>
									<span>Issues: </span>
									Screen Repair, Mic Repair
								</p>
							</div>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}
