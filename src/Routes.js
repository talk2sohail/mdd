import React, { Component, Suspense, lazy } from "react";
import "react-notifications-component/dist/theme.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import ReactNotification from "react-notifications-component";
import {
	BrowserRouter as Router,
	Redirect,
	Route,
	Switch,
} from "react-router-dom";
import Auth from "./Auth";
import ChangePassword from "./components/ChangePassword/changePassword";

const App = lazy(() => import("./App"));
const Repair = lazy(() => import("./components/Repair/repair"));
const Collaborate = lazy(() => import("./components/collaborate"));
const Faq = lazy(() => import("./components/Company/faq"));
const Feedback = lazy(() => import("./components/Company/feedback"));
const Carts = lazy(() => import("./components/Cart/carts"));
const Checkout = lazy(() => import("./components/Checkout/checkout"));
const About = lazy(() => import("./components/Company/aboutUs"));
const Profile = lazy(() => import("./components/Profile/profile"));
const Address = lazy(() => import("./components/Profile/address"));
const Appointments = lazy(() => import("./components/Profile/appointments"));
const AddAddress = lazy(() =>
	import("./components/Profile/Address/addAddress")
);
const EditProfile = lazy(() => import("./components/Profile/editProfile"));
const Editaddress = lazy(() =>
	import("./components/Profile/Address/editaddress")
);
const EmailVerifcation = lazy(() =>
	import("./components/Profile/emailVerifcation")
);
const Thankyou = lazy(() => import("./components/thankyou"));
const Error = lazy(() => import("./components/error"));

export default class Routes extends Component {
	render() {
		return (
			<Router>
				<ReactNotification />

				<Suspense
					fallback={
						<Loader
							type="TailSpin"
							color="#00BFFF"
							height={100}
							width={100}
							timeout={3000}
							style={{ textAlign: "center", margin: "40px" }}
						/>
					}
				>
					<Switch>
						<Route exact path="/" component={App} />
						<Route exact path="/repair" component={Repair} />
						<Route exact path="/collaborate" component={Collaborate} />
						<Route exact path="/faq" component={Faq} />
						<Route exact path="/feedback" component={Feedback} />
						<PrivateRoute exact path="/cart" component={Carts} />
						<PrivateRoute exact path="/checkout" component={Checkout} />
						<PrivateRoute exact path="/thankyou" component={Thankyou} />
						<Route exact path="/about" component={About} />
						<PrivateRoute exact path="/profile" component={Profile} />
						<PrivateRoute exact path="/address" component={Address} />
						<PrivateRoute exact path="/appointments" component={Appointments} />
						<PrivateRoute exact path="/editprofile" component={EditProfile} />
						<PrivateRoute exact path="/addAddress" component={AddAddress} />
						<PrivateRoute exact path="/editAddress" component={Editaddress} />
						<PrivateRoute
							exact
							path="/changepassword"
							component={ChangePassword}
						/>
						<PrivateRoute
							exact
							path="/emailverification"
							component={EmailVerifcation}
						/>
						<Route exact component={Error} />
					</Switch>
				</Suspense>

				{/* keep this commented else will create whiltespace      */}
			</Router>
		);
	}
}

const PrivateRoute = ({ component: Component, ...rest }) => (
	<Route
		{...rest}
		render={(props) =>
			Auth.getAuth() ? (
				<Component {...props} />
			) : (
				<Redirect to={{ pathname: "/" }} />
			)
		}
	/>
);

// import About from "./components/Company/aboutUs";
// import Repair from "./components/Repair/repair";
// import App from "./App";
// import Address from "./components/Profile/address";
// import Profile from "./components/Profile/profile";
// import Appointments from "./components/Profile/appointments";
// import EditProfile from "./components/Profile/editProfile";
// import AddAddress from "./components/Profile/Address/addAddress";
// import Editaddress from "./components/Profile/Address/editaddress";
// import Collaborate from "./components/collaborate";
// import Checkout from "./components/Checkout/checkout";
// import Feedback from "./components/Company/feedback";
// import Faq from "./components/Company/faq";
// import EmailVerifcation from "./components/Profile/emailVerifcation";
// import Error from "./components/error";
// import Carts from "./components/Cart/carts";
