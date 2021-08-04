import React, { useState } from "react";
import AddUser from "./components/AddUser";
import Table from "./components/Table";

const App = () => {
  const [users, setUsers] = useState([]);

  return (
      <div className="container text-center my-5">
      <h1>Users list</h1>
      <div className="row">
        <div className="col md-5">
      <Table users={users} setUsers={setUsers} />
      </div>
      <div className="col md-5">

      <AddUser users={users} setUsers={setUsers} />
      </div>
    </div>
      </div>
  );
};

export default App;
