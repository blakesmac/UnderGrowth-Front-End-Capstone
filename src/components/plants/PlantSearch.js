import React, { useContext } from "react"
import { PlantContext } from "./PlantProvider"
import "./plant.css"

export const PlantSearch = () => {
    const {setSearchTerms} = useContext(PlantContext)

    return (
        <>
          <div className="search">Search:</div>
            <input type="text"
            className="input--wide"
            onKeyUp={(event) => setSearchTerms(event.target.value)}
            placeholder="Search for a Plant" />
            

        </>
    )
}