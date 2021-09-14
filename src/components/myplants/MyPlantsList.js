import React, { useContext, useEffect } from "react"
import { useHistory } from "react-router"
import { MyPlantsContext } from "./MyPlantsProvider"
import { PlantDetail } from "../plants/PlantDetail"
import { PlantContext } from "../plants/PlantProvider"
export const MyPlantsList = () => {
    const history = useHistory()
    const {myplants, getMyPlants } = useContext(MyPlantsContext)
    const { getPlants } = useContext(PlantContext)
    
    const currentUser = parseInt(sessionStorage.getItem("undergrowth_user"))

    useEffect(() => {
        getMyPlants().then(getPlants()) // make sure this works !!!
    }, [])

    return (
        <section className="myplants__list">
            <h2>My Plants</h2>
            <button className="headerButton findPlants" onClick={
                () => history.push("/plants")
            }> Explore more plants!</button>
            {
                myplants.map(myplant => {
                    if (currentUser === myplant.userId) {
                        return <PlantDetail key={myplant.id} user={myplant.user} myplantId={myplant.id} isMyPlant={true} plant={myplant.plant} />
                    }
                })
            }
        </section>
    )
}