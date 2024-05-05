import React from 'react';
import { useState, useEffect } from 'react';
import { Words } from './const';
import CorrectWords from './components/CorrectWords';
import Figure from './components/Figure';
import { Popup } from './components/CheckWin';
import './App.css';

let selectedWords = Words[Math.floor(Math.random() * Words.length)] ;
// console.log(selectedWords);

function App() {
  const [playable, setPlayable] = useState(true)
  const [correctWords, setCorrectWords] = useState([]);
  const [wrongWords, setWrongWords] = useState([]);

  useEffect(() => {
const handleKeyDown = (event) =>{
  event.preventDefault();
const {key, keyCode} = event;
if(playable && keyCode >= 65 && keyCode <= 90)
{
  const letter = key.toLowerCase();
  if(selectedWords.includes(letter))
  {
    if(!correctWords.includes(letter)){
      setCorrectWords(currentWords => [...currentWords, letter])
    }
else{
  alert("the letter is already entered")
}
  }
  else
  {
    if(!wrongWords.includes(letter)){
      setWrongWords(currentWords => [...currentWords, letter])
      // console.log(wrongWords);
    }
    else{
      alert("the letter is already entered")
    }
  }
  
}
}
window.addEventListener('keydown', handleKeyDown);

return () => window.removeEventListener('keydown', handleKeyDown);

  }, [correctWords, wrongWords, playable])

function PlayAgain() {
  setCorrectWords([])
  setWrongWords([])
  selectedWords = Words[Math.floor(Math.random() * Words.length)]
}
function CheckWin(){
  let stat = "win"

  selectedWords.split('').forEach(letter=>{
    if(!correctWords.includes(letter))
    {
    stat = "";
    }
  })

  if(wrongWords.length >= 6){
    stat = "lose"
  }
  return stat;
  // console.log(stat);
}

CheckWin();
  return (
  <>
<CorrectWords selectedWords={selectedWords} correctWords={correctWords}/>
<Figure wrongWords={wrongWords}/>
<Popup CheckWin={CheckWin} setPlayable={setPlayable} playable={playable}/>
  </>
  )
}

export default App;
