import React from "react";

const ProfileDetails = ({ user }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h3 className="text-lg font-semibold mb-4">Profile Details</h3>
      <ul className="space-y-2">
        <li><strong>Email:</strong> {user.email}</li>
        <li><strong>Phone:</strong> {user.phone}</li>
        <li><strong>Address:</strong> {user.address}</li>
      </ul>
    </div>
  );
};

export default ProfileDetails;
