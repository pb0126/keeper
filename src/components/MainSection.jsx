import React from "react";
import Notes from "../components/Notes"
import notes from "../notes"

function noteEntry(item){
  return(
    <Notes 
      key={item.key}
      title={item.title}
      content={item.content}
    />
  )
}

function MainSection() {
  return (
    <section className="main-section">
      <div>
        <h1>Welcome to Notes app!</h1>
        <p>Here you can store your daily  notes. It's free and always will be.</p>

        {notes.map(noteEntry)}
        
      </div>
    </section>
  )
}

export default MainSection;