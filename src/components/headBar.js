import React, { PureComponent } from "react";

export default class HeadBar extends PureComponent {
	componentDidMount() {
		//TOPBAR TEXT CHANGER
		(function() {
			var words = [
					"contact us today for repairing your phone",
					"apply coupon <span>'newuser'</span> for getting special discount"
				],
				i = 0;
			setInterval(function() {
				window.$("#changingword").fadeOut(function() {
					window
						.$(this)
						.html(words[(i = (i + 1) % words.length)])
						.fadeIn();
				});
			}, 4000);
		})();
	}
	render() {
		return (
			<React.Fragment>
				<div className="topBarWrapper">
					<div className="sectionWrapper">
						<div className="row no-gutters justify-content-center align-items-center">
							<div className="col-4 mr-auto d-none d-lg-block text-left">
								<div className="topBarMenu">
									<div className="menuItem">
										<a href="javascript:void(0);">mail@mdds.com</a>
									</div>
									<div className="menuItem">
										<a href="javascript:void(0);">7980538443</a>
									</div>
								</div>
							</div>
							<h2 className="text-uppercase" id="changingword">
								Get your phone picked up from your home for repair
							</h2>
							<div className="col-4 ml-auto d-none d-lg-block text-right">
								<div className="topBarMenu">
									<div className="menuItem">
										<a href="javascript:void(0);">Collaborate</a>
									</div>
									<div className="menuItem">
										<a href="javascript:void(0);">Blog</a>
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
