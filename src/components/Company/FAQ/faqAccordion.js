import React from 'react';

export  function FaqAccordion(){
    return (
            <div className="col-12">
            <div className="slider slider-for">
                {/* <Slider {...settings}> */}
                <div id="accordionExample" className="accordion">
                    {/* <!-- Accordion item 1 --> */}
                    <div className="card">
                        <div
                            id="headingOne"
                            className="card-header bg-white border-0 m-0"
                        >
                            <h2 className="mb-0">
                                <button
                                    type="button"
                                    data-toggle="collapse"
                                    data-target="#collapseOne"
                                    aria-expanded="false"
                                    aria-controls="collapseOne"
                                    className="btn btn-link collapsed w-100 position-relative text-left collapsible-link"
                                >
                                    Will your technician also fix any other issue of my
                                    phone?
                                </button>
                            </h2>
                        </div>
                        <div
                            id="collapseOne"
                            aria-labelledby="headingOne"
                            data-parent="#accordionExample"
                            className="collapse"
                        >
                            <div className="card-body">
                                <p className="font-weight-light m-0">
                                    It is definitely on the cards but for now, we only
                                    offer the services listed on our platform. Please
                                    let us know in advance for any issue with your
                                    device and, we will try our best to help.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* <!-- End --> */}
                </div>
                <div id="accordionExampleTwo" className="accordion">
                    {/* <!-- Accordion item 2 --> */}
                    <div className="card">
                        <div
                            id="headingTwo"
                            className="card-header bg-white border-0"
                        >
                            <h2 className="mb-0">
                                <button
                                    type="button"
                                    data-toggle="collapse"
                                    data-target="#collapseTwo"
                                    aria-expanded="false"
                                    aria-controls="collapseTwo"
                                    className="btn btn-link collapsed w-100 position-relative text-left  collapsible-link"
                                >
                                    Will your technician also fix any other issue of my
                                    phone?
                                </button>
                            </h2>
                        </div>
                        <div
                            id="collapseTwo"
                            aria-labelledby="headingTwo"
                            data-parent="#accordionExampleTwo"
                            className="collapse"
                        >
                            <div className="card-body">
                                <p className="font-weight-light m-0">
                                    It is definitely on the cards but for now, we only
                                    offer the services listed on our platform. Please
                                    let us know in advance for any issue with your
                                    device and, we will try our best to help.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* <!-- End --> */}
                </div>
                <div id="accordionExampleThree" className="accordion">
                    {/* <!-- Accordion item 3 --> */}
                    <div className="card">
                        <div
                            id="headingFour"
                            className="card-header bg-white border-0"
                        >
                            <h2 className="mb-0">
                                <button
                                    type="button"
                                    data-toggle="collapse"
                                    data-target="#collapseFour"
                                    aria-expanded="false"
                                    aria-controls="collapseFour"
                                    className="btn btn-link collapsed w-100 position-relative text-left  collapsible-link"
                                >
                                    Will your technician also fix any other issue of my
                                    phone?
                                </button>
                            </h2>
                        </div>
                        <div
                            id="collapseFour"
                            aria-labelledby="headingFour"
                            data-parent="#accordionExampleThree"
                            className="collapse"
                        >
                            <div className="card-body">
                                <p className="font-weight-light m-0">
                                    It is definitely on the cards but for now, we only
                                    offer the services listed on our platform. Please
                                    let us know in advance for any issue with your
                                    device and, we will try our best to help.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* <!-- End --> */}
                </div>
                <div id="accordionExampleFour" className="accordion">
                    {/* <!-- Accordion item 3 --> */}
                    <div className="card">
                        <div
                            id="headingFive"
                            className="card-header bg-white border-0"
                        >
                            <h2 className="mb-0">
                                <button
                                    type="button"
                                    data-toggle="collapse"
                                    data-target="#collapseFive"
                                    aria-expanded="false"
                                    aria-controls="collapseFive"
                                    className="btn btn-link collapsed w-100 position-relative text-left  collapsible-link"
                                >
                                    Will your technician also fix any other issue of my
                                    phone?
                                </button>
                            </h2>
                        </div>
                        <div
                            id="collapseFive"
                            aria-labelledby="headingFive"
                            data-parent="#accordionExampleFour"
                            className="collapse"
                        >
                            <div className="card-body">
                                <p className="font-weight-light m-0">
                                    It is definitely on the cards but for now, we only
                                    offer the services listed on our platform. Please
                                    let us know in advance for any issue with your
                                    device and, we will try our best to help.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* <!-- End --> */}
                    <div className="card">
                        <div
                            id="headingSix"
                            className="card-header bg-white border-0"
                        >
                            <h2 className="mb-0">
                                <button
                                    type="button"
                                    data-toggle="collapse"
                                    data-target="#collapseSix"
                                    aria-expanded="false"
                                    aria-controls="collapseSix"
                                    className="btn btn-link collapsed w-100 position-relative text-left  collapsible-link"
                                >
                                    Will your technician also fix any other issue of my
                                    phone?
                                </button>
                            </h2>
                        </div>
                        <div
                            id="collapseSix"
                            aria-labelledby="headingSix"
                            data-parent="#accordionExampleFour"
                            className="collapse"
                        >
                            <div className="card-body">
                                <p className="font-weight-light m-0">
                                    It is definitely on the cards but for now, we only
                                    offer the services listed on our platform. Please
                                    let us know in advance for any issue with your
                                    device and, we will try our best to help.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}