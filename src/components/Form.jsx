import React, { useState, useEffect } from "react";

const Form = ({ onSubmit, selectedUser, isEditMode, onUpdate }) => {
  const [naam, setNaam] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState("");

  // If user is selected for editing, populate fields with the selected user's data
  useEffect(() => {
    if (selectedUser) {
      setNaam(selectedUser.naam);
      setEmail(selectedUser.email);
      setImage(selectedUser.image);
    }
  }, [selectedUser]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (isEditMode) {
      onUpdate({ naam, email, image });
    } else {
      onSubmit({ naam, email, image });
    }
    setNaam("");
    setEmail("");
    setImage("");
  };

  return (
    <form
      className="px-9 py-6 mb-8 bg-white shadow-md rounded-lg max-w-full flex items-center justify-center"
      onSubmit={submitHandler}
    >
      <input
        required
        value={naam}
        onChange={(e) => setNaam(e.target.value)}
        className="bg-slate-50 border border-gray-300 px-4 py-2 rounded-md text-base mr-3 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-300 transition w-1/5"
        type="text"
        placeholder="Enter name"
      />
      <input
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="bg-slate-50 border border-gray-300 px-4 py-2 rounded-md text-base mr-3 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-300 transition w-1/5"
        type="email"
        placeholder="Enter Email"
      />
      <input
        required
        value={image}
        onChange={(e) => setImage(e.target.value)}
        className="bg-slate-50 border border-gray-300 px-4 py-2 rounded-md text-base mr-3 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-300 transition w-1/5"
        type="text"
        placeholder="Enter image URL"
      />
      <button className="bg-blue-500 text-white font-semibold px-6 py-2 rounded-md hover:bg-blue-600 transition">
        {isEditMode ? "Update" : "Submit"}
      </button>
    </form>
  );
};

export default Form;
