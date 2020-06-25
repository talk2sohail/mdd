import React, { useEffect } from 'react';
import $ from 'jquery';
import {Link, useLocation} from 'react-router-dom';

import Auth from '../Auth';

export  function MobileMenuModal(){
    useEffect(() => {
        // mobile menu js
		$(".mobileMenuTrigger").click(function () {
			$(".mobileMenuWrapperOuter").addClass("on");
			$("body").addClass("mobileMenuActive");
		});
		$(".mobileMenuCloseWrapper").click(function () {
			$(".mobileMenuWrapperOuter").removeClass("on");
			$("body").removeClass("mobileMenuActive");
        });
        
        return () => {
                $(".mobileMenuWrapperOuter").removeClass("on");
                $("body").removeClass("mobileMenuActive");   
        }
    }, [])

    const location = useLocation();
    const handleLogout = (e) => {
        e.preventDefault();

		Auth.logout();
		let path = location.pathname;
		if (path === "/") {
			window.location.reload();
		} else {
			this.props.history.push("/");
		}
	};
    return (
        <div className="mobileMenuWrapperOuter d-lg-none">
						<div className="mobileMenuWrapper">
							<div className="mobile-menu-wrapper-header d-flex align-items-center position-relative">
								<a className="mobileMenuCloseWrapper">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="18"
										height="18"
										viewBox="0 0 18 18"
										fill="#fff"
									>
										<path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
									</svg>
								</a>
								<img
									src="/assets/images/icons/collaborate.svg"
									width="100"
									alt="imageWrapper"
								/>
								<div className="mobile-menu-header-inner">
									<Link to="/profile">{`Hey ${Auth.getNameFromJWT()},`}</Link>
									<span style={{ display: "block" }}>Welcome back</span>

									<Link
										to=""
										className="d-none"
										data-toggle="modal"
										data-target="#loginModalCenter"
									>
										Login / Signup
									</Link>
								</div>
							</div>
							<nav className="mobileMenu d-flex flex-column">
								<div className="borders">
									<Link to="/" className="mobileMenuLink">
										Home
									</Link>
									<Link to="/about" className="mobileMenuLink">
										About Us
									</Link>
									<Link to="/repair" className="mobileMenuLink">
										Repair
									</Link>
									<Link to="#" className="mobileMenuLink">
										New Offers
									</Link>
									<Link to="#" className="mobileMenuLink">
										Our Stores
									</Link>
								</div>
								{Auth.getAuth() ? (
									<div className="borders">
										<Link to="/profile" className="mobileMenuLink">
											Profile
										</Link>
										<Link to="/appointments" className="mobileMenuLink">
											Repair Appointments
										</Link>
										<Link to="/address" className="mobileMenuLink">
											Saved Address
										</Link>
										<Link to="#" onClick={handleLogout}>
											Log Out
										</Link>
									</div>
								) : null}
								<div className="borders">
									<Link to="/collaborate" className="mobileMenuLink">
										Collaborate
									</Link>
									<Link to="#" className="mobileMenuLink">
										Blog
									</Link>
								</div>
								<div className="borders">
									<Link to="/faq" className="mobileMenuLink">
										FAQs
									</Link>
									<Link to="/feedback" className="mobileMenuLink">
										Feedback
									</Link>
								</div>
							</nav>
						</div>
					</div>
    )
}