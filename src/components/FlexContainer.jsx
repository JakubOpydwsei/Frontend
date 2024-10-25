import PersonProfile from "../components/PersonProfile.jsx";
import { useState } from "react";



function FlexContainer(element) {
    const[personRate, changeRate] = useState(0);
    const[personEdit, editPerson] = useState(0);
    const[personDelete, deletePerson] = useState(0);
    //console.log(element.element)
  return (
    <>
      <div className="app">
        <h1>People List:</h1>
        <div className="d-flex flex-col mb-3 flex-wrap align-content-center">
          
          {element.element.map((person) => (
            <div key={person.id} className="p-2 person-list ">
            <PersonProfile key={person.id} person={person} />
            <button onClick={() => editPerson(personEdit)}>Edit</button>
            <button onClick={() => deletePerson(personDelete)}>Delete</button>
            <button onClick={() => changeRate(person.rating = (person.rating + 1)%11)}>Rate</button>
            <p>{personRate}</p> 
            </div>
          ))}
          
        </div>
      </div>
    </>
  );
}

export default FlexContainer;
