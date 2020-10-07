import React, { Component } from 'react';



class ToyForm extends Component {


  //State needs to control the input
  //Input needs to control the state
  //Making a form a controlled component

  //we have a form to add a toy
  //the given inputs are name and image. these are the states that we are changing?


  state = {
    name: "",
    image: "",
  }

  //We need to add event listeners

  handleInputToy = (evt) => {
    // For you to use `evt.target.name`, the keys of your state has to match the name of your inputs
    console.log("show me the evt.target.value", evt.target.value)  

      this.setState({

        //we need to set the key of name to a new value
        //the input tag has a name= (evt.target.name) that is related to the form
        //that is the name we are referring to here: what is the value of the user input which is the evt.target.value

        [evt.target.name] : evt.target.value
        
      })
  }

  handleSubmitToy = (evt) => {
    evt.preventDefault()

    // console.log("what is the evt we kinda dont need it", evt )
    //console.log("show me this.props.newToy", this.props.newToy)
    // this.props.addNewToyToState(this.state)
    // console.log("new state", (this.state))


    fetch("http://localhost:3000/toys", {
      method: "POST",
      headers: {
          "Content-Type": "Application/json"
      },
      body: JSON.stringify({
          name: this.state.name,
          image: this.state.image
      })
    })
      .then(res => res.json())
      .then((newlyCreatedToy)=> {
          this.props.addNewToyToState(newlyCreatedToy)
      })










  }



  render() {
    return (
      <div className="container">
        <form className="add-toy-form" onSubmit={this.handleSubmitToy}>
          <h3>Create a toy!</h3>
          <input type="text" value={this.state.name} onChange={this.handleInputToy}   name="name" placeholder="Enter a toy's name..." className="input-text"/>
          <br/>
          <input type="text" value={this.state.image} onChange={this.handleInputToy} name="image" placeholder="Enter a toy's image URL..." className="input-text"/>
          <br/>
          <input type="submit" name="submit" value="Create New Toy" className="submit"/>
        </form>
      </div>
    );
  }

}

export default ToyForm;
