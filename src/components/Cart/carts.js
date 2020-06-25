import React, { PureComponent } from "react";
import { store } from "react-notifications-component";
import { Link, withRouter } from "react-router-dom";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

import Footer from "../footer";
import Header from "../header";
import Modal from "../modal";

import Auth from "../../Auth";

import apiCall from "../../axios";
import Cart from "./cart";
class Carts extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			isLoggedIn: false,
			isCartLoaded: false,
			carts: [],
			isVerified: false,
		};
		this.checkEmail = this.checkEmail.bind(this);
	}
	checkEmail = () => {
		if (!this.state.isVerified) {
			store.addNotification({
				title: "Email Verification!",
				message: "Your email is not verified.",
				type: "danger",
				insert: "top",
				container: "top-right",
				dismiss: {
					duration: 1500,
				},
			});
			this.props.history.push("/profile");
		} else {
			this.props.history.push("/checkout");
		}
	};
	componentDidMount() {
		window.scroll(0, 0);
		if (Auth.getAuth()) {
			const token = apiCall.getToken();
			const accessToken = `Bearer ${token}`;
			apiCall
				.get("/getcart", accessToken)
				.then((response) => {
					// .then() always catch 2** repsonse
					const { success, cart, isVerified } = response.data;
					if (success) {
						console.log('data loaded');
						
						this.setState({
							isCartLoaded: true,
							isVerified: isVerified,
							carts: cart.carts,
						});
						localStorage.setItem(
							"cart-item",
							JSON.stringify(response.data.cart.carts)
						);
					}
				})
				.catch((error) => {
					// .catch(0 always catches 4** response
					if (!error.response) {
						console.log("Something went wrong.");
					} else {
						const { success, msg } = error.response.data;
						if (success)
							this.setState({
								isCartLoaded: true,
								carts: [],
							});
						else if (!success) {
							this.setState({
								isCartLoaded: true,
							});
						}
					}
				});
		}
	}
	deleteCart = (cart) => {
		//copy the state, so that it does not mutate state
		const array = [...this.state.carts];
		//remove the selected item from the state
		const new_state = array.filter((c) => c._id !== cart._id);
		//update the state for the screen
		this.setState({
			carts: new_state,
		});

		//Sync the LS with carts for the header icon to show something
		if (localStorage.getItem("cart-item")) {
			//cart-item is an array of objects
			const arr = JSON.parse(localStorage.getItem("cart-item"));
			//if the LS has only one item remove it otherwise it will give null error
			if (arr.length === 1) localStorage.removeItem("cart-item");
			else if (arr.length > 1) {
				//if cart has more than two items filter it with the selected one
				const new_arr = arr.filter((c) => c._id !== cart._id);
				localStorage.setItem("cart-item", JSON.stringify(new_arr));
			}
		}

		// get the _id of the selected cart to remove
		const id = cart._id;
		const token = apiCall.getToken();
		const accessToken = `Bearer ${token}`;
		apiCall
			.post("/deletecart", { cart_id: id }, accessToken)
			.then((response) => {
				console.log(response.data.msg);
			})
			.catch((err) => {
				if (!err.response) {
					console.log("Something went wrong");
				} else {
					console.log(err.response.data.msg);
				}
			});
	};
	render() {
		let loader = (
			<Loader
				type="TailSpin"
				color="#00BFFF"
				height={100}
				width={100}
				timeout={5000}
				style={{ textAlign: "center", margin: "0 auto" }}
			/>
		);
		return (
			<React.Fragment>
				<Header />
				<section className="checkoutWrapper profileWrapper">
					<div className="sectionWrapper">
						<div className="row justify-content-center">
							<div className="col-12 col-lg-8">
								<div className="userWrapper">
									<div className="userHeader">
										<h2>My Cart</h2>
										{this.state.carts.length === 0 ? null : (
											<a
												style={{ cursor: "pointer" }}
												onClick={this.checkEmail}
												className="text-center buttons"
											>
												CHECKOUT NOW
											</a>
										)}
									</div>
									{!Auth.getAuth() ? (
										<div className="emptyBlock">
											<img
												src="assets/images/icons/emty_cart.svg"
												className="img-fluid"
												alt="empty"
											/>
											<p>No Item in Your cart</p>
										</div>
									) : this.state.isCartLoaded ? (
										this.state.carts.length !== 0 ? (
											<Cart
												cartData={this.state.carts}
												delete={this.deleteCart.bind(this)}
											/>
										) : (
											<div className="emptyBlock">
												<img
													src="assets/images/icons/emty_cart.svg"
													className="img-fluid"
													alt="empty"
												/>
												<p>No Item in Your cart</p>
											</div>
										)
									) : (
										loader
									)}
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

export default withRouter(Carts);
