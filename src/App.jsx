import React from "react"
import { Route, Routes } from "react-router-dom"
import Search from "./Search"
import Recipe from "./Recipe"
function App() {

  
  
  return (
    <>
      <Routes>
        <Route path="/" element={<Search/>} />
        <Route path="/recipe" element={<Recipe/>} />
        </Routes> 
    </>
  )
}

export default App
