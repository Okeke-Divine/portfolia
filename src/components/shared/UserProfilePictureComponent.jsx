"use client";
import { getCurrentUserProfilePicture } from "@/utils/main";

const UserProfilePictureComponent = () => {
  return (
    <>
      <img src={getCurrentUserProfilePicture()} alt="User Profile Picture" />
    </>
  );
};

export default UserProfilePictureComponent;
