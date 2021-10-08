import React from "react"
import { Route } from "react-router-dom"
import { PlantProvider } from "./plants/PlantProvider"
import { PlantDetail } from "./plants/PlantDetail"
import { PlantForm } from "./plants/PlantForm"
import { PlantList } from "./plants/PlantList"
import { PlantSearch } from "./plants/PlantSearch"
import { HomePage } from "./homepage/HomePage"
import { GardenInfo } from "./gardeninfo/GardenInfo"
import { MyPlantsProvider } from "./myplants/MyPlantsProvider"
import { MyPlantsList } from "./myplants/MyPlantsList"
import { CommentProvider } from "./comments/CommentProvider"
import { CommentList } from "./comments/CommentList"
import { CommentDetail } from "./comments/CommentDetail"
import { CommentForm} from "./comments/CommentForm"

export const ApplicationViews = () => {
    return (
        <>
            <CommentProvider>
                <MyPlantsProvider>
                    <PlantProvider>
                        <Route exact path="/">
                            <HomePage />
                        </Route>

                        {/* <Route exact path="/gardeninfo">
                            <GardenInfo />
                        </Route> */}

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

                        <Route exact path="/myplants">
                            <MyPlantsList />
                        </Route>

                        <Route exact path="/comments">
                            <CommentList />
                        </Route>
                        <Route  path="/comments/detail/:commentId(\d+)">
                            <CommentDetail />
                        </Route>
                        <Route  path="/comments/edit/:commentId(\d+)">
                            <CommentForm />
                        </Route>
                        <Route  path="/comments/create">
                            <CommentForm />
                        </Route>

                    </PlantProvider>
                </MyPlantsProvider>
            </CommentProvider>
        </>
    )
}