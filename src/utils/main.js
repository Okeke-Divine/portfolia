import { defaultImgUrl } from "@/constants/shared/constant";
import axios from "axios"
import { _console_log } from "./console";
import prisma from "@/app/db";

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
  axios.post(process.env.NEXT_PUBLIC_BASE_URL + "/api/outbound/tracker/analysis", { username, actionType }, { headers: { "Content-Type": "application/json" } })
  return;
}

export function generateYearsArray(startYear = 1960) {
  const currentYear = new Date().getFullYear();
  const yearsArray = [];

  for (let year = currentYear; year >= startYear; year--) {
    yearsArray.push(year);
  }

  return yearsArray;
}

export function generateMonthArray() {
  return [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
}

export const verifyResetToken = async (token) => {
  try {
    const tokenRecord = await prisma.passwordResetToken.findUnique({
      where: {
        token: token,
      },
    });

    if (!tokenRecord) {
      return { valid: false, message: 'Invalid or expired reset link.' };
    }

    // Check if token is expired (5 minutes from creation time)
    const expirationTime = new Date(tokenRecord.createdAt);
    expirationTime.setMinutes(expirationTime.getMinutes() + 5);
    const now = new Date();

    if (now > expirationTime) {
      await deleteToken(token)
      return { valid: false, message: 'Reset link has expired.' };
    }

    // Token is valid
    return { valid: true, userId: tokenRecord.userId }; // Optionally return userId or other relevant data
  } catch (error) {
    _console_log('Error verifying reset token:', error);
    return { valid: false, message: 'Reset link has expired.' };
    // throw new Error('Error verifying reset token');
  }
};

export async function deleteToken(token) {
  return await prisma.passwordResetToken.delete({ where: { token } })
}

export async function retrieveUserConfig(name, { id_type, id_value }) {
  try {
    let userConfigValue = null;

    // Validate id_type
    const validIdTypes = ["id", "username", "email"]; // Add more if needed
    if (!validIdTypes.includes(id_type)) {
      throw new Error("Invalid id_type provided");
    }

    // Dynamically construct the query based on id_type
    const whereCondition = { [id_type]: id_value };
    const user = await prisma.user.findUnique({
      where: whereCondition,
      include: { userConfig: true },
    });

    // If user found, get the userConfig value by name
    if (user && user.userConfig) {
      const configEntry = user.userConfig.find((config) => config.name === name);
      if (configEntry) {
        userConfigValue = configEntry.value;
      }
    }

    return userConfigValue;
  } catch (error) {
    console.error("Error retrieving user config:", error);
    throw error;
  }
}


export function configToDefaultBoolean(value, _default = false) {
  return (value == null) ? _default : (value == "true") ? true : false
}