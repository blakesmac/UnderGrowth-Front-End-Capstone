import React, { useContext, useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { PlantContext } from "./PlantProvider"
import { PlantDetail } from "./PlantDetail"
import "./plant.css"
import { Button } from "react-bootstrap"

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
        <p className="listP"> Browse through plants and veggies and add the the ones you like! </p>
        <Button size="lg" variant="dark" className="button__addPlant" onClick={
            () => history.push("/plants/create")
        }>Add Plant</Button>
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