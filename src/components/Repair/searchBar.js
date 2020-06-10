import React, { PureComponent } from "react";
import { DebounceInput } from "react-debounce-input";

export default class SearchBar extends PureComponent {
	handleSearch = (e) => {
		e.preventDefault();
	};
	render() {
		return (
			<React.Fragment>
				<div className="row no-gutters justify-content-start align-items-center selectOption">
					<div className="col-12 col-md-6">
						{this.props.showId === 2 ? (
							<h2>{`Select Your Mobile in ${this.props.brandTxt}`}</h2>
						) : (
							<h2>Select Your Mobile Brand</h2>
						)}
					</div>
					<div className="col-12 col-md-6 text-right mobileLeft">
						<form action="#" className="searchBar">
							<DebounceInput
								minLength={3}
								debounceTimeout={400}
								type="search"
								onChange={this.props.handleSearchQuery}
								value={this.props.value}
								placeholder={
									this.props.showId === 1
										? "Search Your Brand here"
										: "Search Your Mobile here"
								}
								className="mt-0"
							/>
							<button onClick={this.handleSearch} type="submit">
								<img src="/assets/images/icons/search.png" alt="" width={20} />
							</button>
						</form>
					</div>
				</div>
			</React.Fragment>
		);
	}
}
