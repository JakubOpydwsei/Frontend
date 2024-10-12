//import React from 'react';

const PersonProfile = ({ person }) => {
  return (
    <div className="person-card">
      <h3>Name: {person.name}</h3>
      <p>Age: {person.age}</p>
      <p>City: {person.city}</p>
    </div>
  );
};

export default PersonProfile;

