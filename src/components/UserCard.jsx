import React from "react";

const UserCard = ({ naam, email, image, onDelete, onEdit }) => {
  return (
    <div className="m-6 text-center px-7 py-6 bg-[#2e2e2e] shadow-lg rounded-lg w-[21%] flex flex-col items-center transition hover:shadow-xl hover:bg-[#353535]">
      <img
        className="mb-3 h-24 w-24 rounded-full object-cover object-center border-4 border-blue-600 shadow-md"
        src={image}
        alt="User"
      />
      <h2 className="text-xl font-semibold text-white">{naam}</h2>
      <h5 className="text-sm font-semibold text-gray-400 mb-2">{email}</h5>
      <p className="text-sm leading-4 font-normal text-gray-500">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </p>
      <div className="flex space-x-2 mt-4">
        <button
          onClick={onEdit}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-4 text-sm rounded-md py-2 transition"
        >
          Edit
        </button>
        <button
          onClick={onDelete}
          className="bg-red-600 hover:bg-red-700 text-white font-bold px-4 text-sm rounded-md py-2 transition"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default UserCard;
