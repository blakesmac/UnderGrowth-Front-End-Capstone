import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"
import { Image } from "react-bootstrap";
import {VscComment} from "react-icons/vsc"
import {  RiAncientGateFill, RiPlantFill} from "react-icons/ri";
import { GiPlantsAndAnimals} from "react-icons/gi";
import { FcInfo} from "react-icons/fc";
import { RiLogoutBoxFill} from "react-icons/ri"
export const NavBar = (props) => {
    return (
        <ul className="navigation">
            <li className="nav__item active">
                <Link className="nav__link" to="/"> <Image src="/logo.jpg" height="80px" width="80px" roundedCircle /></Link> 
            </li>
            <li className="nav__item active">
                <Link className="nav__link" to="/plants"> <RiPlantFill size="3em" type={RiPlantFill}/>Plants</Link> 
            </li>
            <li className="nav__item active">
                <Link className="nav__link" to="/myplants"> <GiPlantsAndAnimals size="3em" type={GiPlantsAndAnimals}/>My-Plants</Link> 
            </li>
            <li className="nav__item active">
                <Link className="nav__link" to="/comments"> <VscComment size="3em" type={VscComment} /> Comments</Link> 
            </li>
            <li className="nav__item active">
                <Link className="nav__link" to="/gardeninfo"> <FcInfo size="3em" type={FcInfo}/>Garden-Information</Link> 
            </li>
            <li className="nav__item active">
                <Link className="nav__link" to="/login"> <RiLogoutBoxFill size="3em" type={RiLogoutBoxFill} />Log-Out</Link> 
            </li>
            
        </ul>
    )
}


