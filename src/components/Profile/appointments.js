import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

import Sidebar from "./Sidebar";
import Header from "../header";
import Footer from "../footer";
import Modal from "../modal";

import apiCall from "../../axios";
import Completed from "./Appointments/completed";
import Cancelled from "./Appointments/cancelled";
import Repairing from "./Appointments/repairing";
import Revision from "./Appointments/revision";
import BookingDetails from "./Appointments/bookingDetails";

export default class Appointments extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loaded: false,
			error: "",
			activeTab: "all",
			details_tab: false,
			booking_id: "",
			appointments: [],
			cancelled_appointments: [],
			revisions_appointments: [],
			repairing_appointments: [],
			completed_appointments: [],
		};

		this.tabHandler = this.tabHandler.bind(this);
	}
	// static getDerivedStateFromProps(props, state) {
	// 	return {
	// 		details_tab: false,
	// 	};
	// }
	componentDidMount() {
		const token = apiCall.getToken();
		const accessToken = `Bearer ${token}`;
		apiCall
			.get("/appointments", accessToken)
			.then((response) => {
				const cancelled_app = response.data.appointments.filter(
					(app) => app.isCancelled === true
				);
				const revision_app = response.data.appointments.filter(
					(app) => app.booking_status === 2
				);
				const completed_app = response.data.appointments.filter(
					(app) => app.booking_status === 1
				);
				const repairing_app = response.data.appointments.filter(
					(app) => app.booking_status === 0
				);

				this.setState({
					appointments: response.data.appointments,
					completed_appointments: completed_app,
					revisions_appointments: revision_app,
					repairing_appointments: repairing_app,
					cancelled_appointments: cancelled_app,
					loaded: true,
				});
			})
			.catch((err) => {
				if (!err.response) {
					console.log("Something went wrong");
				} else {
					this.setState({
						error: err.response.data.msg,
						loaded: true,
					});
				}
			});
		setTimeout(() => {
			console.log(this.state);
		}, 1000);
	}
	tabHandler = (tab) => {
		this.setState({
			activeTab: tab,
		});
	};

	getBackHandler = () => {
		this.setState({
			details_tab: !this.state.details_tab,
		});
	};

	changeToDetailTabHanlder = (id) => {
		this.setState({
			details_tab: !this.state.details_tab,
			booking_id: id,
		});
	};
	render() {
		let componentTorender = null;
		const tab = this.state.activeTab;
		switch (tab) {
			case "completed":
				componentTorender = (
					<Completed
						tabHandler={this.changeToDetailTabHanlder.bind(this)}
						order={this.state.completed_appointments}
					/>
				);
				break;
			case "repairing":
				componentTorender = (
					<Repairing
						tabHandler={this.changeToDetailTabHanlder.bind(this)}
						order={this.state.repairing_appointments}
					/>
				);
				break;
			case "revision":
				componentTorender = (
					<Revision
						tabHandler={this.changeToDetailTabHanlder.bind(this)}
						order={this.state.revisions_appointments}
					/>
				);
				break;
			case "cancelled":
				componentTorender = (
					<Cancelled
						tabHandler={this.changeToDetailTabHanlder.bind(this)}
						order={this.state.cancelled_appointments}
					/>
				);
				break;
			case "all":
				componentTorender = (
					<Fragment>
						<Repairing
							tabHandler={this.changeToDetailTabHanlder.bind(this)}
							order={this.state.repairing_appointments}
						/>
						{this.state.completed_appointments.length === 0 ? null : (
							<Completed
								tabHandler={this.changeToDetailTabHanlder.bind(this)}
								order={this.state.completed_appointments}
							/>
						)}
						{this.state.cancelled_appointments.length === 0 ? null : (
							<Cancelled
								tabHandler={this.changeToDetailTabHanlder.bind(this)}
								order={this.state.cancelled_appointments}
							/>
						)}
						{this.state.revisions_appointments.length === 0 ? null : (
							<Revision
								tabHandler={this.changeToDetailTabHanlder.bind(this)}
								order={this.state.revisions_appointments}
							/>
						)}
					</Fragment>
				);
				break;
		}
		return (
			<React.Fragment>
				<Header />
				<section className="profileWrapper">
					<div className="sectionWrapper">
						<div className="row justify-content-center">
							<Sidebar activeNumber="3" />
							{!this.state.details_tab ? (
								<div className="col-lg-9 col-12">
									<div className="userWrapper">
										<div className="userHeader">
											<h2>My Repair Appointments</h2>
										</div>
										{this.state.loaded ? (
											this.state.appointments.length === 0 ? (
												<div className="emptyBlock">
													<img
														src="assets/images/icons/no_data.svg"
														className="img-fluid"
														alt=""
													/>
													<p>No Repair Appointments</p>
												</div>
											) : (
												<div className="userDetails">
													<div className="typesofAppointments d-flex align-items-center justify-content-start">
														<Link
															to="#"
															className={
																this.state.activeTab === "all" ? "active" : ""
															}
															onClick={() => this.tabHandler("all")}
														>
															All
														</Link>
														<Link
															to="#"
															className={
																this.state.activeTab === "repairing"
																	? "active"
																	: ""
															}
															onClick={() => this.tabHandler("repairing")}
														>
															Repairing
														</Link>
														<Link
															to="#"
															className={
																this.state.activeTab === "completed"
																	? "active"
																	: ""
															}
															onClick={() => this.tabHandler("completed")}
														>
															Completed
														</Link>
														<Link
															to="#"
															className={
																this.state.activeTab === "cancelled"
																	? "active"
																	: ""
															}
															onClick={() => this.tabHandler("cancelled")}
														>
															Cancelled
														</Link>
														<Link
															to="#"
															className={
																this.state.activeTab === "revision"
																	? "active"
																	: ""
															}
															onClick={() => this.tabHandler("revision")}
														>
															Revisions
														</Link>
													</div>
													{componentTorender}
												</div>
											)
										) : null}
									</div>
								</div>
							) : (
								<BookingDetails
									b_id={this.state.booking_id}
									getBack={this.getBackHandler.bind(this)}
								/>
							)}
						</div>
					</div>
				</section>
				<Footer />
				<Modal />
			</React.Fragment>
		);
	}
}
