import React from "react";
import { Card, Image, Button } from "react-bootstrap";
import { ImGithub} from "react-icons/im"
import { SiLinkedin} from "react-icons/si"
import { MdEmail} from "react-icons/md"
import './footer.css'
export const Footer = () => {
    return (
        <div classNameme="pageFooter">
            <Card className="text-center" bg="dark">
                <Card.Header>Contact</Card.Header>
                <Card.Body>
                    <Card.Title className="cardTitle" >UnderGrowth</Card.Title>
                    <Card.Text>
                        Copyright Blake McAdams 2021
                    </Card.Text>
                    <Card.Text>
                        <MdEmail size="1em" type={MdEmail}/> : blakesmac@comcast.net
                    </Card.Text>
                    <Card.Text>
                        <SiLinkedin size="1em" type={SiLinkedin} /> : Blake McAdams
                    </Card.Text>
                    <Card.Text>
                        <ImGithub size="1em" type={ImGithub} /> : blakesmac
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted"> Thank you for visiting! </Card.Footer>
            </Card>
        </div>
    )
}