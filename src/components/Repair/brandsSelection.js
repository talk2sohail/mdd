import React, { PureComponent } from "react";
import honor from "../../assets/images/brandLogos/honor.png";
import apple from "../../assets/images/brandLogos/apple.png";
import samsung from "../../assets/images/brandLogos/samsung.png";
import oppo from "../../assets/images/brandLogos/oppo.png";
import realme from "../../assets/images/brandLogos/realme.png";
import vivo from "../../assets/images/brandLogos/vivo.png";
import oneplus from "../../assets/images/brandLogos/oneplus.png";
import motorola from "../../assets/images/brandLogos/motorola.png";
import huawei from "../../assets/images/brandLogos/huawei.png";
import nokia from "../../assets/images/brandLogos/nokia.png";
import asus from "../../assets/images/brandLogos/asus.png";
import poco from "../../assets/images/brandLogos/poco.png";
import mi from "../../assets/images/brandLogos/mi.png";
import google from "../../assets/images/brandLogos/google.png";
import lenovo from "../../assets/images/brandLogos/lenovo.png";

export default class BrandsSelection extends PureComponent {
	render() {
		return (
			<React.Fragment>
				{/* <section className="repairSelection">
					<div className="sectionWrapper"> */}
				<div className="row no-gutters justify-content-start align-items-center selectOption">
					<div className="col-6 col-md-4 col-lg-2">
						<div className="branWrap">
							<div className="imgWrapBrand">
								<img
									src={apple}
									className="d-block text-center mx-auto"
									alt=""
								/>
							</div>
							<h3 className="text-center uppercase">Apple</h3>
						</div>
					</div>
					{/* samsung */}
					<div className="col-6 col-md-4 col-lg-2">
						<div className="branWrap">
							<div className="imgWrapBrand">
								<img
									src={samsung}
									className="d-block text-center mx-auto"
									alt=""
								/>
							</div>
							<h3 className="text-center uppercase">Samsung</h3>
						</div>
					</div>
					{/* mi */}
					<div className="col-6 col-md-4 col-lg-2">
						<div className="branWrap">
							<div className="imgWrapBrand">
								<img src={mi} className="d-block text-center mx-auto" alt="" />
							</div>
							<h3 className="text-center uppercase">Mi</h3>
						</div>
					</div>
					{/* oppo */}
					<div className="col-6 col-md-4 col-lg-2">
						<div className="branWrap">
							<div className="imgWrapBrand">
								<img
									src={oppo}
									className="d-block text-center mx-auto"
									alt=""
								/>
							</div>
							<h3 className="text-center uppercase">Oppo</h3>
						</div>
					</div>
					{/* vivo */}
					<div className="col-6 col-md-4 col-lg-2">
						<div className="branWrap">
							<div className="imgWrapBrand">
								<img
									src={vivo}
									className="d-block text-center mx-auto"
									alt=""
								/>
							</div>
							<h3 className="text-center uppercase">Vivo</h3>
						</div>
					</div>
					{/* realme */}
					<div className="col-6 col-md-4 col-lg-2">
						<div className="branWrap">
							<div className="imgWrapBrand">
								<img
									src={realme}
									className="d-block text-center mx-auto"
									alt=""
								/>
							</div>
							<h3 className="text-center uppercase">Realme</h3>
						</div>
					</div>
					{/* oneplus */}
					<div className="col-6 col-md-4 col-lg-2">
						<div className="branWrap">
							<div className="imgWrapBrand">
								<img
									src={oneplus}
									className="d-block text-center mx-auto"
									alt=""
								/>
							</div>
							<h3 className="text-center uppercase">One Plus</h3>
						</div>
					</div>
					{/* motorolia */}
					<div className="col-6 col-md-4 col-lg-2">
						<div className="branWrap">
							<div className="imgWrapBrand">
								<img
									src={motorola}
									className="d-block text-center mx-auto"
									alt=""
								/>
							</div>
							<h3 className="text-center uppercase">Motorola</h3>
						</div>
					</div>
					{/* huawei */}
					<div className="col-6 col-md-4 col-lg-2">
						<div className="branWrap">
							<div className="imgWrapBrand">
								<img
									src={huawei}
									className="d-block text-center mx-auto"
									alt=""
								/>
							</div>
							<h3 className="text-center uppercase">Huawei</h3>
						</div>
					</div>
					{/* honor */}
					<div className="col-6 col-md-4 col-lg-2">
						<div className="branWrap">
							<div className="imgWrapBrand">
								<img
									src={honor}
									className="d-block text-center mx-auto"
									alt=""
								/>
							</div>
							<h3 className="text-center uppercase">Honor</h3>
						</div>
					</div>
					{/* google */}
					<div className="col-6 col-md-4 col-lg-2">
						<div className="branWrap">
							<div className="imgWrapBrand">
								<img
									src={google}
									className="d-block text-center mx-auto"
									alt=""
								/>
							</div>
							<h3 className="text-center uppercase">Google</h3>
						</div>
					</div>
					{/* nokia */}
					<div className="col-6 col-md-4 col-lg-2">
						<div className="branWrap">
							<div className="imgWrapBrand">
								<img
									src={nokia}
									className="d-block text-center mx-auto"
									alt=""
								/>
							</div>
							<h3 className="text-center uppercase">Nokia</h3>
						</div>
					</div>
					{/* lenovo */}
					<div className="col-6 col-md-4 col-lg-2">
						<div className="branWrap">
							<div className="imgWrapBrand">
								<img
									src={lenovo}
									className="d-block text-center mx-auto"
									alt=""
								/>
							</div>
							<h3 className="text-center uppercase">Lenovo</h3>
						</div>
					</div>
					{/* asus */}
					<div className="col-6 col-md-4 col-lg-2">
						<div className="branWrap">
							<div className="imgWrapBrand">
								<img
									src={asus}
									className="d-block text-center mx-auto"
									alt=""
								/>
							</div>
							<h3 className="text-center uppercase">Asus</h3>
						</div>
					</div>
					{/* poco */}
					<div className="col-6 col-md-4 col-lg-2">
						<div className="branWrap">
							<div className="imgWrapBrand">
								<img
									src={poco}
									className="d-block text-center mx-auto"
									alt=""
								/>
							</div>
							<h3 className="text-center uppercase">Poco</h3>
						</div>
					</div>
				</div>
				{/* </div>
				</section> */}
			</React.Fragment>
		);
	}
}
