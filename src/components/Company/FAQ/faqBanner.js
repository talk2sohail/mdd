import React from 'react';

export function FaqBanner(){
    return (
        <section className="supportPageBanner">
        <div className="contentWrap">
            <div className="sectionWrapper">
                <div className="row align-items-center justify-content-center no-gutters">
                    <div className="col-lg-7 mx-auto text-center">
                        <h1>
                            Have any doubts? <br />
                            Let us solve it for you
                        </h1>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            Quasi aspernatur harum ut adipisci, earum soluta praesentium
                            consequatur ea veritatis neque fuga
                        </p>
                        <img
                            src="/assets/images/icons/faqa.svg"
                            className="mt-1"
                            width="350"
                            alt="faq"
                        />
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}