import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./components/Company/aboutUs";
import Repair from "./components/Repair/repair";
import App from "./App";
import ProfileRoute from "./components/Profile/profile.route";

export default class Routes extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	componentWillMount() {
		this.setState({});
	}
	render() {
		return (
			<Router>
				<React.Fragment>
					<Route exact path="/" component={App} />
					<Route exact path="/repair" component={Repair} />
					<Route exact path="/about" component={About} />
					<Route
						exact
						path={["/profile", "/address", "/appointments"]}
						component={ProfileRoute}
					/>
				</React.Fragment>
				{/* keep this commented else will create whiltespace      */}
			</Router>
		);
	}
}
