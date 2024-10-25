import { data } from "../lab01/module-data.js";

export default function AppReducer(state, action){
    switch(action.type){
        case "edit":
            return state;
        case "rate":{
            return state.map(person =>{
                if (person.id == action.id){
                    return { ...person, rating: (action.rate + 1 ) %11 };
                }
                return person;
            });
        }
        case "delete":
            // console.log(data.filter(person => person.id != action.id))
            return state.filter(person => person.id != action.id); 
    }
}
