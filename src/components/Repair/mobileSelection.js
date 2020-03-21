import React, { Component } from "react";
import search from "../../assets/images/icons/search.png";
import oneplus6t from "../../assets/images/mobiles/oneplus/oneplussixt.png";
export default class MobileSelection extends Component {
	render() {
		return (
			<React.Fragment>
				{/* <section className="repairSelection">
					<div className="sectionWrapper"> */}
				<div className="row no-gutters align-items-center justify-content-between">
					<div className="col-4">
						<a
							className="text-center progressBooking active"
							href="javascript:void(0)"
						>
							Brand
							<span>(OnePlus)</span>
						</a>
					</div>
					<div className="col-4">
						<a
							className="text-center progressBooking"
							href="javascript:void(0)"
						>
							Mobile
						</a>
					</div>
					<div className="col-4">
						<a
							className="text-center progressBooking"
							href="javascript:void(0)"
						>
							Issue
						</a>
					</div>
				</div>
				<div className="row no-gutters justify-content-start align-items-center selectOption mobileSelect">
					<div className="col-12 col-md-6">
						<h2>Select Your OnePlus Device</h2>
					</div>
					<div className="col-12 col-md-6 text-right mobileLeft">
						<form action="#" className="searchBar">
							<input
								type="search"
								placeholder="Search Your Mobile Here"
								className="mt-0"
							/>
							<button type="submit">
								<img src={search} alt="" width={20} />
							</button>
						</form>
					</div>
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
