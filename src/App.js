import React, { Component } from "react";
import $ from "jquery";

import Header from "./components/header";
import Modal from "./components/modal";
import Footer from "./components/footer";
import Banner from "./components/banner";
import HowToHelp from "./components/howToHelp";
import Procedure from "./components/procedure";
import Services from "./components/Services/services";
import Brand from "./components/brandList";
import CollaborateBanner from "./components/collabrateBanner";

class App extends Component {
	componentDidMount() {
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
				<Banner />
				<HowToHelp />
				<Procedure />
				<Services />
				<Brand />
				<CollaborateBanner />
				<Footer />
				<Modal />
			</React.Fragment>
		);
	}
}
export default App;
