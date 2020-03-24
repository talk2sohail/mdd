import React, { Component } from "react";

export default class CheckoutSummary extends Component {
	render() {
		return (
			<React.Fragment>
				<div class="col-12 col-lg-4">
					<div class="priceSummary">
						<div class="priceHeader">
							<h3>Price Summary</h3>
						</div>
						<div class="priceBody">
							<p class="price">
								OnePlus 6T Screen
								<span class="float-right">Rs 800 - Rs 900</span>
							</p>
							<p class="price borderB">
								OnePlus 6T Mic
								<span class="float-right">Rs 599 - Rs 700</span>
							</p>
							<p class="tax">
								Tax <span class="float-right">Rs 0</span>
							</p>
							<p class="tax">
								Pickup Charge <span class="float-right">Rs 0</span>
							</p>
							<div class="position-relative agreeTC">
								<input type="checkbox" checked id="agree" name="" />
								<label for="agree">
									<svg
										class="tick"
										width="22"
										height="22"
										viewBox="0 0 24 24"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path d="M5 13L6 14L7 15L8 16L9 17L11 15L12 14L13 13L14 12L15 11L16 10L17 9L18 8" />
									</svg>
									I agree to the
									<a href="javascript:void(0)"> Terms & Conditions</a>
								</label>
							</div>
						</div>
						<a href="javascript:void(0)" class="d-block text-center btnBook">
							BOOK NOW
						</a>
					</div>
				</div>
			</React.Fragment>
		);
	}
}
