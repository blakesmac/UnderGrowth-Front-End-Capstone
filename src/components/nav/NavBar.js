import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"
// import { Navbar } from "react-bootstrap"

export const NavBar = (props) => {
    return (
        <ul className="navigation">
            <li className="nav__item active">
                <Link className="nav__link" to="/">Home</Link> 
            </li>
            <li className="nav__item active">
                <Link className="nav__link" to="/plants">Plants</Link> 
            </li>
            <li className="nav__item active">
                <Link className="nav__link" to="/myplants">My Plants</Link> 
            </li>
            <li className="nav__item active">
                <Link className="nav__link" to="/gardeninfo">Garden Information</Link> 
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
