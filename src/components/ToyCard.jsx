import React, { Component } from 'react';

class ToyCard extends Component {
//we then call on this which is an instance of ToyCard we
//props is being passed down from ToyContainer to ToyCard
//and the props in this moment is the singleToyObj (one toy!)
//then you call the key that we set
//it is in curly braces bc its Js that needs to be interpolated


handleDelete = (evt) => {
console.log(this.props)


  fetch(`http://localhost:3000/toys/${this.props.id}`, {
      method: "DELETE"
  })
      .then(res => res.json())
      .then((deletedObj) => {
        console.log("we are in this handler", deletedObj)
          console.log("what are you?", this.props.deleteToyFromState(deletedObj.id))
      })

}

  render() {
    // console.log("show me this.props:", this.props)
    return (
      <div className="card">
        <h2>{this.props.name}</h2>
        <img src={this.props.photo} alt={this.props.name} className="toy-avatar" />
        <p>{this.props.like} Likes </p>
        <button className="like-btn">Like {'<3'}</button>
        <button onClick={this.handleDelete} className="del-btn">Donate to GoodWill</button>
      </div>
    );
  }

}

export default ToyCard;


// app >>> 
//     toycontainer >>> 
//              toycard     >>> 
//                         form 