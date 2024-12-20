import React, { useState } from "react";
import ProfileCard from "../components/profile/ProfileCard";
import ProfileDetails from "../components/profile/ProfileDetails";
import EditProfileForm from "../components/profile/EditProfileForm";

const ProfilePage = () => {
  const [user, setUser] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "123-456-7890",
    address: "123 Main St, Cityville",
    role: "Software Engineer",
    avatar: "",
  });

  const handleSave = (updatedUser) => {
    setUser(updatedUser);
  };

  return (
    <div className="p-6 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <ProfileCard user={user} />
        <ProfileDetails user={user} />
      </div>
      <EditProfileForm user={user} onSave={handleSave} />
    </div>
  );
};

export default ProfilePage;
