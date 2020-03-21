import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./components/Company/aboutUs";
import Repair from "./components/Repair/repair";
import App from "./App";

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
			<React.Fragment>
				<Router>
					      
					<Route exact path="/" component={App} />
					<Route exact path="/about" component={About} />
					               
					<Route exact path="/repair" component={Repair} />
				</Router>
			</React.Fragment>
		);
	}
}
