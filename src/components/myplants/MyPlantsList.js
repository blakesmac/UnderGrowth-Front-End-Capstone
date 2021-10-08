import React, { useContext, useEffect } from "react"
import { useHistory } from "react-router"
import { MyPlantsContext } from "./MyPlantsProvider"
import { PlantDetail } from "../plants/PlantDetail"
import { PlantContext } from "../plants/PlantProvider"
import { Button } from "react-bootstrap"
import "./myplant.css"
export const MyPlantsList = () => {
    const history = useHistory()
    const {myplants, getMyPlants } = useContext(MyPlantsContext)
    const { getPlants } = useContext(PlantContext)
    
    const currentUser = parseInt(sessionStorage.getItem("undergrowth_user"))

    useEffect(() => {
        getMyPlants() // make sure this works !!!
    }, [])

    return (
        <section className="myplants__object">
            <h2 className="myPlantsTitle">My Plants</h2>
            <Button size="lg" variant="dark"  className="headerButton findPlants" onClick={
                () => history.push("/plants")
            }> Explore more plants!</Button>
            <div className="myplants__list">
            {
                myplants.map(myplant => {
                    if (currentUser === myplant.userId) {
                        return <PlantDetail key={myplant.id} user={myplant.user} myplantId={myplant.id} isMyPlant={true} plant={myplant.plant} />
                    }
                })
            }
            </div>
        </section>
    )
}