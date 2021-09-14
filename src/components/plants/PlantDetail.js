import React, {useContext, useEffect, useState} from "react"
import { PlantContext } from "./PlantProvider"
import { useParams, useHistory } from "react-router-dom"
import { MyPlantsContext } from "../myplants/MyPlantsProvider"
import "./plant.css"
export const PlantDetail = (props) => {
    const { plants, deletePlant, } =useContext(PlantContext)
    const {   addMyPlant, deleteMyPlant} = useContext(MyPlantsContext)
    // const [myplant, setMyPlant] = useState([{ plant: {} }])
    const currentUser = sessionStorage.getItem("undergrowth_user")
    const [plant, setPlant] =useState( props.plant || {plant: {} })
    // const { myPlantId } = useParams();
    const { plantId } = useParams();
    const history = useHistory()

    const handleRemove = () => {
        deletePlant(plant.id)
        .then(() => {
            history.push("/plants")
        })
    }
    const handleSaveMyPlant = () => {
        addMyPlant({
            plantId: parseInt(plant.id),
            userId: currentUser
        })
        .then(() => history.push(`/myplants`))
    }

    const handleDeleteMyPlant = () => {
        deleteMyPlant(props.myPlantId)
        .then(() => {
            history.push("/plants")
        })
    }


    useEffect(() => {
        if (!props.plant) {
            const thisPlant = plants.find(p => p.id === parseInt(plantId)) || { plant: {} }
            setPlant(thisPlant)
        }
    }, [plantId])

    // useEffect(() => {
    //     getMyPlants().then(getPlants())
    //     .then(() => {
    //         const thisMyPlant = myplants.find(m => m.id === parseInt(myPlantId)) || {plant: {} }
    //         setMyPlant(thisMyPlant)
    //     })
    // }, [myPlantId])    //// not sure why this doesnt work it posts to database but not the page!!!!!
        

    return (
        
        <section className="plant">
            <h3 className="plant__name">Plant Name:{ props.plant.name } </h3>
            <div className="img">
                <img className="plant__img" key={plant.image} src={props.plant.img} /> </div>
            <div className="plant__species">Species:{ props.plant.species }</div>
            <div className="plant__plantingzone">Where to plant: {props.plant.plantingzone}</div>
            <div className="plant__growinfo">Growing Information: {props.plant.growinfo} </div>
            <button className="plantbutton__delete" onClick={handleRemove}>Delete Plant</button>
            <button className="plantbutton_edit" onClick={() =>{
                history.push(`/plants/edit/${plant.id}`)
            }}>Update Plant</button>
            <button className="savePlant__button" disabled={props.isMyPlant} onClick={event => {
                     event.preventDefault()
                     handleSaveMyPlant()
                 }}>{props.isMyPlant ? <> Already Mine! </> : <>Add to My Plants</>} </button>
            <button className="deletePlant_button" disabled={!props.isMyPlant} onClick={event => {
                     event.preventDefault()

                     handleDeleteMyPlant()
                 }}>{props.isFriend ? <>Remove Plant</> : <> </> } </button>
        </section>
        
        
    )
}
