import React from "react";

const ProfileCard = ({ user }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <div className="flex flex-col items-center">
        <img
          src={user.avatar || "https://via.placeholder.com/100"}
          alt="Profile Avatar"
          className="w-24 h-24 rounded-full object-cover mb-4"
        />
        <h2 className="text-xl font-semibold">{user.name}</h2>
        <p className="text-gray-500">{user.role}</p>
      </div>
    </div>
  );
};

export default ProfileCard;
