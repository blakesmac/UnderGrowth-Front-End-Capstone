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
              <div className="bg__img" style={{
                width: '100%',
                height: '100%', 
                backgroundImage: `url("https://i.pinimg.com/236x/ef/ca/97/efca9751ea57e9c4cecb5648c41c0c31.jpg")`,
                backgroundRepeat: 'repeat', 
                
              }}>
              <>
                <NavBar />
                <ApplicationViews />
                <Footer />
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