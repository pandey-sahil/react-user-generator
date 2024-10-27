import React from "react";
import UserCard from "./UserCard";

const UserList = ({ users, deleteUser }) => {
  return (
    <div className="p-7 bg-slate-100 flex flex-wrap justify-center">
      {users.length > 0 ? (
        users.map((user, idx) => (
          <UserCard
            key={idx}
            naam={user.naam}
            email={user.email}
            image={user.image}
            onDelete={() => deleteUser(idx)}
          />
        ))
      ) : (
        <h3 className="font-semibold text-slate-400 text-xl">
          No User Available
        </h3>
      )}
    </div>
  );
};

export default UserList;
