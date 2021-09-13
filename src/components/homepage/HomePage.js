import React, { useState } from "react";
import { Accordion, Carousel } from "react-bootstrap";
import "./homepage.css"
export const HomePage = () => {

    return (

        <section className="homePage">
            <div className="homepage">
                <h1 className="homeTitle">Undergrowth</h1>
            </div>
            <br />
            <div className="carouselItem">
                <Carousel  fade variant="dark">
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://www.gardeningknowhow.com/wp-content/uploads/2007/03/flowers-1.jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h5>Welcome to Undergrowth!</h5>
                            <p>Browse through plants and veggies!</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://www.healthyeating.org/images/default-source/home-0.0/nutrition-topics-2.0/general-nutrition-wellness/2-2-2-2foodgroups_vegetables_detailfeature.jpg?sfvrsn=226f1bc7_6"
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <h5>Find new plants to include in your Garden!</h5>
                            <p></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F9%2F2020%2F03%2F27%2Fthe-best-way-to-store-vegetables-to-keep-them-fresh-as-long-as-possible-FT-BLOG0320-2.jpg"
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h5>Enjoy New and Fun Plants!</h5>
                            <p></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            <br />
            <div className="accHome">
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>About Undergrowth</Accordion.Header>
                        <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                            est laborum.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>More Information </Accordion.Header>
                        <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                            est laborum.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </section>



    )
}
