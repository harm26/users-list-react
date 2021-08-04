import React from "react";

function TableBody({ users, deleteUser, searchTerm }) {
  return (
    <tbody>
      {users.length !== 0 ? (
        users
          .filter((user) => {
            if (searchTerm === "") {
              return user;
            } else if (
              user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
              user.username.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return user;
            }
          })
          .map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>
                <button
                  className="btn btn-outline-danger mx-2"
                  onClick={() => deleteUser(user.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))
      ) : (
        <tr>
          <td colSpan="4">No Users</td>
        </tr>
      )}
    </tbody>
  );
}

export default TableBody;
