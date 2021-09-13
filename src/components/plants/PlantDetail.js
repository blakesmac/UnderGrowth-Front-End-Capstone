import React, {useContext, useEffect, useState} from "react"
import { PlantContext } from "./PlantProvider"
import { useParams, useHistory } from "react-router-dom"
import { Card, ListGroup, ListGroupItem, Button } from "react-bootstrap"
// import { MyPlantsContext } from "../myplants/MyPlantsProvider"
export const PlantDetail = (props) => {
    const {plants, deletePlant, } =useContext(PlantContext)
    // const { addMyPlant} = useContext(MyPlantsContext)
    const userId = sessionStorage.getItem("undergrowth_user")
    const [plant, setPlant] =useState( props.plant || {plant: {} })
    const { plantId } = useParams();
    const history = useHistory()

    const handleRemove = () => {
        deletePlant(plant.id)
        .then(() => {
            history.push("/plants")
        })
    }
    // const handleAddFavorite = () => {
    //     addMyPlant({
    //         userId: parseInt(userId),
    //         plantId: parseInt(plant.id)
    //     })
    //     .then(() => history.push(`/userplants`))
    // }

    useEffect(() => {
        if (!props.plant) {
            const thisPlant = plants.find(p => p.id === parseInt(plantId)) || { plant: {} }
            setPlant(thisPlant)
        }
    }, [plantId])

    return (
        <section className="plant">
            <h3 className="plant__name">Plant Name:{ plant.name } </h3>
            <div className="img">
                <img className="plant__img" key={plant.image} src={plant.img} /> </div>
            <div className="plant__species">Species:{ plant.species }</div>
            <div className="plant__plantingzone">Where to plant: {plant.plantingzone}</div>
            <div className="plant__growinfo">Growing Information: {plant.growinfo} </div>
            <button className="plantbutton__delete" onClick={handleRemove}>Delete Plant</button>
            <button className="plantbutton_edit" onClick={() =>{
                history.push(`/plants/edit/${plant.id}`)
            }}>Update Plant</button>
            <button className="plantbutton__addFav" onClick={() => {
                history.push(`myplants`)
            }}>Add to My Plants</button>
        </section>
        
    )
}
