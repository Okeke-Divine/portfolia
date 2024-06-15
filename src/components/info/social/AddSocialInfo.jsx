"use client";
import { SweetAlertError } from "@/utils/customSweetAlertFunction";
import { _ucfirst, validatePhoneNumber } from "@/utils/main";
import { useRef, useState } from "react";

const socials = [
  { type: "email", name: "email" },
  { type: "instagram", name: "instagram" },
  { type: "twitter", name: "twitter" },
  { type: "facebook", name: "facebook" },
  { type: "dribble", name: "dribble" },
  { type: "linkedin", name: "linkedin" },
  { type: "github", name: "github" },
  { type: "email", name: "email" },
  { type: "phone_number", name: "phone number" },
  { type: "other", name: "other" },
];

const AddSocialInfo = () => {
  const socialTypeRef = useRef(null);
  const socialValueRef = useRef(null);

  const [selected, setSelected] = useState("email");
  const [loading, setLoading] = useState(false);

  function AddSocialInfo(e) {
    e.preventDefault();

    const socialType = socialTypeRef.current.value;
    const socialValue = socialValueRef.current.value;

    if (!socialType || !socialValue) {
      SweetAlertError("All fields are required");
      return;
    }

    if (
      socialType == "phone_number" &&
      validatePhoneNumber(socialValue) == false
    ) {
      SweetAlertError("Invalid phone number. E.g (080.....) or (+23480...)");
      return;
    }

    console.log(socialType, socialValue);
  }

  return (
    <>
      <form className="form-control" onSubmit={AddSocialInfo}>
        <div className="">
          <div className="block md:flex join mb-2 gap-2">
            <div className="w-full md:w-fit join-item">
              <select
                className="select input-bordered"
                onChange={(e) => setSelected(e.target.value)}
                ref={socialTypeRef}
              >
                {socials.map((social, index) => (
                  <option key={index} value={social.type}>
                    {_ucfirst(social.name)}
                  </option>
                ))}
              </select>
            </div>
            <div className="w-full join-item">
              <input
                required
                ref={socialValueRef}
                className="input input-bordered w-full"
                type={
                  selected == "email"
                    ? "email"
                    : selected == "phone_number"
                    ? "text"
                    : "url"
                }
                placeholder={
                  selected == "email"
                    ? "Your Email"
                    : selected == "phone_number"
                    ? "Your Phone Number"
                    : "Your " + selected + " Url"
                }
              />
            </div>
          </div>
          <button
            disabled={loading}
            className="w-full app-bg-primary duration-300 hover:app-bg-primary-dark btn btn-md text-white"
            type="submit"
          >
            {loading ? (
              <>
                <span className="loading loading-dots loading-sm"></span>
              </>
            ) : (
              "Add"
            )}
          </button>
        </div>
      </form>
      <p className="mt-1">
        <b>NOTE:</b> You can not have more than one entry for each social info
        type.
      </p>
    </>
  );
};

export default AddSocialInfo;
