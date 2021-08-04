import React, { useState, useEffect } from "react";
import TableBody from "./TableBody";

function Table({ users, setUsers }) {

  const [searchTerm, setSearchTerm] = useState("")

  const url = "https://jsonplaceholder.typicode.com/users";

  const fetchApi = async () => {
    const resp = await fetch(url);
    const data = await resp.json();
    setUsers(data);
  };

  const deleteUser = (id) => {
    const newArrayUsers = users.filter((elem) => id !== elem.id);

    setUsers(newArrayUsers);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <div className="container mt-5">
      <form className="">
        <input
          type="text"
          placeholder="Search..."
          className="form-control my-3"
          onChange={(event) => {setSearchTerm(event.target.value)}}
        />
      </form>
      <table className="table table-primary table-striped table-bordered">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">User name</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>

        <TableBody users={users} deleteUser={deleteUser} searchTerm= {searchTerm}/>
      </table>
    </div>
  );
}

export default Table;
