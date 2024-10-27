import React, { useState, useEffect } from "react";

const Form = ({ onSubmit, selectedUser, isEditMode, onUpdate }) => {
  const [naam, setNaam] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    if (isEditMode && selectedUser) {
      setNaam(selectedUser.naam);
      setEmail(selectedUser.email);
      setImage(selectedUser.image);
    } else {
      setNaam("");
      setEmail("");
      setImage("");
    }
  }, [isEditMode, selectedUser]);

  const submitHandler = (e) => {
    e.preventDefault();
    const newUser = { naam, email, image };
    if (isEditMode) {
      onUpdate(newUser);
    } else {
      onSubmit(newUser);
    }
    setNaam("");
    setEmail("");
    setImage("");
  };

  return (
    <form
      className="px-9 py-6 text-center mb-8 bg-[#252525] rounded-lg  mx-auto"
      onSubmit={submitHandler}
    >
      <h2 className="text-2xl font-bold mb-4 text-white">
        {isEditMode ? "Edit User" : "Add a New User"}
      </h2>
      <div className="flex space-x-4 justify-center">
        <input
          required
          value={naam}
          onChange={(e) => setNaam(e.target.value)}
          className="bg-[#2e2e2e] text-white border border-gray-600 px-4 py-2 rounded-md text-base mb-3 w-1/3 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-300 transition"
          type="text"
          placeholder="Enter name"
        />
        <input
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-[#2e2e2e] text-white border border-gray-600 px-4 py-2 rounded-md text-base mb-3 w-1/3 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-300 transition"
          type="email"
          placeholder="Enter Email"
        />
        <input
          required
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="bg-[#2e2e2e] text-white border border-gray-600 px-4 py-2 rounded-md text-base mb-3 w-1/3 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-300 transition"
          type="text"
          placeholder="Enter image URL"
        />
      </div>
      <button className="bg-blue-600 text-white font-semibold px-6 py-2 rounded-md hover:bg-blue-700 transition mb-3 w-full">
        {isEditMode ? "Update" : "Submit"}
      </button>
    </form>
  );
};

export default Form;
