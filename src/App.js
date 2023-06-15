import React, { useState } from 'react';
import './App.css';
import Resumesections from './components/Resumesections';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

function App() {
  const initialSections = [
    "Profile Summary",
    "Academic and Cocurricular Achievements",
    "Summer Internship Experience",
    "Work Experience",
    "Projects",
    "Certifications",
    "Leadership Positions",
    "Extracurricular",
    "Education"
  ];

  const [sections, setSections] = useState(initialSections);
  const [save, setSave]=useState(false)
  const handleDragEnd = (result) => {
    if (!result.destination) {
      return;
    }
    const updatedSections = Array.from(sections);
    const [removed] = updatedSections.splice(result.source.index, 1);
    updatedSections.splice(result.destination.index, 0, removed);

    setSections(updatedSections); //This updared section is given back to the database in a POST request to maintain the order 
  };
  
  function handleSave(){
    console.log("save"+save)
     setSave(true)
  }

  return (
    <div>
    <DragDropContext onDragEnd={handleDragEnd}>
      <div className='App'>
        <div className='App-header'>
          Select Your Sections
        </div>
        <Droppable droppableId='sections'>
          {(provided) => (
            <div className="App-container" ref={provided.innerRef} {...provided.droppableProps}>
              {sections.map((section, index) => (
                <Draggable key={section} draggableId={section} index={index}>
                  {(provided) => (
                    <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                      <Resumesections handleSave={handleSave} id={section} name={section} />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
        <div>
      {
        save?
        <button  className="Submit-button">Save and Next</button>: null
      }
    </div>
      </div>
    </DragDropContext>
  
    </div>
  );
}

export default App;
