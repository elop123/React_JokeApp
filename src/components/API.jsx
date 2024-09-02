import React from 'react'
import { useState, useEffect } from 'react';
import s from '../style/API.module.scss'

function Api() {

  const url = 'https://official-joke-api.appspot.com/jokes/random';
  //const url2 = 'https://official-joke-api.appspot.com/types';

  const [jokes, setJokes] = useState();
  const [isClicked, setIsClicked] =useState(false);
  //const [category, setCategory] = useState([]);
 // const types = ['Programming', 'Dad', 'Knock', 'General']
 

  useEffect (()=>{
  async function getRandomJoke (){
    let res = await fetch(url);
      let data = await res.json()
      //console.log(data);
      setJokes(data); //Shows data
  }
  if(isClicked){
    getRandomJoke();
    setIsClicked(false); // Reset "isClicked" after fetching
  }
  },[isClicked]);
  
    
//   async function getJokesByCategory(types){
//     //console.log(types);
    
//     let res = await fetch(`https://official-joke-api.appspot.com/jokes/${type}/random`);
//     let data = await res.json()
//     console.log(data);
 
//    setCategory(data);
//     console.log('categories', data);

    
//  }

  // //Get Jokes by Categories
  //  useEffect(()=>{
  //   getJokesByCategory(category);
  // },[])
 

  return (
    <div className={s.container} >
      <h1>Get Random Joke:</h1>
      <button onClick={()=>{setIsClicked(true)}}> Get a joke </button>
      {/* <label for="jokes">Choose a category:</label>
      <select onClick={(e)=>{getJokesByCategory(e.target.value)}} >Choose a value
            <option value="general">general</option>
            <option value="dad">dad</option>
            <option value="programming">programming</option>
            <option value="knock-knock">knock-knock</option>
      </select> */}
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