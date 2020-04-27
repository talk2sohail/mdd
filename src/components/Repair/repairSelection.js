import React, { PureComponent } from "react";
import { Link, withRouter } from "react-router-dom";
import IssueSelection from "./issueSelection";
import BrandsSelection from "./brandsSelection";
import MobileSelection from "./mobileSelection";
import $ from "jquery";
import SearchBar from "./searchBar";

class RepairSelection extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			brand: "",
			mobile: "",
			issue: [],
			step: 1,
			errorMsg: "",
			search: true,
		};

		this.nextStep = this.nextStep.bind(this);
		this.previousStep = this.previousStep.bind(this);
	}

	nextStep = (
		brandName = this.state.brand,
		mobileName = this.state.mobile,
		search = true
	) => {
		this.setState({
			brand: brandName,
			mobile: mobileName,
			search: search,
			step: this.state.step + 1,
		});
	};
	previousStep = (
		brandName = this.state.brand,
		mobileName = this.state.mobile,
		search = true
	) => {
		this.setState({
			brand: brandName,
			mobile: mobileName,
			search: search,
			step: this.state.step - 1,
		});
	};

	render() {
		let componentToRender = null;
		const { step, mobile, brand, issues } = this.state;
		const values = { mobile, brand, issues };
		switch (step) {
			case 1:
				$(".brands").removeClass("active");
				$(".mobiles").removeClass("active");
				componentToRender = (
					<BrandsSelection values={values} nextStep={this.nextStep} />
				);
				console.log(this.state);
				break;
			case 2:
				$(".brands").addClass("active");
				$(".mobiles").removeClass("active");
				componentToRender = (
					<MobileSelection
						values={values}
						nextStep={this.nextStep}
						previousStep={this.previousStep}
					/>
				);
				console.log(this.state);
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
				console.log(this.state);
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
									onClick={
										this.state.step > 1
											? () => this.previousStep("")
											: () => this.nextStep()
									}
								>
									{this.state.brand ? this.state.brand : "Brand"}
								</a>
							</div>
							<div className="col-4">
								<a
									className="text-center progressBooking mobiles"
									onClick={
										this.state.step > 2
											? () => this.previousStep(this.state.brand, "")
											: () => this.nextStep()
									}
								>
									{this.state.mobile ? this.state.mobile : "Mobile"}
								</a>
							</div>
							<div className="col-4">
								<a
									className="text-center progressBooking issues"
									onClick={() => this.nextStep()}
								>
									Issue
								</a>
							</div>
						</div>
						{this.state.search ? (
							<SearchBar
								showId={this.state.step}
								brandTxt={this.state.brand}
								mobileTxt={this.state.mobile}
							/>
						) : null}
						{componentToRender}
					</div>
				</section>
			</React.Fragment>
		);
	}
}

export default withRouter(RepairSelection);
