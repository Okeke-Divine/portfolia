import { defaultImgUrl } from "@/constants/shared/constant";
import axios from "axios"
import { _console_log } from "./console";

export function getIconClass(name) {
  switch (name) {
    case "facebook":
      return "fi fi-brands-facebook";
    case "instagram":
      return "fi fi-brands-instagram";
    case "twitter":
      return "fi fi-brands-twitter-alt";
    case "linkedin":
      return "fi fi-brands-linkedin";
    case "github":
      return "fi fi-brands-github";
    case "email":
      return "fi fi-rr-envelope";
    case "phone_number":
      return "fi fi-rr-phone-call";
    case "whatsapp":
      return "fi fi-brands-whatsapp";
    case "dribble":
      return "fi fi-tr-images";
    default:
      return "fi fi-rr-link";
  }
}

export function _ucfirst(str) {
  if (!str) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function validatePhoneNumber(phoneNumber) {
  const phoneRegex = /^\+?\d{1,14}$/;
  return phoneRegex.test(phoneNumber);
}

export function getCurrentUserProfilePicture() {
  // Check if localStorage is available
  if (typeof localStorage !== 'undefined') {
    // Get the user profile picture URL from localStorage
    let userImgUrl = localStorage.getItem('user_imgUrl');

    // If the URL does not exist, set it to an empty string
    if (userImgUrl === null) {
      axios.get("/api/profile/picture").then((response) => {
        console.log(response.data.data);
      })
      userImgUrl = defaultImgUrl;
      localStorage.setItem('user_imgUrl', userImgUrl);
    }

    return userImgUrl;
  } else {
    _console_log("Server component image request")
    return defaultImgUrl;
  }
}

export function analysisTracker(username, actionType) {
  if (!username || !actionType) {
    return;
  }
  axios.post("/api/outbound/tracker/analysis", { username, actionType }, { headers: { "Content-Type": "application/json" } })
  return;
}

export function generateYearsArray(startYear = 1960) {
  const currentYear = new Date().getFullYear();
  const yearsArray = [];
  
  for (let year = startYear; year <= currentYear; year++) {
    yearsArray.push(year);
  }

  return yearsArray;
}