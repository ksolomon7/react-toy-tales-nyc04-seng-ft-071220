import React, { Component } from 'react';

class ToyCard extends Component {
//we then call on this which is an instance of ToyCard we
//props is being passed down from ToyContainer to ToyCard
//and the props in this moment is the singleToyObj (one toy!)
//then you call the key that we set
//it is in curly braces bc its Js that needs to be interpolated

  render() {
    // console.log("show me this.props:", this.props)
    return (
      <div className="card">
        <h2>{this.props.name}</h2>
        <img src={this.props.photo} alt={this.props.name} className="toy-avatar" />
        <p>{this.props.like} Likes </p>
        <button className="like-btn">Like {'<3'}</button>
        <button className="del-btn">Donate to GoodWill</button>
      </div>
    );
  }

}

export default ToyCard;


// app >>> 
//     toycontainer >>> 
//              toycard     >>> 
//                         form 