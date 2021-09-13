// import React, { useContext, useEffect } from "react"
// import { useHistory } from "react-router"
// import { MyPlantsContext } from "./MyPlantsProvider"
// import { PlantDetail } from "../plants/PlantDetail"
// import "./plant.css"

// export const MyPlants = () => {
//     const history = useHistory()
//     const {myplants, getMyPlants } = useContext(MyPlantsContext)
    
//     const curentUser = parseInt(sessionStorage.getItem("undergrowth_user"))

//     useEffect(() => {
//         getMyPlants()
//     }, [])

//     return (
//         <section className="myplants__list">
//             <h2>My Plants</h2>
//             {
//                 myplants.map(myplant => {
//                     if (currentUser === myplant.curentUserId) {
//                         return <PlantDetail key={myplant.id} user={myplant.user} myplantId={myplant.id} isMyPlant={true} />
//                     }
//                 })
//             }
//         </section>
//     )
// }