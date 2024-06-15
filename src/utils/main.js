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