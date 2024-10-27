import React from "react";

const UserCard = ({ naam, email, image, onDelete }) => {
  return (
    <div className="m-6 text-center px-7 py-6 bg-white shadow-lg rounded-lg w-[21%] flex flex-col items-center transition hover:shadow-xl">
      <img
        className="mb-3 h-24 w-24 rounded-full object-cover object-center border-4 border-blue-100 shadow-md"
        src={image}
        alt="User"
      />
      <h2 className="text-xl font-semibold text-gray-800">{naam}</h2>
      <h5 className="text-sm font-semibold text-gray-500 mb-2">{email}</h5>
      <p className="text-sm leading-4 font-normal text-gray-700">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </p>
      <button
        onClick={onDelete}
        className="bg-red-500 hover:bg-red-600 text-white font-bold px-4 text-sm rounded-md mt-4 py-2 transition"
      >
        Remove
      </button>
    </div>
  );
};

export default UserCard;
