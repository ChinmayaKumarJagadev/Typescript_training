import React from 'react';

interface UserProps {
  name: string;
  age: number;
}

const User: React.FC<UserProps> = ({ name, age }) => {
  return (
    <div className="card my-3 mx-auto w-50 ">
      <div className="card-body">
        <h2 className="card-title">User Profile</h2>
        <p className="card-text">Name: {name}</p>
        <p className="card-text">Age: {age}</p>
      </div>
    </div>
  );
};

export default User;
