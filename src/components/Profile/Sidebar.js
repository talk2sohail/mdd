import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import Auth from "../../Auth";
export default class Sidebar extends PureComponent {
	render() {
		return (
			<div className="col-lg-3 col-12 d-none d-lg-block">
				<div className="sideBarWrapper">
					<Link
						to="/profile"
						className={
							this.props.activeNumber === "1"
								? "sideBarBlock active"
								: "sideBarBlock"
						}
					>
						<h3>My Profile</h3>
						<p>Your Name, Phone Number, Password, Gender,</p>
					</Link>
					<Link
						to="/address"
						className={
							this.props.activeNumber === "2"
								? "sideBarBlock active"
								: "sideBarBlock"
						}
					>
						<h3>My Address</h3>
						<p>Add, Edit Addresses</p>
					</Link>
					<Link
						to="/appointments"
						className={
							this.props.activeNumber === "3"
								? "sideBarBlock active"
								: "sideBarBlock"
						}
					>
						<h3>My Repairs</h3>
						<p>Status of Repair Appointments, Past Repairs</p>
					</Link>
					<Link
						to="/"
						onClick={() => Auth.logout()}
						className={
							this.props.activeNumber === "4"
								? "sideBarBlock active"
								: "sideBarBlock"
						}
					>
						<h3>Logout</h3>
						<p>Logout of your account</p>
					</Link>
				</div>
			</div>
		);
	}
}
