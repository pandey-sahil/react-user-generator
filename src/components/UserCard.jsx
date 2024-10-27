import React from "react";

const UserCard = ({ naam, email, image, onDelete, onEdit }) => {
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
      <div className="flex space-x-2 mt-4">
        <button
          onClick={onEdit}
          className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold px-4 text-sm rounded-md py-2 transition"
        >
          Edit
        </button>
        <button
          onClick={onDelete}
          className="bg-red-500 hover:bg-red-600 text-white font-bold px-4 text-sm rounded-md py-2 transition"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default UserCard;
