import React, {useState, createContext} from "react"

const URL = "http://localhost:8088"

export const MyPlantsContext = createContext()
export const MyPlantsProvider = (props) => {
    const [myplants, setMyPlants] = useState([])
    
    const getMyPlants = () => {
        return fetch(`${URL}/myplants?_expand=user&_expand=plant`)
        .then(r => r.json())
        .then(setMyPlants)
    }
    const addMyPlant = myPlantObj => {
        return fetch(`${URL}/myplants`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(myPlantObj)
        })
        .then(getMyPlants)
    }

    const getMyPlantsByUserId = () => {
        return fetch(`${URL}/myplants`)
        .then(r => r.json())
    }

    const deleteMyPlant = (myplantId) => {
        return fetch(`${URL}/myplants/${myplantId}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(getMyPlants)
    }

    return (
        <MyPlantsContext.Provider value={{
            myplants, getMyPlants, addMyPlant, deleteMyPlant, getMyPlantsByUserId
        }}>
            {props.children}
        </MyPlantsContext.Provider>
    )
}