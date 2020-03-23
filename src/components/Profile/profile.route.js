import React, { PureComponent } from "react";
import { Route, Link, Switch, Router } from "react-router-dom";
import Header from "../header";
import Footer from "../footer";
import Profile from "./profile";
import Address from "./address";
import Appointments from "./appointments";

export default class ProfileRoute extends PureComponent {
	render() {
		return (
			<React.Fragment>
				<Header />
				<Route exact path="/profile" component={Profile} />
				<Route exact path="/address" component={Address} />
				<Route exact path="/appointments" component={Appointments} />
				<Footer />
			</React.Fragment>
		);
	}
}
