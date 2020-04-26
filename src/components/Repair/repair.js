import React, { PureComponent } from "react";
import RepairBanner from "../Repair/repairBanner";
import RepairSelection from "../Repair/repairSelection";
import Footer from "../footer";
import Header from "../header";
import Services from "../services";
import CollabprateBanner from "../collabrateBanner";

export default class Repair extends PureComponent {
	render() {
		return (
			<React.Fragment>
				<Header />
				<RepairBanner />
				<RepairSelection />
				<Services />
				<CollabprateBanner />
				<Footer />
			</React.Fragment>
		);
	}
}
