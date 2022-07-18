import React from "react"

export default function Card(props) {
    
    let badgeText
    
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    }
    else if (props.location === "Online"){
        badgeText = "ONLINE"
    }

    return (
        <div className="card">
        {badgeText && <div className="card--badge">{badgeText}</div>}
        <img src={`../images/${props.coverImg}`}
        alt={props.title}
        className="card--image"/>
        
        <div className="card--stats">
                <img src="../images/star.png"
                alt="star Icon"
                className="card--star" />
                <span className="gray">{props.stats.rating}</span>
                <span className="gray" >({props.stats.reviewCount}) • </span>
                <span className="gray">{props.location}</span>
                </div>
        
         <p className="card--experienceText"> 
             {props.title}
        </p>
        
           <p className="card--priceText"> 
            <span className="bold"> From ${props.price} </span> / person
        </p>
        
        </div>
    )
}