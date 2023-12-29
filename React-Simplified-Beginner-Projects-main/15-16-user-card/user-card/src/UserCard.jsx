import React from 'react';

const UserCard = ({ name, age, phone, address }) => {
  return (
    <div className="card">
      <h2 className="name">{name}</h2>
      <div className="body">
        <div className="label">Age:</div>
        <div>{age}</div>
        <div className="label">Phone:</div>
        <div>{phone}</div>
        <div className="label">Address:</div>
        <div>{address}</div>
      </div>
    </div>
  );
};

export default UserCard;
