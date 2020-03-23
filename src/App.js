import React, { Component } from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Banner from "./components/banner";
import HowToHelp from "./components/howToHelp";
import Procedure from "./components/procedure";
import Services from "./components/services";
import Brand from "./components/brandList";
import Collabrate from "./components/collabrate";

class App extends Component {
	render() {
		return (
			<React.Fragment>
				<Header />
				<Banner />
				<HowToHelp />
				<Procedure />
				<Services />
				<Brand />
				<Collabrate />
				<Footer />
			</React.Fragment>
		);
	}
}
export default App;
