import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"
import { Image } from "react-bootstrap";
import {VscComment} from "react-icons/vsc"
import {  RiAncientGateFill, RiPlantFill} from "react-icons/ri";
import { AiFillHome} from "react-icons/ai"
import { GiPlantsAndAnimals} from "react-icons/gi";
import { FcInfo} from "react-icons/fc";
import { RiLogoutBoxFill} from "react-icons/ri"
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavDropdown } from "react-bootstrap";
export const NavBar = (props) => {
    return (
        <Navbar variant="dark" bg="dark" expand="lg">
        <Container fluid>
          <Navbar.Brand href="/"> <Image src="/logo.jpg" height="80px" width="80px" roundedCircle /> UnderGrowth</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-dark-example" />
          <Navbar.Collapse id="navbar-dark-example">
            <Nav>
              <NavDropdown
                id="nav-dropdown-dark-example"
                title="Pages"
                menuVariant="dark"
              >
                <NavDropdown.Item href="#action/3.1"> <Link className="nav__link" to="/"> <AiFillHome size="3em" type={AiFillHome} /> Home</Link></NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2"> <Link className="nav__link" to="/plants"> <RiPlantFill size="3em" type={RiPlantFill}/>Plants</Link> </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3"> <Link className="nav__link" to="/myplants"> <GiPlantsAndAnimals size="3em" type={GiPlantsAndAnimals}/>My-Plants</Link></NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3"> <Link className="nav__link" to="/comments"> <VscComment size="3em" type={VscComment} /> Comments</Link> </NavDropdown.Item>
                {/* <NavDropdown.Item href="#action/3.3"> <Link className="nav__link" to="/gardeninfo"> <FcInfo size="3em" type={FcInfo}/>Garden-Information</Link> </NavDropdown.Item> */}
                <NavDropdown.Item href="#action/3.3"> <Link className="nav__link" to="/login"> <RiLogoutBoxFill size="3em" type={RiLogoutBoxFill} />Log-Out</Link> </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
        // <ul className="navigation">
        //     <li className="nav__item active">
        //         <Link className="nav__link" to="/"> <Image src="/logo.jpg" height="80px" width="80px" roundedCircle /></Link> 
        //     </li>
        //     <li className="nav__item active">
        //         <Link className="nav__link" to="/plants"> <RiPlantFill size="3em" type={RiPlantFill}/>Plants</Link> 
        //     </li>
        //     <li className="nav__item active">
        //         <Link className="nav__link" to="/myplants"> <GiPlantsAndAnimals size="3em" type={GiPlantsAndAnimals}/>My-Plants</Link> 
        //     </li>
        //     <li className="nav__item active">
        //         <Link className="nav__link" to="/comments"> <VscComment size="3em" type={VscComment} /> Comments</Link> 
        //     </li>
        //     <li className="nav__item active">
        //         <Link className="nav__link" to="/gardeninfo"> <FcInfo size="3em" type={FcInfo}/>Garden-Information</Link> 
        //     </li>
        //     <li className="nav__item active">
        //         <Link className="nav__link" to="/login"> <RiLogoutBoxFill size="3em" type={RiLogoutBoxFill} />Log-Out</Link> 
        //     </li>
            
        // </ul>
    )
}


