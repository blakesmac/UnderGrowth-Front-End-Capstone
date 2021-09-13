import React from "react"
import {Route} from "react-router-dom"
import { PlantProvider } from "./plants/PlantProvider"  
import { PlantDetail } from "./plants/PlantDetail"
import { PlantForm } from "./plants/PlantForm"
import { PlantList} from "./plants/PlantList"
import {PlantSearch} from "./plants/PlantSearch"
import { HomePage } from "./homepage/HomePage"
import { GardenInfo } from "./gardeninfo/GardenInfo"


export const ApplicationViews = () => {
    return (
        <>
            <PlantProvider>
                <Route exact path="/">
                    <HomePage />
                </Route>

                <Route exact path="/gardeninfo">
                    <GardenInfo />
                </Route>

                <Route exact path="/plants">
                    <PlantSearch />
                    <PlantList />
                </Route>

                <Route path="/plants/detail/:plantId(\d+)">
                    <PlantDetail />
                </Route>

                <Route path="/plants/edit/:plantId(\d+)">
                    <PlantForm />
                </Route>

                <Route path="/plants/create">
                    <PlantForm />
                </Route>

            </PlantProvider>
        </>
    )
}