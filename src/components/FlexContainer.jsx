import PersonProfile from "../components/PersonProfile.jsx";
// import { useState } from "react";
import { useReducer } from "react";
import AppReducer from "../data/AppReducer";

function FlexContainer({element}) {
//   const [personRate, changeRate] = useState(0);
//   const [personEdit, editPerson] = useState(0);
//   const [personDelete, deletePerson] = useState(0);
  //console.log(element.element)
  const [items, dispatch] = useReducer(AppReducer, element);
  return (
    <>
      <div className="app">
        <h1>People List:</h1>
        <div className="d-flex flex-col mb-3 flex-wrap align-content-center">
          {items.map((person) => (
            <div key={person.id} className="p-2 person-list ">
              <PersonProfile key={person.id} person={person} />
              <button
                onClick={() => {
                  dispatch({
                    type: "edit",
                    id: person.id,
                  });
                }}
              >
                Edit
              </button>
              <button
                onClick={() => {
                  dispatch({
                    type: "delete",
                    id: person.id,
                  });
                }}
              >
                Delete
              </button>
              <button
              onClick={() => {
                dispatch({
                        type: "rate",
                        id: person.id,
                        rate: person.rating
                            });
                        }
                 }
                // onClick={() =>
                //   changeRate((person.rating = (person.rating + 1) % 11))
                // }
              >
                Rate
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default FlexContainer;
