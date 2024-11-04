export default function AppReducer(state, action) {
  switch (action.type) {
    case "add":
      console.log(action.payload);
      return [...state, action.payload];
    case "edit":
      return state.map((person) => {
        if (person.id === action.id) {
          console.log("editing");
        }
        return person;
      });

    case "rate":
      return state.map((person) => {
        if (person.id === action.id) {
          return { ...person, rating: (person.rating + 1) % 11 };
        }
        return person;
      });

    case "delete":
      return state.filter((person) => person.id !== action.id);
  }
}
