import React, { useState } from "react";
import { Card, Button } from "react-bootstrap"
import "./garden.css"
export const GardenInfo = () => {

    return (
        <section className="gardenInfo">
            <h2 className="gardenTitle">Garden Tips/Info </h2>
            <div className="cardTips">
            <Card>
                <Card.Header>Featured Tips</Card.Header>
                <Card.Body>
                    <Card.Title>Using Woodchips in your garden</Card.Title>
                    <Card.Text>
                        WoodChips are essential to your garden!
                        They promote a healthy environment and also kill the grass
                        and pesky weeds that will ineveitably make it into your garden. 
                        Add woodchips on top of your soil and fertilizer mix and then plant whatever tou desire!
                        These will also start to break down and fertilize the soil underneath
                        while attracting healthy soil insects.
                    </Card.Text>
                    <Button variant="primary">Maybe a Link?</Button>
                </Card.Body>
            </Card>
            
            {/* <Card>
                <Card.Body>
                <Card.Title>Using Woodchips in your garden</Card.Title>
                    <Card.Text>
                        WoodChips are essential to your garden!
                        They promote a healthy environment and also kill the grass
                        and pesky weeds that will ineveitably make it into your garden. 
                        Add woodchips on top of your soil and fertilizer mix and then plant whatever tou desire!
                        These will also start to break down and fertilize the soil underneath
                        while attracting healthy soil insects.
                    </Card.Text>
                    <Button variant="primary">Maybe a Link?</Button>
                </Card.Body>
            </Card> */}
            </div>
            

        </section>
    )
}
