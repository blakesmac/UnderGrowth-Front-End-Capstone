import React, { useContext, useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { PlantContext } from "./PlantProvider"
import { PlantDetail } from "./PlantDetail"
// import "./plant.css"

export const PlantList = () => {
    const {plants, getPlants, searchTerms} = useContext(PlantContext)
    const [filteredPlants, setFiltered] = useState([])
    const history = useHistory()

    useEffect(() => {
        getPlants()
    }, [])

    useEffect(() => {
        if (searchTerms !== "") {
            const subset = plants.filter(plant => plant.name.toLowerCase().includes(searchTerms))
            setFiltered(subset)
        } else {
            setFiltered(plants)
        }
    }, [searchTerms, plants])
    
    return (
        <>
        <h2 className="listName">Plants</h2>
        <button className="button" onClick={
            () => history.push("/plants/create")
        }>Add Plant</button>
        <div className="plants">
            {
                filteredPlants.map(plant => {
                    return <PlantDetail key={plant.id} plant={plant} />
                })
            }
        </div>
        </>
    )
}