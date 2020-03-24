import React, { PureComponent } from "react";
import RepairBanner from "../Repair/repairBanner";
import RepairSelection from "../Repair/repairSelection";
import collabrateBanner from "../collabrateBanner";
import Footer from "../footer";
import Header from "../header";
import Services from "../services";

export default class Repair extends PureComponent {
	render() {
		return (
			<React.Fragment>
				<Header />
				<RepairBanner />
				<RepairSelection />
				<Services />
				<collabrateBanner />
				<Footer />
			</React.Fragment>
		);
	}
}
