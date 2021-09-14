// import React, { useContext, useEffect, useState } from "react"
// import { useHistory, useParams } from "react-router-dom";
// import { MyPlantsContext } from "./MyPlantsProvider";
// import { PlantContext } from "../plants/PlantProvider";

// export const MyPlants = (props) => {
//     const { myplants, addMyPlant, deleteMyPlant, getMyPlants } = useContext(MyPlantsContext)
//     const {getPlants} = useContext(PlantContext)
//     const [myplant, setMyPlant] = useState([{ plant: {} }])
//     const history = useHistory();
//     const { myPlantId } = useParams();
//     const currentUser = parseInt(sessionStorage.getItem("undergrowth_user"))

    // useEffect(() => {
    //     getMyPlants().then(getPlants())
    //     .then(() => {
    //         const thisMyPlant = myplants.find(m => m.id === parseInt(myPlantId)) || {plant: {} }
    //         setMyPlant(thisMyPlant)
    //     })
    // }, [myPlantId])

//     const handleSaveMyPlant = (plant) => {
//         addMyPlant({
//             plantId: parseInt(props.plant.id),
//             currentUserId: currentUser
//         })
//         .then(() => history.push(`/myplants`))
//     }

//     const handleDeleteMyPlant = () => {
//         deleteMyPlant(props.myPlantId)
//         .then(() => {
//             history.push("/plants")
//         })
//     }

//     return (
//         <>
//         <section className="myplant" key={props.plant.id}>
//             <div className="myplant__div">
//                 <img className="myplant__img" key={props.plant.id} src={props.plant.img} />
//             </div>
//             <div className="myplant__info" key={props.plant.id}>
//                 <h3 className="plant__name">{props.plant.name}</h3>
//                 <p className="myplant__species">{props.plant.species} </p>
//                 <p className="myplant__plantingzone">{props.plant.plantingzone} </p>
//                 <p className="myplant__growinfo">{props.plant.growinfo} </p>
//                 <p className="myplant__whentogrow">{props.plant.whentogrow} </p>
//              </div>
//              <div className="button__div">
//                  <button className="savePlant__button" disabled={props.isMyPlant} onClick={event => {
//                      event.preventDefault()
//                      handleSaveMyPlant()
//                  }}>{props.isMyPlant ? <> Already Mine! </> : <>Add to My Plants</>} </button>
//                  <button className="deletePlant_button" disabled={!props.isMyPlant} onClick={event => {
//                      event.preventDefault()

//                      handleDeleteMyPlant()
//                  }}>{props.isFriend ? <>Remove Plant</> : <> </> } </button>
//              </div>
             
//         </section>
//         </>
//     )
// }
