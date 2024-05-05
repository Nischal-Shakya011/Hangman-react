import React from "react";

const CorrectWords = ({selectedWords, correctWords})=>{

    return<>
    {
        selectedWords.split("").map((char, i)=>{
return<>
<span className="char" key={i}>{correctWords.includes(char) ? char : ''}</span>
</>
    })
    }
    </>
}
export default CorrectWords