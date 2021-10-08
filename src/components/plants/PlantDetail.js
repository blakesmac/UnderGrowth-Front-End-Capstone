import React, {useContext, useEffect, useState} from "react"
import { PlantContext } from "./PlantProvider"
import { useParams, useHistory } from "react-router-dom"
import { MyPlantsContext } from "../myplants/MyPlantsProvider"
import "./plant.css"
import { VscTrash } from "react-icons/vsc";
import {VscEdit } from "react-icons/vsc";
import { CgAddR} from "react-icons/cg"
export const PlantDetail = (props) => {
    const { plants, deletePlant,getPlants } =useContext(PlantContext)
    const {  addMyPlant, deleteMyPlant} = useContext(MyPlantsContext)
    // const [myplant, setMyPlant] = useState([{ plant: {} }])
    const currentUser = sessionStorage.getItem("undergrowth_user")
    const [plant, setPlant] = useState( props.plant || {})
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
            userId: parseInt(currentUser)
        })
        .then(() => history.push(`/myplants`))
    }

    const handleDeleteMyPlant = () => {
        deleteMyPlant(props.myplantId)
        .then(() => {
            history.push("/myplants")
        })
    }
    useEffect(() => {
        getPlants()
    }, [])


    useEffect(() => {
        if (!props.plant) {
            const thisPlant = plants.find(p => p.id === parseInt(plantId)) || {}
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
            <h3 className="plant__name">{ plant.name } </h3>
            <div className="img">
                <img className="plant__img" key={plant.image} src={plant.img} /> 
            </div>
            <div className="plant__species">Species: { plant.species }</div>
            <div className="plant__plantingzone">Where to plant: {plant.plantingzone}</div>
            <div className="plant__growinfo">Growing Information: {plant.growinfo} </div>
            <button className="plantbutton__delete" disabled={props.isMyPlant} onClick={event => {
                event.preventDefault() 
                handleRemove()
                }}>  <VscTrash type={VscTrash}/>  </button>
            <button className="plantbutton_edit"  disabled={props.isMyPlant} onClick={() =>{
                history.push(`/plants/edit/${plant.id}`)
            }}> <VscEdit type={VscEdit}/> </button>
            <button className="savePlant__button" disabled={props.isMyPlant} onClick={event => {
                     event.preventDefault()
                     handleSaveMyPlant()
                 }}>{props.isMyPlant ? <> Already Mine! </> : <> <CgAddR size="2em" type={CgAddR} /> Add to My Plants</>} </button>
            <button className="deletePlant_button" disabled={!props.isMyPlant} onClick={event => {
                     event.preventDefault()

                     handleDeleteMyPlant()
                 }}>{props.isMyPlant ? <>Remove Plant</> : <> </> } </button>
        </section>
        
        
    )
}
