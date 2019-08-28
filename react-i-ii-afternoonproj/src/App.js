import React, { Component } from 'react';
import data from './data'

import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {

    }
  }
  
  
  
  
  render(){
  console.log(data[0].name.first)
  console.log(data[0].name.last)
  console.log(data[0].city)
  console.log(data[0].country)
  console.log(data[0].employer)
  console.log(data[0].title)
  console.log(data[0].favoriteMovies[0])
  console.log(data[0].favoriteMovies[1])
  console.log(data[0].favoriteMovies[2])
  return (<>
    <div className="App-header">
      <div>Home</div>
    </div>
    <div className = "body">
      <div className = "square">
      <p className = "p1">{data[8].name.first} {data[8].name.last}</p> 
    <p className = "p2">From: {data[8].city}, {data[8].country}</p>
    <p className = "p2">Job Title: {data[8].title}</p> 
    <p className = "p2">Employer: {data[8].employer}</p> 
    <p className = "p2">Favorite Movies: </p>
    <p>1. {data[8].favoriteMovies[0]}</p>
    <p>2. {data[8].favoriteMovies[1]}</p>
    <p>3. {data[8].favoriteMovies[2]}</p>
      </div>
    </div>
    <div className = 'footer'>
      <button className = 'editButton'>Edit</button>
      <button className = 'deleteButton'>Delete</button>
      <button className = 'newButton'>New</button>
    </div>
   
    </>
  );
}
}

export default App;
