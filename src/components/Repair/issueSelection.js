import React, { PureComponent } from "react";
import apiCall from "../../axios";
export default class IssueSelection extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			issues: [],
		};
	}
	componentDidMount() {
		apiCall
			.get("/issues")
			.then((respsonse) => {
				console.log(respsonse.data);
				this.setState({
					issues: respsonse.data.issues,
				});
			})
			.catch((error) => {
				if (!error.respsonse) {
					console.error("Network Error");
				} else {
					console.log(error.respsonse.data);
				}
			});
	}
	render() {
		return (
			<React.Fragment>
				<div className="row no-gutters justify-content-start align-items-center selectOption mt-2">
					<div className="col-12 col-md-6">
						<h2>{`Select your issue in ${this.props.values.brand} ${this.props.values.mobile}`}</h2>
					</div>
					<div className="col-12 col-md-6 text-right buttons">
						<a href="javascript:void(0)">Checkout (Rs 999)</a>
					</div>
				</div>
				<div className="row no-gutters justify-content-start align-items-center issueSelection selectOption">
					{this.state.issues
						? this.state.issues.map((issue, index) => {
								return (
									<div className="col-12 col-md-6 col-lg-4" key={index}>
										<div className="branWrap ">
											<div className="iconWrap">
												<img
													src="/assets/images/icons/broken-phone.png"
													alt=""
												/>
											</div>
											<div className="contentWrap">
												<h4>{issue.issue_name}</h4>
												<p>{issue.details}</p>
												<p className="price">
													<span>{issue.mrp}</span>
													{issue.price}
												</p>
											</div>
											<a href="javascript:void(0)">
												<span>+ Add</span>
												<span className="d-none">
													<svg
														xmlns="http://www.w3.org/2000/svg"
														width={18}
														height={18}
														viewBox="0 0 18 18"
														fill="#fff"
													>
														<path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z" />
													</svg>
													Remove
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
