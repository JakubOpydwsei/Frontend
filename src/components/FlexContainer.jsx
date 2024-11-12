// FlexContainer.jsx
import PersonProfile from "../components/PersonProfile.jsx";
// import { useContext } from "react";
// import AppContext from "../data/AppContext.js";
import { useNavigate } from "react-router-dom";
import useData from "./useData.jsx";
import useDispatch from "./useDispatch.jsx";

function FlexContainer() {
  //const context = useContext(AppContext);
  const items = useData();
  const dispatch = useDispatch();
  //const { items, dispatch } = context; // Pobierz items i dispatch z kontekstu
  const navigate = useNavigate();

  return (
    <div className="app">
      <h1>People List:</h1>
      <div className="flex-container person-list">
        {items.map((person) => (
          <div key={person.id} className="person-card-container">
            <PersonProfile person={person} />
            <div className="button-group">
              <button
                className="action-button edit-button"
                onClick={() => {
                  navigate("/lab4/edit", { state: { person } }); //
                }}
              >
                Edit
              </button>
              <button
                className="action-button delete-button"
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
                className="action-button rate-button"
                onClick={() => {
                  dispatch({
                    type: "rate",
                    id: person.id,
                  });
                }}
              >
                Rate
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FlexContainer;
