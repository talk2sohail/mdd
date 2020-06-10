import React, { PureComponent, Fragment } from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import $ from "jquery";

import apiCall from "../../axios";
export default class LocalMobileFromDB extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			loaded: false,
			error: "",
			mobiles: [],
		};
	}
	componentDidMount() {
		//set the view always from the top
		window.scrollTo(0, 0);

		const brand = this.props.brand.toLowerCase();

		if (sessionStorage.getItem(`${brand}`)) {
			this.setState({
				mobiles: JSON.parse(sessionStorage.getItem(`${brand}`)),
				loaded: true,
			});
		} else {
			apiCall
				.get(`/phone/${brand === "mi" ? "xiaomi" : brand}/${brand}`)
				.then((response) => {
					if (response) {
						sessionStorage.setItem(
							`${brand}`,
							JSON.stringify(response.data.mobiles)
						);
						this.setState({
							loaded: true,
							mobiles: response.data.mobiles,
						});
					}
				})
				.catch((error) => {
					if (!error.response) {
						console.log("Something went wrong");
					} else {
						this.setState({
							loaded: true,
							error: error.response.data.msg,
						});
					}
				});
		}
	}
	continue = (mobileName, img) => () => {
		this.props.nextStep(this.props.brand, mobileName, img, false);
		$("html, body").animate(
			{
				scrollTop: 500,
			},
			0
		);
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
			<Fragment>
				{this.state.loaded ? (
					this.state.mobiles.length !== 0 ? (
						<>
							{this.state.mobiles.map((mobile, index) => {
								return (
									<div className="col-6 col-md-4 col-lg-2" key={index}>
										<div className="branWrap">
											<div className="imgWrapBrand">
												<img
													// src={`/assets/images/mobiles/oneplus/${mobile.toLowerCase()}.png`}
													src={mobile.img}
													className="d-block text-center mx-auto"
													alt=""
													onClick={this.continue(
														`${mobile.name}`,
														`${mobile.img}`
													)}
												/>
											</div>
											<h3 className="text-center uppercase">{mobile.name}</h3>
										</div>
									</div>
								);
							})}
							<div
								style={{
									margin: "10px",
									color: "blue",
									paddingTop: "25px",
									cursor: "pointer",
								}}
								onClick={() => {
									$("html, body").animate(
										{
											scrollTop: 500,
										},
										0
									);
								}}
							>
								...Cannot find your Mobile? Click me to get to search bar.
							</div>
						</>
					) : (
						<div style={{ textAlign: "center", margin: "0 auto" }}>
							<p
								style={{
									color: "red",
									fontSize: "19px",
									textAlign: "center",
								}}
							>
								{this.state.error}
							</p>
						</div>
					)
				) : (
					loader
				)}
			</Fragment>
		);
	}
}
