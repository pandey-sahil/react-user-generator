import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import UserList from "./components/UserList";
import {
  getUsersFromLocalStorage,
  addUserToLocalStorage,
  updateUserInLocalStorage,
  deleteUserFromLocalStorage
} from "./utils/localStorage"; // Import functions correctly

const App = () => {
  const [users, setUsers] = useState([]);

  // Load users from localStorage when the app starts
  useEffect(() => {
    const storedUsers = getUsersFromLocalStorage();
    setUsers(storedUsers);
  }, []);

  // Add a new user
  const addUser = (newUser) => {
    const updatedUsers = [...users, newUser];
    setUsers(updatedUsers);
    addUserToLocalStorage(newUser); // Save new user to localStorage
  };

  // Delete a user
  const deleteUser = (index) => {
    const updatedUsers = users.filter((_, i) => i !== index);
    setUsers(updatedUsers);
    deleteUserFromLocalStorage(index); // Remove user from localStorage
  };

  // Edit a user
  const editUser = (index, updatedUser) => {
    const updatedUsers = [...users];
    updatedUsers[index] = updatedUser;
    setUsers(updatedUsers);
    updateUserInLocalStorage(updatedUser, index); // Update user in localStorage
  };

  return (
    <div className="min-h-screen bg-[#1c1c1c] text-white p-5">
      <Form onSubmit={addUser} />
      <UserList users={users} deleteUser={deleteUser} editUser={editUser} />
    </div>
  );
};

export default App;
