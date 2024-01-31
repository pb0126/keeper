import React from "react";


function Notes(props){
  return(
    <div className="notes-body">
      <h3>{props.title}</h3>
      <p>{props.content}</p> 
    </div>
  )
}

export default Notes;