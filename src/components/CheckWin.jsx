import React from "react";

export function Popup({CheckWin, setPlayable, playable}){
    let message = ""
// console.log(CheckWin())
if(CheckWin() === 'win'){
     message = "Congrats!!!You won the game"
     setPlayable(false)
}
else if(CheckWin() === 'lose'){
   message = 'Sorry you lose a game'
   setPlayable(false)
}
else{ 
    message = 'Play On'
   setPlayable(true)

}
    return(
        <>
       <div>
      { 
       !playable
        &&
        `${message}`
        }
       </div>
        </>
    )
}