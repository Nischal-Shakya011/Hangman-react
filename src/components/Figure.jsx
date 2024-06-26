import React from "react";
 
const Figure = ({wrongWords}) =>{
const error = wrongWords.length;
    return(
        <>
   <svg height="250" width="200" className="figure-container">
      {/* <!-- Rod --> */}
      <line x1="60" y1="20" x2="140" y2="20" />
      <line x1="140" y1="20" x2="140" y2="50" />
      <line x1="60" y1="20" x2="60" y2="250"/>
      <line x1="20" y1="250" x2="100" y2="250"/>

      {
        error > 0 &&
        <circle cx="140" cy="70" r="20" />
      }
      {
        error > 1 &&
        <line x1="140" y1="70" x2="140" y2="150" />
      }
      {error > 2 &&
        <line x1="140" y1="120" x2="120" y2="100" />
      }
      {error > 3 &&
        <line x1="140" y1="120" x2="160" y2="100" />
      }
      {error > 4 &&
        <line x1="140" y1="150" x2="120" y2="180" />
      }
      {error > 5 &&
        <line x1="140" y1="150" x2="160" y2="180" />
      }

      </svg>
       
        </>
    )
}
export default Figure;