import React, { PureComponent } from "react";
import { Link, withRouter } from "react-router-dom";
import { store } from "react-notifications-component";
import $ from "jquery";
import Auth from "../../Auth";
import apiCall from "../../axios";

class IssueSelection extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			problems: [],
			totallow: 0,
			totalhigh: 0,
			issues: [],

			//handling state when user search the problems
			s_issues: [],

			//editting state
			cart_id: "",
			isEdit: false,
			edited_issues: [],
			issues_names: [],
			isEdit: false,
		};
		this.addIssue = this.addIssue.bind(this);
	}

	componentDidMount() {
		window.scroll(0, 500);

		//this will fetch the issues from LS else call the api to restore issues from DB
		if (localStorage.getItem("issues_info")) {
			//this is the case when the user is comming after seacrhing the problems
			if (localStorage.getItem("searchItems")) {
				// const issues_list_from_state = JSON.parse(
				// 	localStorage.getItem("issues_info")
				// );
				const searched_issue_names = JSON.parse(
					localStorage.getItem("searchItems")
				);
				const issues_list_from_state = JSON.parse(
					localStorage.getItem("issues_info")
				);
				const map_searched_issues = issues_list_from_state.filter((issue) =>
					searched_issue_names.includes(issue.issue_name)
				);
				this.setState({
					issues: map_searched_issues,
					totalhigh: 0,
					totallow: 0,
					issues_names: searched_issue_names,
					// problems: JSON.parse(localStorage.getItem("issues_info")),
				});
				setTimeout(() => {
					console.log(this.state);
				}, 1000);
			}
			//listing the issues on the page
			this.setState({
				// issues: JSON.parse(localStorage.getItem("issues_info")),
				problems: JSON.parse(localStorage.getItem("issues_info")),
			});
		} else {
			apiCall
				.get("/issues")
				.then((respsonse) => {
					console.log(respsonse.data);
					localStorage.setItem(
						"issues_info",
						JSON.stringify(respsonse.data.issues)
					);
					this.setState({
						problems: respsonse.data.issues,
						// issues: respsonse.data.issues,
					});
					//this is the case when the user is comming after seacrhing the problems
					if (localStorage.getItem("searchItems")) {
						// const issues_list_from_state = JSON.parse(
						// 	localStorage.getItem("issues_info")
						// );
						const searched_issue_names = JSON.parse(
							localStorage.getItem("searchItems")
						);
						// const issues_list_from_state = this.state.s_issues;
						console.log(this.state.s_issues);
						const map_searched_issues = this.state.s_issues.map((issue) =>
							searched_issue_names.includes(issue.issue_name) ? issue : null
						);
						this.setState({
							search_updated_issue: map_searched_issues,
						});

						setTimeout(() => {
							console.log(this.state);
						}, 1000);
					}
				})
				.catch((error) => {
					if (!error.respsonse) {
						console.error("Network Error");
					} else {
						console.log(error.respsonse.data);
					}
				});
		}

		// get the items from the LS if any
		//map the issues that has been already selected
		//if the already issue is removed go for the addtion of new new product, tell this to ths user

		//this is the case when the user has the same mobile in the cart
		//currently selected mobile and brand
		const selectedBrand = this.props.values.brand;
		const selectedMobile = this.props.values.mobile;
		//get the items from the cart
		if (localStorage.getItem("cart-item")) {
			const cart = JSON.parse(localStorage.getItem("cart-item"));
			//check the selected brand is in the cart or not
			//get the mobile already in cart : Array
			const matched = cart.filter((c) => c.mobile === selectedMobile);
			console.log(matched);
			//make an array of issue names that are already present
			//already selected issues array
			const edit_iss = [];
			//already selected issues names
			const names = [];
			if (matched[0] !== undefined) {
				store.addNotification({
					title: `${selectedBrand} ${selectedMobile} Modification`,
					message:
						"This item is already on your cart. You can choose to remove or add extra issue in it. It will be updated in your cart",
					type: "info",
					insert: "top",
					container: "top-right",
					dismiss: {
						duration: 13000,
						onScreen: true,
						showIcon: true,
					},
				});
				let low = 0;
				let high = 0;
				matched[0].issue.forEach((iss) => {
					edit_iss.push(iss);
					low += iss.low;
					high += iss.high;
					names.push(iss.issue_name);
				});
				this.setState({
					cart_id: matched[0]._id,
					totallow: low,
					totalhigh: high,
					issues: edit_iss,
					edited_issues: edit_iss,
					issues_names: names,
					isEdit: true,
				});
			}
		}

		setTimeout(() => {
			console.log(this.state);
		}, 1000);
		//if it is indeed selected show the message to user he is modifying an item in the cart
	}
	onModify = (e) => {
		e.preventDefault();
		//if no issue is selected show the message to user
		if (this.state.edited_issues.length === 0) {
			store.addNotification({
				title: "Issue Selection",
				message: "Please Select ISSUE first.",
				type: "warning",
				insert: "top",
				container: "top-right",
				dismiss: {
					duration: 600,
					// onScreen: true,
					// showIcon: true,
				},
			});
			return;
		}
		const value = this.props.values;
		if (this.state.isEdit) {
			const token = apiCall.getToken();
			const accessToken = `Bearer ${token}`;
			// const { cart_id } = value;
			apiCall
				.post(
					"/updatecart",
					{
						cart_id: this.state.cart_id,
						brand: value.brand,
						mobile: value.mobile,
						img: value.mobImg,
						issue: this.state.edited_issues,
					},
					accessToken
				)
				.then((respsonse) => {
					console.log(respsonse.data);
					store.addNotification({
						title: `Cart Item Modified`,
						message: `${value.brand} ${value.mobile} is modified.`,
						type: "info",
						insert: "top",
						container: "top-right",
						dismiss: {
							duration: 1600,
						},
					});

					//update the cart in LS to maintain sync with header
					if (localStorage.getItem("cart-item")) {
						const prevCart = JSON.parse(localStorage.getItem("cart-item"));
						prevCart.forEach((cart) => {
							if (cart.mobile === value.mobile) {
								cart.issue = this.state.edited_issues;
							}
						});
						localStorage.setItem("cart-item", JSON.stringify(prevCart));
					}
					window.location.reload();
				})
				.catch((error) => {
					if (!error.respsonse) {
						console.log("Something went wrong");
					} else {
						console.log(error.respsonse.data);
					}
				});
		}
	};
	onCheckOut = (e) => {
		e.preventDefault();
		//values has the {brand, mobImg, mobile}
		if (!Auth.getAuth()) {
			// notifier.error("You are not logged in.");
			store.addNotification({
				title: "Error!",
				message: "You are Not Logged In.",
				type: "danger",
				insert: "top",
				container: "top-right",
				dismiss: {
					duration: 1600,
					// onScreen: true,
				},
			});
			return;
		}
		//if no issue is selected throw a warning
		if (this.state.issues.length === 0) {
			store.addNotification({
				title: "Issue Selection",
				message: "Please select issue first.",
				type: "warning",
				insert: "top",
				container: "top-right",
				dismiss: {
					duration: 600,
					// onScreen: true,
				},
			});
			return;
		}
		const value = this.props.values;
		const order_info = {
			brand: value.brand,
			mobile: value.mobile,
			img: value.mobImg,
			issue: this.state.issues,
		};

		const token = apiCall.getToken();
		const accessToken = `Bearer ${token}`;
		apiCall
			.post("/addcart", order_info, accessToken)
			.then((respsonse) => {
				console.log(respsonse.data);
				if (localStorage.getItem("cart-item")) {
					const cart = localStorage.getItem("cart-item");
					const array = JSON.parse(cart);
					array.push(order_info);
					localStorage.setItem("cart-item", JSON.stringify(array));
				} else {
					const cart = [];
					cart.push(order_info);
					localStorage.setItem("cart-item", JSON.stringify(cart));
				}

				//you must go to checkout on addition, if you have items already in the cart take it all from LS
				store.addNotification({
					title: "Repair Addition",
					message: "Your Mobile has been added to cart",
					type: "success",
					insert: "top",
					container: "top-right",
					dismiss: {
						duration: 600,
						// onScreen: true,
					},
				});
				setTimeout(() => {
					this.props.history.push("/checkout");
				}, 600);
			})
			.catch((error) => {
				console.log(error.respsonse.data);
			});
	};
	addIssue = (issue) => {
		this.setState({
			totallow: this.state.totallow + issue.low,
			totalhigh: this.state.totalhigh + issue.high,
			issues: [...this.state.issues, issue],
			edited_issues: [...this.state.edited_issues, issue],
			issues_names: [...this.state.issues_names, issue.issue_name],
		});
	};
	removeIssue = (issue) => {
		//get the names of the issues in the states
		const new_names = [...this.state.issues_names]; //array of issue names : string
		const array = [...this.state.issues]; // array of issues : object
		const edit_issues = [...this.state.edited_issues]; //array of issues : object
		//get the names of the issues that are left to remove in future for update
		const updatedIssueNames = new_names.filter((is) => is !== issue.issue_name);
		const new_ar = array.filter((iss) => iss.issue_name !== issue.issue_name);
		const new_edit_issues = edit_issues.filter(
			(iss) => iss.issue_name !== issue.issue_name
		);
		this.setState({
			totallow: this.state.totallow - issue.low,
			totalhigh: this.state.totalhigh - issue.high,
			issues: new_ar,
			edited_issues: new_edit_issues,
			issues_names: updatedIssueNames,
		});
	};

	render() {
		return (
			<React.Fragment>
				<div className="row no-gutters justify-content-start align-items-center selectOption mt-2">
					<div className="col-12 col-md-6">
						<h2>{`Select your issue in ${this.props.values.brand} ${this.props.values.mobile}`}</h2>
					</div>
					<div className="col-12 col-md-6 text-right buttons">
						{!this.state.isEdit ? (
							Auth.getAuth() ? (
								<a
									style={{ cursor: "pointer" }}
									onClick={this.onCheckOut}
								>{`CHECKOUT (Rs ${this.state.totallow}-${this.state.totalhigh})`}</a>
							) : (
								<a
									style={{ cursor: "pointer" }}
									data-toggle="modal"
									data-target="#loginModalCenter"
									data-dismiss="modal"
								>{`CHECKOUT (Rs ${this.state.totallow}-${this.state.totalhigh})`}</a>
							)
						) : (
							<a
								style={{ cursor: "pointer" }}
								onClick={this.onModify}
							>{`MODIFY (Rs ${this.state.totallow}-${this.state.totalhigh})`}</a>
						)}
					</div>
				</div>
				<div className="row no-gutters justify-content-start align-items-center issueSelection selectOption">
					{this.state.problems
						? this.state.problems.map((issue, index) => {
								return (
									<div className="col-12 col-md-6 col-lg-4" key={index}>
										<div className="branWrap ">
											<div className="iconWrap">
												<img
													src="/assets/images/icons/broken-phone.png"
													alt="issues"
												/>
											</div>
											<div className="contentWrap">
												<h4>{issue.issue_name}</h4>
												<p>{issue.details}</p>
												<p className="price">
													{/* <span> </span> */}
													Rs {issue.low} - Rs {issue.high}
												</p>
											</div>
											<a
												className={
													this.state.issues_names.indexOf(issue.issue_name) ===
													-1
														? ""
														: "remove"
												}
												onClick={
													this.state.issues_names.indexOf(issue.issue_name) !==
													-1
														? () => this.removeIssue(issue)
														: () => this.addIssue(issue)
												}
											>
												<span>+ Add</span>
												<span
													className={`d-${
														this.state.issues_names.indexOf(
															issue.issue_name
														) !== -1
															? "block"
															: "none"
													}`}
												>
													<svg
														xmlns="http://www.w3.org/2000/svg"
														width={18}
														height={18}
														viewBox="0 0 18 18"
														fill="#fff"
													>
														<path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z" />
													</svg>
													&nbsp;Remove
												</span>
											</a>
										</div>
									</div>
								);
						  })
						: null}
				</div>
			</React.Fragment>
		);
	}
}

export default withRouter(IssueSelection);
