import React, { Component } from "react";
import apiCall from "../../../axios";
import { Link } from "react-router-dom";

export default class AddDetails extends Component {
	constructor(props) {
		super(props);
		this.state = {
			userDetails: {
				first_name: "",
				last_name: "",
				contact: "",
			},
			addDetails: {
				street: "",
				locality: "",
				state: "",
				zipcode: "",
			},
		};
	}
	componentDidMount() {
		const token = apiCall.getToken();
		// console.log(accessToken);
		const accessToken = `Bearer ${token}`;
		apiCall
			.get("/user/profile", accessToken)
			.then((response) => {
				this.setState((state) => {
					const addDetails = { ...response.data.user.address };
					const userDetails = { ...response.data.user };

					return {
						state,
						userDetails,
						addDetails,
					};
				});
			})
			.catch((error) => {
				console.log(error.response.data.msg);
			});
	}
	render() {
		return (
			<React.Fragment>
				<div className={"savedAddress" + ` ${this.props.cls}`}>
					<h3>
						{`${this.state.userDetails.first_name} ${this.state.userDetails.last_name}`}
						<span>{this.state.userDetails.contact}</span>
					</h3>
					<p>{`${this.state.addDetails.street} ${this.state.addDetails.locality}`}</p>
					<p>{`${this.state.addDetails.state} ${this.state.addDetails.zipcode}`}</p>
					{this.props.loadEditDelete === "1" ? (
						<div className="d-flex">
							<Link to="/editaddress" className="gradientText">
								Edit
							</Link>
							<Link to="" className="delete">
								Delete
							</Link>
						</div>
					) : null}
				</div>
			</React.Fragment>
		);
	}
}
