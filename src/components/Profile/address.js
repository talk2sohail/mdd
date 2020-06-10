import React, { Component } from "react";
import { Link } from "react-router-dom";
import AddDetails from "./Address/AddressDetails/addDetails";
import Sidebar from "./Sidebar";
import Header from "../header";
import Footer from "../footer";
import Modal from "../modal";

import apiCall from "../../axios";

export default class Address extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			userAddress: [],
		};
	}
	componentDidMount() {
		const token = apiCall.getToken();
		// console.log(accessToken);
		const accessToken = `Bearer ${token}`;
		apiCall
			.get("/user/profile", accessToken)
			.then((response) => {
				console.log(response.data);
				this.setState({
					email: response.data.user.email,
					userAddress: response.data.user.address,
				});
				setTimeout(() => {
					console.log(this.state);
				}, 1200);
			})
			.catch((error) => {
				// console.log(error.response.data.msg);
				if (!error.respsonse) {
					console.log("Something went Wrong");
				} else {
					console.log(error.response.data);
				}
			});
	}

	removeAddress = (address) => {
		//copy the state, so that id does not mutate state
		const array = [...this.state.userAddress];
		let removed;
		//get the index of the selected address in the temporary address state 'array'
		let index = array.indexOf(address);
		if (index !== -1) {
			//remove the that specific address from the list of address
			removed = array.splice(index, 1);
			//update the address list
			this.setState({
				userAddress: array,
			});
		}
		//get the _id of the address being removed from the list
		const { _id } = removed[0];
		const { email } = this.state;
		const token = apiCall.getToken();
		const accessToken = `Bearer ${token}`;
		//call the api to remove address
		apiCall
			.post("/user/deleteaddress", { email, _id }, accessToken)
			.then((response) => {
				const { success, msg } = response.data;
				if (success) console.log(msg);
			})
			.catch((error) => {
				if (!error.response) {
					console.log("Something went wrong");
				} else {
					console.log(error.response.data);
				}
			});
	};
	render() {
		return (
			<React.Fragment>
				<Header />
				<section className="profileWrapper">
					<div className="sectionWrapper">
						<div className="row justify-content-center">
							<Sidebar activeNumber="2" />
							<div className="col-lg-9 col-12">
								<div className="userWrapper">
									<div className="userHeader">
										<h2>Manage Address</h2>
									</div>
									<div className="userDetails">
										<Link
											className="addAddress d-block gradientText"
											to="/addAddress"
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="18"
												height={18}
												viewBox="0 0 18 18"
												fill="#56ccf2"
											>
												<path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z" />
											</svg>
											ADD NEW ADDRESS
										</Link>
										<AddDetails
											userDetails={this.state.userAddress}
											handleRemoveAddress={this.removeAddress.bind(this)}
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<Footer />
				<Modal />
			</React.Fragment>
		);
	}
}
