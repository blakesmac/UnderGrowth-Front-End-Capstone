import React from "react";
import { Card, Image } from "react-bootstrap";

import './footer.css'
export const Footer = () => {
    return (
        <div classNameme="pageFooter">
            <Card >
                <Card.Title>
                    <Image src="/logo.jpg" height="50px" width="50px" roundedCircle />
                </Card.Title>

                <Card.Body>
                    GitHub: blakesmac
                </Card.Body>
                <Card.Body>
                    Slack:
                </Card.Body>
            </Card>
        </div>
    )
}