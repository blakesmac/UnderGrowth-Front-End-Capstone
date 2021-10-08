import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap"
import "./garden.css"
export const GardenInfo = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <section className="gardenInfo">
            <h2 className="gardenTitle">Garden Tips/Info </h2>
            <div className="cardTips">
                <Button variant="primary"  className="modalButton" onClick={handleShow}>
                    Click me!
                </Button>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>


        </section>
    )
}
