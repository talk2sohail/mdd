import React, { PureComponent } from "react";
import { Link } from "react-router-dom";

export default class BrandList extends PureComponent {
	render() {
		return (
			<React.Fragment>
				<section className="brandsWrapper">
					<div className="sectionWrapper">
						<div className="row align-items-center justify-content-between">
							<div className="col-12">
								<div className="title">
									<h2 className="text-center">Brands</h2>
									<p className=" m-auto text-center">
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Eligendi placeat eos enim quibusdam illo dignissimos vel
									</p>
								</div>
							</div>
							<div className="col-12">
								<div className="brandsList">
									<ul>
										<li>
											<img
												src="/assets/images/brandLogos/apple.png"
												alt="Apple"
											/>
										</li>
										<li>
											<img
												src="/assets/images/brandLogos/samsung.png"
												alt="Samsung"
											/>
										</li>

										<li>
											<img
												src="/assets/images/brandLogos/oneplus.png"
												alt="One Plus"
											/>
										</li>
										<li>
											<img
												src="/assets/images/brandLogos/oppo.png"
												alt="Oppo"
											/>
										</li>
										<li>
											<img
												src="/assets/images/brandLogos/vivo.png"
												alt="Vivo"
											/>
										</li>
										<li>
											<img
												src="/assets/images/brandLogos/realme.png"
												alt="Realme"
											/>
										</li>
										<li>
											<img
												src="/assets/images/brandLogos/mi.png"
												alt="Xiaomi"
											/>
										</li>
									</ul>
									<Link
										to=""
										className="theme-btn theme-btn-green text-uppercase"
									>
										brands we repair
									</Link>
								</div>
							</div>
						</div>
					</div>
				</section>
			</React.Fragment>
		);
	}
}
