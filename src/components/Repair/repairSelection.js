import React, { PureComponent } from "react";
import { Route, Link, Switch, withRouter } from "react-router-dom";
import IssueSelection from "./issueSelection";
import BrandsSelection from "./brandsSelection";
import MobileSelection from "./mobileSelection";
import SearchBar from "./searchBar";

class RepairSelection extends PureComponent {
	state = {
		componentNeedToRender: null,
		search: true
	};
	componentDidMount() {
		window.$(".brands").click(() => {
			this.state.componentNeedToRender = <BrandsSelection />;
			window.$(".mobiles").removeClass("active");
			this.state.search = true;
		});
		window.$(".mobiles").click(() => {
			this.state.componentNeedToRender = <MobileSelection />;
			window.$(".brands").addClass("active");
			window.$(".mobiles").removeClass("active");
			this.state.search = true;
		});
		window.$(".issues").click(() => {
			window.$(".brands").addClass("active");
			window.$(".mobiles").addClass("active");
			this.state.componentNeedToRender = <IssueSelection />;
			this.state.search = false;
		});
	}
	render() {
		const { match } = this.props;
		// console.log(match.url);
		let componentToRender = this.state.componentNeedToRender;
		return (
			<React.Fragment>
				<section className="repairSelection">
					<div className="sectionWrapper">
						<div className="row no-gutters align-items-center justify-content-between">
							<div className="col-4">
								<Link className="text-center progressBooking brands">
									Brand
								</Link>
							</div>
							<div className="col-4">
								<Link className="text-center progressBooking mobiles">
									Mobile
								</Link>
							</div>
							<div className="col-4">
								<Link className="text-center progressBooking issues">
									Issue
								</Link>
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
