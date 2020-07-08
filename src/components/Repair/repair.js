import React, { PureComponent, lazy, Suspense } from "react";
import $ from "jquery";

// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
// import Loader from "react-loader-spinner";
// const RepairBanner = lazy(() => import("../Repair/repairBanner"));
// const RepairSelection = lazy(() => import("../Repair/repairSelection"));
// const Footer = lazy(() => import("../footer"));
// const Header = lazy(() => import("../header"));
// const Services = lazy(() => import("../services"));
// const CollabprateBanner = lazy(() => import("../collabrateBanner"));
import RepairBanner from "../Repair/repairBanner";
import RepairSelection from "../Repair/repairSelection";
import Footer from "../footer";
import Header from "../header";
import Services from "../Services/services";
import CollabprateBanner from "../collabrateBanner";
import Modal from "../modal";

export default class Repair extends PureComponent {
	componentDidMount() {
		document.title = "REPAIR | Get your phone repair | MDDS";
		$("html, body").animate(
			{
				scrollTop: 0,
			},
			0
		);
	}
	render() {
		return (
			<React.Fragment>
				<Header />
				<RepairBanner />
				<RepairSelection />
				<Services />
				<CollabprateBanner />
				<Footer />
				<Modal />
			</React.Fragment>
		);
	}
}
