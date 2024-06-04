import React from 'react'
import html from "../assets/tech/html.png"
import css from "../assets/tech/css.png"
import js from "../assets/tech/js.png"
import react from "../assets/tech/react.png"
import next from "../assets/tech/next.png"
import nodejs from "../assets/tech/nodejs.png"
import mongo from "../assets/tech/mongo.png"
import mysql from "../assets/tech/mysql.png"
import tailwind from "../assets/tech/tailwind.png"
import "./Tech.css"


const Tech = () => {
  return (
    <div className="stack-container">
        <div className="stack-icon">
        <img src={html} alt="" />
        </div>
        <div className="stack-icon">
        <img src={css} alt="" />
        </div>
        <div className="stack-icon">
        <img src={js} alt="" />
            
        </div>
        <div className="stack-icon">
        <img src={react} alt="" />
            
        </div>
        <div className="stack-icon">
        <img src={next} alt="" />
            
        </div>
        <div className="stack-icon">
        <img src={nodejs} alt="" />
            
        </div>
        <div className="stack-icon">
        <img src={mongo} alt="" />
            
        </div>
        <div className="stack-icon">
        <img src={mysql} alt="" />
            
        </div>
        <div className="stack-icon">
        <img src={tailwind} alt="" />
            
        </div>       
    </div>
  )
}

export default Tech