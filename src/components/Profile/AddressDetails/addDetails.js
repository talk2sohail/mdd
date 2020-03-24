import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class AddDetails extends Component {
	render() {
		return (
			<React.Fragment>
				<div className="savedAddress">
					<h3>
						Md Javed Akhtar <span>9831983198</span>
					</h3>
					<p>10, Park Street, Kolkata-700 016. Park Street Police Station</p>
					<p>Kolkata, West Bengal - 700016</p>
					<div className="d-flex">
						<Link to="/editaddress" className="gradientText">
							Edit
						</Link>
						<Link to="" className="delete">
							Delete
						</Link>
					</div>
				</div>
			</React.Fragment>
		);
	}
}
