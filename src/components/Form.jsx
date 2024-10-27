import React, { useState } from "react";

const Form = ({ onSubmit }) => {
  const [naam, setNaam] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    onSubmit({ naam, email, image });
    setNaam("");
    setEmail("");
    setImage("");
  };

  return (
    <form
      className="px-9 py-6 text-center mb-8 bg-white shadow-md rounded-lg max-w-lg mx-auto"
      onSubmit={submitHandler}
    >
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Add a New User</h2>
      <input
        required
        value={naam}
        onChange={(e) => setNaam(e.target.value)}
        className="bg-slate-50 border border-gray-300 px-4 py-2 rounded-md text-base mb-3 w-full focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-300 transition"
        type="text"
        placeholder="Enter name"
      />
      <input
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="bg-slate-50 border border-gray-300 px-4 py-2 rounded-md text-base mb-3 w-full focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-300 transition"
        type="email"
        placeholder="Enter Email"
      />
      <input
        required
        value={image}
        onChange={(e) => setImage(e.target.value)}
        className="bg-slate-50 border border-gray-300 px-4 py-2 rounded-md text-base mb-3 w-full focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-300 transition"
        type="text"
        placeholder="Enter image URL"
      />
      <button className="bg-blue-500 text-white font-semibold px-6 py-2 rounded-md hover:bg-blue-600 transition mb-3 w-full">
        Submit
      </button>
    </form>
  );
};

export default Form;
