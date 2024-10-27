import React, { useState } from "react";
import Form from "./components/Form";
import UserList from "./components/UserList";

const App = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const submitHandler = (newUser) => {
    setUsers([...users, newUser]);
  };

  const deleteUser = (index) => {
    const updatedUsers = [...users];
    updatedUsers.splice(index, 1);
    setUsers(updatedUsers);
  };

  const editUser = (index) => {
    setSelectedUser(users[index]);
    setEditIndex(index);
    setIsEditMode(true);
  };

  const updateUser = (updatedUser) => {
    const updatedUsers = [...users];
    updatedUsers[editIndex] = updatedUser;
    setUsers(updatedUsers);
    setIsEditMode(false);
    setSelectedUser(null);
    setEditIndex(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Form
        onSubmit={submitHandler}
        selectedUser={selectedUser}
        isEditMode={isEditMode}
        onUpdate={updateUser}
      />
      <UserList users={users} deleteUser={deleteUser} editUser={editUser} />
    </div>
  );
};

export default App;
