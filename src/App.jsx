
import { Routes, Route, Navigate, useNavigate } from "react-router-dom"
import Navbar from "./components/navbar"
import Home from "./Pages/home"
import Favourites from "./Pages/favourites"
import Details from "./Pages/details"
import { useEffect } from "react"

function App() {

  return (
    <div className="min-h-screen w-full bg-slate-900 text-white">
      
      <Navbar/>                   {/* navbar is fixed throughout the pages*/}
      
      <Routes>

        <Route 
        path="/"
        element = {<Home/>}
        />   

        <Route
        path="/recipe-details/:id"
        element = {<Details/>}
        /> 
        <Route
        path="/favourites"
        element = {<Favourites/>}
        />
      </Routes>
    </div>
  )

}

export default App
