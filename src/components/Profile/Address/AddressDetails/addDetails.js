import React, { Component } from "react";
import apiCall from "../../../../axios";
import { Link } from "react-router-dom";

export default class AddDetails extends Component {
	handleEdit = (address) => {
		console.log(address);
		// address.email = this.props.email;
		// send it to the sessionStorage to catch it for edit
		sessionStorage.setItem("user_add", JSON.stringify(address));
	};
	render() {
		return (
			<React.Fragment>
				{this.props.userDetails
					? this.props.userDetails.map((address, index) => {
							return (
								<div className="savedAddress" key={index}>
									<h3>
										{`${address.firstName} ${address.lastName}`}
										<span>{address.contact}</span>
									</h3>
									<h3>{address.email}</h3>
									<p>{`${address.street}  ${address.locality}`}</p>
									<p>{`${address.city},  ${address.state} - ${address.zipcode}`}</p>
									<div className="d-flex">
										<Link
											to="/editaddress"
											onClick={() => this.handleEdit(address)}
											className="gradientText"
										>
											Edit
										</Link>
										<Link
											to="#"
											onClick={() => this.props.handleRemoveAddress(address)}
											className="delete"
										>
											Delete
										</Link>
									</div>
								</div>
							);
					  })
					: null}
			</React.Fragment>
		);
	}
}
