import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"
// import { Navbar } from "react-bootstrap"
import {  RiAncientGateFill, RiPlantFill} from "react-icons/ri";
import { GiPlantsAndAnimals} from "react-icons/gi";
import { FcInfo} from "react-icons/fc";
export const NavBar = (props) => {
    return (
        <ul className="navigation">
            <li className="nav__item active">
                <Link className="nav__link" to="/"> <RiAncientGateFill size="3em" type={RiAncientGateFill}/>Home</Link> 
            </li>
            <li className="nav__item active">
                <Link className="nav__link" to="/plants"> <RiPlantFill size="3em" type={RiPlantFill}/>Plants</Link> 
            </li>
            <li className="nav__item active">
                <Link className="nav__link" to="/myplants"> <GiPlantsAndAnimals size="3em" type={GiPlantsAndAnimals}/>My-Plants</Link> 
            </li>
            <li className="nav__item active">
                <Link className="nav__link" to="/gardeninfo"> <FcInfo size="3em" type={FcInfo}/>Garden-Information</Link> 
            </li>
            
        </ul>
    )
}

{/* <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Home</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#plants">Plants</Nav.Link>
      <Nav.Link href="#gardeninfo">Garden Information</Nav.Link>
      <Nav.Link href="#userplants">My Plants</Nav.Link>
    </Nav>
    </Container>
  </Navbar> */}
