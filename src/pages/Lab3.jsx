import { data } from "../lab01/module-data.js";
import PersonProfile from "../components/PersonProfile.jsx";
import { useState } from "react";



function Lab3() {
    const[personRate, changeRate] = useState(0);
    const[personEdit, editPerson] = useState(0);
    const[personDelete, deletePerson] = useState(0);
  return (
    <>
      <div className="app">
        <h1>People List:</h1>
        <div className="d-flex flex-col mb-3 flex-wrap align-content-center">
          
          {data.map((person) => (
            <div key={person.id} className="p-2 person-list ">
            <PersonProfile key={person.id} person={person} />
            <button onClick={() => editPerson(personEdit)}>Edit</button>
            <button onClick={() => deletePerson(personDelete)}>Delete</button>
            <button onClick={() => changeRate((personRate = person.rating) => (person.rating = personRate + 1)%10)}>Rate</button>
            <p>{personRate}</p>
            </div>
          ))}
          
        </div>
      </div>
    </>
  );
}

export default Lab3;
