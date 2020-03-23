import React, { PureComponent } from "react";
import search from "../../assets/images/icons/search.png";

export default class SearchBar extends PureComponent {
	render() {
		return (
			<React.Fragment>
				<div className="row no-gutters justify-content-start align-items-center selectOption">
					<div className="col-12 col-md-6">
						<h2>Select Your Mobile Brand</h2>
					</div>
					<div className="col-12 col-md-6 text-right mobileLeft">
						<form action="#" className="searchBar">
							<input
								type="search"
								placeholder="Search Your Mobile Here"
								className="mt-0"
							/>
							<button type="submit">
								<img src={search} alt="" width={20} />
							</button>
						</form>
					</div>
				</div>
			</React.Fragment>
		);
	}
}
