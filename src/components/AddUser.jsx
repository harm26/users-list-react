import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const AddUser = ({ users, setUsers }) => {
  const [newUser, setNewUser] = useState({ id: null, name: "", username: "" });

  const addNewUsers = () => {

    newUser.id = uuidv4();
    setUsers([...users, newUser]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addNewUsers();
    setNewUser({ id: null, name: "", username: "" })

  };

  const handleChange = (e) => {
    setNewUser({
      ...newUser,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="container m-5">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          name="name"
          className="form-control"
          onChange={handleChange}
          value={newUser.name || "" }

        />
        <input
          type="text"
          placeholder="user name"
          name="username"
          className="form-control"
          onChange={handleChange}
          value={newUser.username}

        />
        <div className="d-grid gap-2">
          <button
            type="submit"
            className="btn btn-outline-primary btn-block mt-2"
          >
            Add user
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddUser;
