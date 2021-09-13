import React, {useState, createContext } from "react"

export const PlantContext = createContext()

export const PlantProvider = (props) => {
    const [plants, setPlants] = useState([])
    const [searchTerms, setSearchTerms] = useState("")

    const getPlants = () => {
        return fetch(`http://localhost:8088/plants?_expand=userId`)
        .then(r => r.json())
        .then(setPlants)
    }

    const getPlantById =(plantId) => {
        return fetch(`http://localhost:8088/plants/${plantId}`)
        .then(r => r.json())
    }

    const addPlant = plantObj => {
        return fetch(`http://localhost:8088/plants`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(plantObj)
        })
        .then(getPlants)
    }

    

    const editPlant = plant => {
        return fetch(`http://localhost:8088/plants/${plant.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(plant)
        })
        .then(getPlants)
    }

    const deletePlant = plantId => {
        return fetch(`http://localhost:8088/plants/${plantId}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(getPlants)
        
    }

    return (
        <PlantContext.Provider value={{
            plants, setPlants, getPlants, getPlantById, addPlant, searchTerms, setSearchTerms, editPlant, deletePlant
        }}>
            {props.children}
        </PlantContext.Provider>
    )
}