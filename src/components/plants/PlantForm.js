import React, {useContext, useEffect, useState} from "react"
import { PlantContext } from "./PlantProvider"
import { useHistory, useParams } from "react-router-dom"
import "./plant.css"
import { Button } from "react-bootstrap"
export const PlantForm = () => {
    const {addPlant, getPlantById, editPlant } = useContext(PlantContext)
    const userId = sessionStorage.getItem("undergrowth_user")
    const [plant, setPlant] =useState({
        userId: 0,
        img: "",
        name: "",
        species: "",
        plantingzone: "",
        growinfo: "",
        whentogrow: ""
    });
    const [isLoading, setIsLoading] = useState(true);
    const { plantId } = useParams();
        const history = useHistory();

    const handleControlledInputChange = (event) => {
        const newPlant = {...plant}
        newPlant[event.target.id] = event.target.value
        setPlant(newPlant)
    }

    

    const handleSavePlant = () => {
        setIsLoading(true)
        if(plantId){
            editPlant({
                id: parseInt(plantId),
                img: plant.img,
                name: plant.name,
                species: plant.species,
                plantingzone: plant.plantingzone,
                growinfo: plant.growinfo,
                whentogrow: plant.whentogrow

            })
            .then(() => history.push(`/plants/detail/${plantId}`))
        } else {
            addPlant({
                userId: parseInt(userId),
                img: plant.img,
                name: plant.name,
                species: plant.species,
                plantingzone: plant.plantingzone,
                growinfo: plant.growinfo,
                whentogrow: plant.whentogrow 
            })
            .then(()=> history.push("/plants"))
        }
    }

    useEffect(() => {
        if (plantId){
            getPlantById(plantId)
        .then(plant => {
            setPlant(plant)

            setIsLoading(false)
        })
        } else {
            setIsLoading(false)
        }
    }, [])

    return (
        <form className="plantform">
            <h2 className="plantForm__title">Add a Plant</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlfor="img">Img URL:</label>
                    <input type="img" id="img" name="img" required autoFocus className="form-control"
                    placeholder="Plant Img URL *.jpg or .jpeg*" onChange={handleControlledInputChange} defaultValue={plant.img}/>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlfor="name">Plant Name:</label>
                    <input type="text" id="name" name="name" required autoFocus className="form-control"
                    placeholder="Enter Plant Name" onChange={handleControlledInputChange} defaultValue={plant.name}/>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlfor="species">Plant Species:</label>
                    <input type="text" id="species" name="species" required autoFocus className="form-control"
                    placeholder="Enter Plant Species" onChange={handleControlledInputChange} defaultValue={plant.species}/>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlfor="plantingzone">Planting Zone:</label>
                    <input type="text" id="plantingzone" name="plantingzone" required autoFocus className="form-control"
                    placeholder="Where to Plant" onChange={handleControlledInputChange} defaultValue={plant.plantingzone}/>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlfor="growinfo">Growing Info:</label>
                    <input type="text" id="growinfo" name="growinfo" required autoFocus className="form-control"
                    placeholder="Enter Growing Information" onChange={handleControlledInputChange} defaultValue={plant.growinfo}/>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlfor="whentogrow">When to Plant:</label>
                    <input type="text" id="whentogrow" name="whentogrow" required autoFocus className="form-control"
                    placeholder="Enter Best Planting Time" onChange={handleControlledInputChange} defaultValue={plant.whentogrow}/>
                </div>
            </fieldset>
            <button size="sm" className="btn plantform" disabled={isLoading} onClick={event => {
                event.preventDefault()
                handleSavePlant()
            }}>
                {plantId ? <>Save Plant</> : <>Add Plant</> }
            </button>
        </form>
    )
}