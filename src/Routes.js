import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./components/Company/aboutUs";
import Repair from "./components/Repair/repair";
import App from "./App";
import Address from "./components/Profile/address";
import Profile from "./components/Profile/profile";
import Appointments from "./components/Profile/appointments";
import EditProfile from "./components/Profile/editProfile";
import AddAddress from "./components/Profile/addAddress";
import Editaddress from "./components/Profile/editaddress";
import Collaborate from "./components/collaborate";
import Checkout from "./components/Company/Checkout/checkout";
import Feedback from "./components/Company/feedback";
import Faq from "./components/Company/faq";

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
					<Route exact path="/collaborate" component={Collaborate} />
					<Route exact path="/faq" component={Faq} />
					<Route exact path="/feedback" component={Feedback} />
					<Route exact path="/checkout" component={Checkout} />
					<Route exact path="/about" component={About} />
					<Route exact path="/profile" component={Profile} />
					<Route exact path="/address" component={Address} />
					<Route exact path="/appointments" component={Appointments} />
					<Route exact path="/editprofile" component={EditProfile} />
					<Route exact path="/addAddress" component={AddAddress} />
					<Route exact path="/editAddress" component={Editaddress} />
				</React.Fragment>
				{/* keep this commented else will create whiltespace      */}
			</Router>
		);
	}
}
