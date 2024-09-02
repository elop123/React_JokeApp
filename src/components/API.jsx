import React from 'react'
import { useState, useEffect } from 'react';
import s from '../style/API.module.scss'

function Api() {

  const url = 'https://official-joke-api.appspot.com/jokes/random';
  const [jokes, setJokes] = useState();
  const [isClicked, setIsClicked] =useState(false);
 

  useEffect (()=>{
  async function getRandomJoke (){
    let res = await fetch(url);
      let data = await res.json()
      console.log(data);
      setJokes(data);
  }
  if(isClicked){
    getRandomJoke();
    setIsClicked(false); // Reset isClicked after fetching
  }
  },[isClicked]);

  //console.log("Data: ", jokes);
    
  return (
    <div className={s.container} >
      <h1>Get Random Joke:</h1>
      <button onClick={()=>{setIsClicked(true)}}> Get a joke </button>

     {jokes && ( 
        <div className={s.jokeContainer}key={jokes.id}>
          <h2> {jokes.setup}</h2>
          <p>Answer: {jokes.punchline}</p>
        </div>
      )} 
    </div>
  );
}
    export default Api