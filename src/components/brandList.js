import React, { PureComponent } from "react";
import Apple from "../assets/images/brandLogos/apple.png";
import Realme from "../assets/images/brandLogos/realme.png";
import Vivo from "../assets/images/brandLogos/vivo.png";
import Samsung from "../assets/images/brandLogos/samsung.png";
import OnePlus from "../assets/images/brandLogos/oneplus.png";
import Xiaomi from "../assets/images/brandLogos/mi.png";
import Oppo from "../assets/images/brandLogos/oppo.png";

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
											<img src={Apple} alt="Apple" />
										</li>
										<li>
											<img src={Samsung} alt="Samsung" />
										</li>

										<li>
											<img src={OnePlus} alt="One Plus" />
										</li>
										<li>
											<img src={Oppo} alt="Oppo" />
										</li>
										<li>
											<img src={Vivo} alt="Vivo" />
										</li>
										<li>
											<img src={Realme} alt="Realme" />
										</li>
										<li>
											<img src={Xiaomi} alt="Xiaomi" />
										</li>
									</ul>
									<a
										href="javascript:void(0)"
										className="theme-btn theme-btn-green text-uppercase"
									>
										brands we repair
									</a>
								</div>
							</div>
						</div>
					</div>
				</section>
			</React.Fragment>
		);
	}
}
