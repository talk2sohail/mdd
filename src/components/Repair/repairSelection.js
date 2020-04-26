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
			issues: [],
			step: 1,
			search: true,
		};

		this.nextStep = this.nextStep.bind(this);
		this.previousStep = this.previousStep.bind(this);
	}

	nextStep = (brandName = "", mobileName = "", search = true) => {
		this.setState({
			brand: brandName,
			mobile: mobileName,
			search: search,
			step: this.state.step + 1,
		});
	};
	previousStep = (brandName = "", mobileName = "", search = true) => {
		this.setState({
			brand: brandName,
			mobile: mobileName,
			search: search,
			step: this.state.step - 1,
		});
	};
	// componentDidMount() {
	// 	$(".brands").click(() => {
	// 		$(".mobiles").removeClass("active");
	// 		this.state.search = true;
	// 	});
	// 	$(".mobiles").click(() => {
	// 		$(".brands").addClass("active");
	// 		$(".mobiles").removeClass("active");
	// 		this.state.search = true;
	// 	});
	// 	$(".issues").click(() => {
	// 		$(".brands").addClass("active");
	// 		$(".mobiles").addClass("active");
	// 		this.state.search = false;
	// 	});
	// }
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
										this.state.step == 2 || this.state.step == 3
											? () => this.previousStep()
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
										this.state.step == 3
											? () => this.previousStep()
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
						{this.state.search ? <SearchBar /> : null}
						{componentToRender}
					</div>
				</section>
			</React.Fragment>
		);
	}
}

export default withRouter(RepairSelection);
