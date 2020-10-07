import React from 'react';
import './App.css';

import Header from './components/Header'
import ToyForm from './components/ToyForm'
import ToyContainer from './components/ToyContainer'

import data from './data'


//we now have information up
//we need that to be reflected in our DOM + backend
//we need a setState --> dom 
//we need a spread operator to add it to the end....backend 


class App extends React.Component{

  

  state = {
    display: false,
    //we are making a key of toys and setting it equal to data
    toys: []

  }

  componentDidMount(){

    // Similar to DOMContentLoaded
    // Great place to make requests when the page loads
      // <App/> gets mounted only once
    fetch("http://localhost:3000/toys")
      .then(res => res.json())
      .then((arrayOfToys) => {
        this.setState({
          toys: arrayOfToys 
        })
      })


  }


  addNewToyToState = (newlyCreatedToy) => {
    let copyOfToys = [...this.state.toys, newlyCreatedToy]
    //this is being passed in the fetch in our Form
    this.setState({
      toys: copyOfToys
    })
  }




  handleClick = () => {
    let newBoolean = !this.state.display
    this.setState({
      //trigger a rerender >> manipulating the DOM
      //in this moment of the App.js we are manipulating the form being shown
      //by changing the display boolean
  
      display: newBoolean //true
    })
  }




  render(){
  //  console.log("show me a toy", this.state.toys)
  //our ToyContainer which is a component is being called within this render
 
  //in order to render items to the DOM, the data was passed down to the ToyContainer component
  //in the form of props
  //anything={this.state.toys}
  //your props can have a "key" and it could be anything...for tracking purposes that is
  //why we named it as such.
  //then we needed to open the door to access it. how do we access values of a key
  //you dot through it.
  //this dot state dot toys
  //this.state.toys

  //this being an instance of the Class that we are in meaning App
  //App.state.toys --->>>> which is the array of objects
  //now we go to our ToyContainer



    return (
      <>
        <Header/>
        { this.state.display
            ?
          <ToyForm addNewToyToState={this.addNewToyToState}/>
            :
          null
        }
        <div className="buttonContainer">
          <button onClick={this.handleClick}> Add a Toy </button>
        </div>
        <ToyContainer anything={this.state.toys}/>
      </>
    );
  }

}

export default App;
