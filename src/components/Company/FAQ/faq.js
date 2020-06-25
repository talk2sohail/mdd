import React, { useEffect, lazy } from "react";
import {  FaqBanner } from "./faqBanner";
import { FaqAccordion } from "./faqAccordion";

import Header from '../../header';
import Footer from '../../footer';
import Modal from '../../modal';
import CollaborateBanner from '../../collabrateBanner';


// const Header = lazy(() => import("../../header"));
// const Footer = lazy(() => import("../../footer"));
// const Modal = lazy(() => import("../../modal"));
// const CollaborateBanner = lazy(() => import("../../collabrateBanner"));

export default function Faq() {
	useEffect(() => {
		document.title = "FAQ | get your phone repaired | MDDS"
		window.scrollTo(0, 0);
		window.$('.slider-for').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			fade: true,
			asNavFor: '.slider-nav',
		});
		window.$('.slider-nav').slick({
			slidesToShow: 4,
			slidesToScroll: 1,
			asNavFor: '.slider-for',
			dots: false,
			centerMode: false,
			infinite: false,
			focusOnSelect: true,
			responsive: [
				{
					breakpoint: 991,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 1,
						dots: true,
						variableWidth: true,
						infinite: true,
						centerMode: true,
					},
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1,
						dots: true,
						variableWidth: true,
						infinite: true,
						centerMode: true,
					},
				},
			],
		});
	}, []);
		return (
			<React.Fragment>
				<Header />
				<FaqBanner/>
				<section className="faqsWrap">
					<div className="sectionWrapper">
						<div className="row no-gutters justify-content-center">
							<div className="col-12">
								<div className="slider slider-nav">
									<div className="faqNavBlock">
										<i className="glyph-icon flaticon-user"></i>
										<p>General</p>
									</div>
									<div className="faqNavBlock">
										<i className="glyph-icon flaticon-configuration"></i>
										<p>Repair</p>
									</div>
									<div className="faqNavBlock">
										<i className="glyph-icon flaticon-payment-method"></i>
										<p>Payment</p>
									</div>
									<div className="faqNavBlock">
										<i className="glyph-icon flaticon-box"></i>
										<p>Pick Up, Drop & Delivery</p>
									</div>
								</div>
							</div>
							<FaqAccordion/>
						</div>
					</div>
				</section>
				<CollaborateBanner />
				<Footer />
				<Modal />
			</React.Fragment>
		);
	}

