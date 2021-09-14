import React from "react"
import { Route, Redirect } from "react-router"
import { ApplicationViews } from "./ApplicationViews"
import { NavBar } from "./nav/NavBar"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"
import "./Undergrowth.css"

export const Undergrowth = () => (
    <>
      <Route
        render={() => {
          if (sessionStorage.getItem("undergrowth_user")) {
            return (
              <div style={{ 
                backgroundImage: `url("https://wallpaperaccess.com/full/1271952.jpg")` 
              }}>
              <>
                <NavBar />
                <ApplicationViews />
              </>
              </div>
            )
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
  
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
    </>
  )