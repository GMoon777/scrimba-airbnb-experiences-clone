import React from "react"
import Navbar from './components/Navbar.js'
import Hero from './components/Hero.js'
import Card from './components/Card.js'
import data from "./data"
import "./style.css"

export default function App() {
    
    const cards = data.map(item => {
        
        return (
            
    <Card
        key={item.id}
        {...item}/>
        ) 
    })
    
    return (
        <div>
        <Navbar/>
        <Hero/>
         <div className="cardHolder">
       {cards}
           </div>
        </div>
    )
}