"use client";
import { defaultImgUrl } from "@/constants/shared/constant";
import axios from "axios";

const UserProfilePictureComponent = () => {
  if (
    typeof localStorage !== "undefined" &&
    localStorage.getItem("user_imgUrl") === null
  ) {
    axios
      .get("/api/profile/picture")
      .then((result) => {
        if (result.data.data !== null) {
          localStorage.setItem(
            "user_imgUrl",
            result.data.data.profilePicture_url
          );
        }
      })
      .catch((e) => _console_log("Error: " + e));
  }

  // Retrieve imgUrl with fallback if localStorage is not available
  const imgUrl =
    typeof localStorage !== "undefined"
      ? localStorage.getItem("user_imgUrl")
      : defaultImgUrl;
  console.log(imgUrl);

  return (
    <>
      <img src={imgUrl} alt="User Profile Picture" />
    </>
  );
};

export default UserProfilePictureComponent;
