import React, { useState } from "react";
import { Accordion, Carousel, Image } from "react-bootstrap";
import "./homepage.css"


export const HomePage = () => {

    return (

        <section className="homePage">
            <div className="homepage">
                <div className="homeLogo">
                {/* <Image src="/logo.jpg"  height="250px" width="250px" roundedCircle /> */}
                
                </div>
            </div>
            <br />
            <div  className="carouselItem">
                <Carousel  fade variant="dark">
                    <Carousel.Item className="carouselContainer" >
                        <img 
                            
                            className="d-block w-100 carouselImage"
                            src="https://www.gardeningknowhow.com/wp-content/uploads/2010/06/family-vegetable-garden.jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h2 className="whitetext" >Welcome to Undergrowth!</h2>
                            <p className="whitetext" >Browse through plants and veggies!</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className="carouselContainer" >
                        <img
                            className="d-block w-100 carouselImage"
                            src="https://www.healthyeating.org/images/default-source/home-0.0/nutrition-topics-2.0/general-nutrition-wellness/2-2-2-2foodgroups_vegetables_detailfeature.jpg?sfvrsn=226f1bc7_6"
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <h2 className="whitetext" >Find new plants to include in your Garden!</h2>
                            <p></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className="carouselContainer" >
                        <img
                            className="d-block w-100 carouselImage"
                            src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F9%2F2020%2F03%2F27%2Fthe-best-way-to-store-vegetables-to-keep-them-fresh-as-long-as-possible-FT-BLOG0320-2.jpg"
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h2 className="whitetext" >Enjoy New and Fun Plants!</h2>
                            <p></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            <br />
            <div className="accHome">
                <Accordion >
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>About Undergrowth</Accordion.Header>
                        <Accordion.Body>
                        This is an app designed to help new and even experienced gardeners find
                        a unique plant to grow, or find basic plants to get your new garden
                        started faster with more knowledge. This website will include specifics of
                        where and how to grow these plants and vegetables. It will also give you tips
                        on the  best practices for your garden, and how to keep it healthy. 
                        I wanted to make an app simple enough for anyone to understand but still provide
                        an accurate and effective way for you to grow your garden.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </section>



    )
}
