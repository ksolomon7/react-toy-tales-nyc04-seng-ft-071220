import React from 'react';
import ToyCard from './ToyCard'


//you have to pass in props as an argument bc we need to pass it down. Props makes a plain old javascript object with a key of "anything". Anything has a value of an array of objects. To get to that data you need to do props.anything. 
//if you just do props.map it won't give you anything
//now we are going to ToyCard
//in the map iteration we set keys for a single Toy to match the attribute in the data. 
const ToyContainer = (props) => {
  console.log("this is props", props )
  // console.log("this is anything", props.anything )
  return(
    <div id="toy-collection">
      {
      //now we need to iterate through that information
      // <ToyCard deleteToyFromState={props.deleteToyFromState} />
      props.anything.map((singleToyObj) => {
      return < ToyCard id={singleToyObj.id} name={singleToyObj.name} photo={singleToyObj.image} like={singleToyObj.likes} />
      })
      
    
      }
    </div>
  );
}

export default ToyContainer;


