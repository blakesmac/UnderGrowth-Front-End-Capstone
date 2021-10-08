import React from "react"
import { Route, Redirect } from "react-router"
import { ApplicationViews } from "./ApplicationViews"
import { NavBar } from "./nav/NavBar"
import { Footer } from "./footer/footer"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"
import "./Undergrowth.css"

export const Undergrowth = () => (
    <>
      <Route
        render={() => {
          if (sessionStorage.getItem("undergrowth_user")) {
            return (
              
              <>
                <NavBar />
                <ApplicationViews />
                <Footer />
              </>
              
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