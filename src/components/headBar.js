import React, { PureComponent } from "react";
import { Link } from "react-router-dom";

export default class HeadBar extends PureComponent {
	render() {
		return (
			<React.Fragment>
				<div className="topBarWrapper">
					<div className="sectionWrapper">
						<div className="row no-gutters justify-content-center align-items-center">
							<div className="col-4 mr-auto d-none d-lg-block text-left">
								<div className="topBarMenu">
									<div className="menuItem">
										<Link to="/profile">mail@mdds.com</Link>
									</div>
									<div className="menuItem">
										<Link to="/profile">7980538443</Link>
									</div>
								</div>
							</div>
							<h2 className="text-uppercase" id="changingword">
								Get your phone picked up from your home for repair
							</h2>
							<div className="col-4 ml-auto d-none d-lg-block text-right">
								<div className="topBarMenu">
									<div className="menuItem">
										<Link to="/collaborate">Collaborate</Link>
									</div>
									<div className="menuItem">
										<Link to="javascript:void(0);">Blog</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}
