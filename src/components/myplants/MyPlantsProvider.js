// import React, {useState, createContext} from "react"

// const URL = "http://localhost:8088"

// export const MyPlantsContext = createContext()
// export const MyPlantsProvider = (props) => {
//     const [myplants, setMyPlants] = useState([])
    
//     const getMyPlants = () => {
//         return fetch(`${URL}/myplants?_expand=user&_sort=user.id`)
//         .then(r => r.json())
//         .then(setMyPlants)
//     }
//     const addMyPlant = favoriteObj => {
//         return fetch(`http://localhost:8088/myplants`, {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify(favoriteObj)
//         })
//         .then(getMyPlants)
//     }

//     const getMyPlantsByCurrentUserId = () => {
//         return fetch(`${URL}/myplants`)
//         .then(r => r.json())
//     }

//     const deleteMyPlant = (myPlantId) => {
//         return fetch(`${URL}/myplants/${myPlantId}`, {
//             method: "DELETE",
//             headers: {
//                 "Content-Type": "application/json"
//             }
//         })
//         .then(getMyPlants)
//     }

//     return (
//         <MyPlantsContext.Provider value={{
//             myplants, getMyPlants, addMyPlant, deleteMyPlant
//         }}>
//             {props.children}
//         </MyPlantsContext.Provider>
//     )
// }