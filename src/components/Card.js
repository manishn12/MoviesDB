import React from 'react'
import './Card.css';


function Card(props) {

// const cardDetail = (e) => {
// console.log(props.id);

// }

    return (
        
        <div className = "card"  onClick = {props.cardDetail}>
             <p className="id-class" style={{display:"none"}}>{props.id}</p>
            <img src={`https://image.tmdb.org/t/p/w500${props.url}`}  alt={props.movieName} />
            <p className="Name">{props.movieName} </p>
            <p className="rating">Rating - {props.rating}</p>
           <p className="adult">Explicit:  {props.adultContent ? <p className="adult-unsafe">Unsafe</p> : <p className="adult-safe">Safe</p>}</p>
           
           <div className="movie-over">
               <h2>Overview: </h2>
               <p className="overview-content">{props.overview}</p>
           </div>
  </div>
     
    )
}

export default Card
