//import React from 'react';

const PersonProfile = ({ person }) => {
  return (
    <div className="person-card">
      <h6>Name: {person.name}</h6>
      <h6>Age: {person.age}</h6>
      <h6>City: {person.city}</h6>
      <h6>Raiting: {person.rating}</h6>
      {/* <RatingBar rate={person.rating}/> */}
    </div>
  );
};

export default PersonProfile;

