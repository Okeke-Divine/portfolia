"use client";
import { defaultImgUrl } from "@/constants/shared/constant";
import axios from "axios";
import { useState, useEffect } from "react";

const UserProfilePictureComponent = () => {
  const [imgUrl, setImgUrl] = useState(defaultImgUrl); //shoiuld be a loading image

  if (
    typeof localStorage !== "undefined" &&
    localStorage.getItem("user_imgUrl") === null
  ) {
    axios
      .get("/api/profile/picture")
      .then((result) => {
        if (result.data.data.profilePicture_url !== "") {
          localStorage.setItem(
            "user_imgUrl",
            result.data.data.profilePicture_url
          );
        //   setImgUrl(result.data.data.profilePicture_url);
        } else {
        //   setImgUrl(defaultImgUrl);
          localStorage.setItem("user_imgUrl", defaultImgUrl);
        }
      })
      .catch((e) => _console_log("Error: " + e));
  }

  useEffect(function () {
    // Retrieve imgUrl with fallback if localStorage is not available
    if (typeof localStorage !== "undefined") {
      setImgUrl(
        typeof localStorage !== "undefined"
          ? localStorage.getItem("user_imgUrl")
          : defaultImgUrl
      );
    }
  }, []);

  return (
    <>
      <img src={imgUrl} alt="User Profile Picture" />
    </>
  );
};

export default UserProfilePictureComponent;
