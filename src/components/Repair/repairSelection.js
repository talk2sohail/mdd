import React, { PureComponent } from "react";
import apiCall from "../../axios";
import { store } from "react-notifications-component";

import { Link, withRouter } from "react-router-dom";
import IssueSelection from "./issueSelection";
import BrandsSelection from "./brandsSelection";
import MobileSelection from "./mobileSelection";
import $ from "jquery";
// import Loader from "react-loader";
import SearchBar from "./searchBar";
class RepairSelection extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			//editing the cart item and also add cart handling
			cart_id: "",
			brand: "",
			mobImg: "",
			mobile: "",

			// selectedIssue: [],
			loadMobile: false,
			loadBrand: false,
			step: 1,
			searchQuery: "",
			errorMsg: "",
			search: true,
			// brand data from search
			brandList: [],
			noBrandMsg: "",
			//mobile data from search
			mobileList: [],
			noMobileMsg: "",
		};

		this.nextStep = this.nextStep.bind(this);
		this.previousStep = this.previousStep.bind(this);
	}
	_updateMobileData = () => {
		let brandName = this.state.brand.toLowerCase();

		//get the quuery from search
		const model = this.state.searchQuery.toLowerCase();
		apiCall
			.get(`/searchphone/${brandName === "mi" ? "xiaomi" : brandName}/${model}`)
			.then((response) => {
				if (response) {
					this.setState({
						noMobileMsg: "",
						loadMobile: true,
						mobileList: response.data.mobiles,
					});
				}
			})
			.catch((error) => {
				if (!error.response) {
					console.log("Something went wrong");
				} else {
					this.setState({
						loadMobile: false,
						mobileList: [],
						noMobileMsg: error.response.data.msg,
					});
				}
			});
	};
	_updateBrandData = () => {
		apiCall
			.get(`/phone/${this.state.searchQuery}`)
			.then((response) => {
				this.setState({
					noBrandMsg: "",
					loadBrand: true,
					brandList: response.data.brands,
				});
			})
			.catch((error) => {
				if (!error.response) {
					console.log("Something went wrong");
				} else {
					this.setState({
						loadBrand: false,
						brandList: [],
						noBrandMsg: error.response.data.msg,
					});
				}
			});
	};
	handleSearchQuery = (key, event) => {
		this.setState({
			[key]: event.target.value,
		});
		if (this.state.step == 1 && this.state.searchQuery.length >= 2) {
			this._updateBrandData();
			return;
		}
		if (this.state.step == 2 && this.state.searchQuery.length >= 2) {
			this._updateMobileData();
			return;
		}
	};
	nextStep = (
		brandName = this.state.brand,
		mobileName = this.state.mobile,
		mobImg = this.state.mobImg,
		search = true
	) => {
		this.setState({
			searchQuery: "",
			brand: brandName,
			mobImg: mobImg,
			mobile: mobileName,
			search: search,
			step: this.state.step + 1,
		});
	};
	previousStep = (
		brandName = this.state.brand,
		mobileName = this.state.mobile,
		mobImg = this.state.mobImg,
		search = true,
		step = 1
	) => {
		if (this.state.isEdit) {
			store.addNotification({
				title: "Issue Modfication",
				message: "You CANNOT change the mobile.",
				type: "danger",
				insert: "top",
				container: "top-right",
				dismiss: {
					duration: 600,
					// onScreen: true,
				},
			});
			return;
		}
		if (this.state.step == 2 && step == 1) {
			this.setState({
				brand: "",
				mobImg: "",
				mobile: "",
				searchQuery: "",
				search: search,
				step: this.state.step - step,
			});
		}
		if (this.state.step == 3 && step == 2) {
			this.setState({
				brand: "",
				mobImg: "",
				mobile: "",
				searchQuery: "",
				search: search,
				step: this.state.step - step,
			});
		}
		this.setState({
			brand: brandName,
			mobImg: mobImg,
			mobile: mobileName,
			search: search,
			step: this.state.step - step,
		});
	};

	render() {
		let componentToRender = null;
		const { step, mobile, brand, mobImg } = this.state;
		const values = { mobile, brand, mobImg };
		switch (step) {
			case 1:
				$(".brands").removeClass("active");
				$(".mobiles").removeClass("active");
				componentToRender = (
					<BrandsSelection
						values={values}
						nextStep={this.nextStep}
						brandList={this.state.searchQuery ? this.state.brandList : []}
						noBrandmsg={this.state.noBrandmsg}
					/>
				);
				break;
			case 2:
				$(".brands").addClass("active");
				$(".mobiles").removeClass("active");
				componentToRender = (
					<MobileSelection
						values={values}
						nextStep={this.nextStep}
						previousStep={this.previousStep}
						// searchQuery={this.state.searchQuery}
						mobileList={this.state.searchQuery ? this.state.mobileList : []}
						noMobileMsg={this.state.noBrandmsg}
					/>
				);

				break;
			case 3:
				$(".brands").addClass("active");
				$(".mobiles").addClass("active");
				componentToRender = (
					<IssueSelection
						values={values}
						nextStep={this.nextStep}
						previousStep={this.previousStep}
					/>
				);
				break;
		}
		return (
			<React.Fragment>
				<section className="repairSelection">
					<div className="sectionWrapper">
						<div className="row no-gutters align-items-center justify-content-between">
							<div className="col-4">
								<a
									className="text-center progressBooking brands"
									style={{ cursor: "pointer" }}
									onClick={
										this.state.step == 1
											? null
											: this.state.step == 2
											? () => this.previousStep("")
											: () => this.previousStep("", "", "", true, 2)
									}
								>
									{this.state.brand
										? this.state.brand.charAt(0).toUpperCase() +
										  this.state.brand.slice(1)
										: "Brand"}
								</a>
							</div>
							<div className="col-4">
								<a
									className="text-center progressBooking mobiles"
									style={{ cursor: "pointer" }}
									onClick={
										this.state.step == 2
											? null
											: this.state.step == 3
											? () =>
													this.previousStep(this.state.brand, "", "", true, 1)
											: null
									}
								>
									{this.state.mobile
										? this.state.mobile.charAt(0).toUpperCase() +
										  this.state.mobile.slice(1)
										: "Mobile"}
								</a>
							</div>
							<div className="col-4">
								<a className="text-center progressBooking issues">Issue</a>
							</div>
						</div>
						{this.state.search ? (
							<SearchBar
								showId={this.state.step}
								brandTxt={this.state.brand}
								mobileTxt={this.state.mobile}
								//stackoverflow solution
								handleSearchQuery={this.handleSearchQuery.bind(
									this,
									"searchQuery"
								)}
								value={this.state.searchQuery}
							/>
						) : null}
						{!this.state.loaded ? (
							<p
								style={{
									color: "red",
									fontSize: "19px",
									textAlign: "center",
								}}
							>
								{this.state.noMobileMsg}
							</p>
						) : null}
						{!this.state.loadBrand ? (
							<p
								style={{
									color: "red",
									fontSize: "19px",
									textAlign: "center",
								}}
							>
								{this.state.noBrandMsg}
							</p>
						) : null}
						{componentToRender}
					</div>
				</section>
			</React.Fragment>
		);
	}
}

export default withRouter(RepairSelection);
