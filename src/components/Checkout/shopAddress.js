import React, { Component } from "react";
import apiCall from "../../axios";
export default class ShopAddress extends Component {
	constructor(props) {
		super(props);
		this.state = {
			shop_name: "",
			address: {},
			contact: "",
		};
	}

	componentDidMount() {
		if (localStorage.getItem("shop_address")) {
			this.setState({
				shop_name: JSON.parse(localStorage.getItem("shop_address")).shop_name,
				contact: JSON.parse(localStorage.getItem("shop_address")).contact,
				address: JSON.parse(localStorage.getItem("shop_address")).address[0],
			});
		} else {
			apiCall
				.get("/shopaddress")
				.then((response) => {
					const { shop, success } = response.data;
					if (success) {
						if (!localStorage.getItem("shop_address"))
							localStorage.setItem("shop_address", JSON.stringify(shop));
						this.setState({
							shop_name: shop.shop_name,
							address: shop.address[0],
							contact: shop.contact,
						});
					}
				})
				.catch((error) => {
					if (!error.response) {
						console.log("Cannot get the shop Address");
					} else {
						console.log(error.response.data.msg);
					}
				});
		}
	}

	render() {
		return (
			<React.Fragment>
				<div className="savedAddress selected">
					<h3>
						{this.state.shop_name}
						<span>{this.state.contact}</span>
					</h3>

					<p>{`${this.state.address.street} ${this.state.address.locality}`}</p>
					<p>{`${this.state.address.city}, ${this.state.address.state} - ${this.state.address.zipcode}`}</p>
				</div>
			</React.Fragment>
		);
	}
}
