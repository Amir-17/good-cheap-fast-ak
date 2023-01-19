import React from "react";
import "./Popupalert.css"

const Popupalert =({
    isModalOpened,
    closeAction}) => {

    return (
        <div 
        className="popup-container"
        style={{ 
            display: isModalOpened ? "flex" : "none",
            justifyContent: "center",
            alignItems:"center",
            position:  "absolute",
            background: "#000000b4",
            textAlign: "center",
            color: "white",
            width: "100%",
            height: "100%",
        }}
        >
            <div className="alert-message">
               <header className="alert_header">  <button className="closing_button" onClick={() => closeAction(false)}>X</button></header>
               <p className="message">You can NOT select all three options!</p>
            </div>
           
          
        </div>
    )
}

export default Popupalert