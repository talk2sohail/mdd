import React, { Component } from "react";
import RepairBanner from "../Repair/repairBanner";
import RepairSelection from "../Repair/repairSelection";
import BrandSelection from "../Repair/brandsSelection";
import Collabrate from "../collabrate";
import Footer from "../footer";

export default class Repair extends Component {
	render() {
		return (
			<React.Fragment>
				<RepairBanner />
				<RepairSelection />
				<BrandSelection />
				<Collabrate />
				<Footer />
			</React.Fragment>
		);
	}
}
