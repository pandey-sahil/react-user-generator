// utils/localstorage.js

// Key used in localStorage
const USER_STORAGE_KEY = "users";

// Fetch users from localStorage
export const getUsersFromLocalStorage = () => {
  const users = localStorage.getItem(USER_STORAGE_KEY);
  return users ? JSON.parse(users) : []; // Return empty array if no users found
};

// Add user to localStorage
export const addUserToLocalStorage = (newUser) => {
  const users = getUsersFromLocalStorage();
  users.push(newUser);
  localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(users));
};

// Update user in localStorage
export const updateUserInLocalStorage = (updatedUser, index) => {
  const users = getUsersFromLocalStorage();
  users[index] = updatedUser; // Update the user at the specified index
  localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(users));
};

// Delete user from localStorage
export const deleteUserFromLocalStorage = (index) => {
  const users = getUsersFromLocalStorage();
  users.splice(index, 1);
  localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(users));
};
