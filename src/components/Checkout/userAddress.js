import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class UserAddress extends Component {
	render() {
		return (
			<React.Fragment>
				{this.props.userDetails
					? this.props.userDetails.map((address, i) => {
							return (
								<div
									className={
										"savedAddress " +
										`${this.props.index === i ? "selected" : ""}`
									}
									key={i}
									onClick={() => this.props.handleSelectAddress(address, i)}
								>
									<h3>
										{`${address.firstName} ${address.lastName}`}
										<span>{address.contact}</span>
									</h3>
									<h3>{address.email}</h3>
									<p>{`${address.street}  ${address.locality}`}</p>
									<p>{`${address.city},  ${address.state} - ${address.zipcode}`}</p>
								</div>
							);
					  })
					: null}
			</React.Fragment>
		);
	}
}
