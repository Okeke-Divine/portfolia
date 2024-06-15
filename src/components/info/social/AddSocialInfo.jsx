"use client";
import { _ucfirst } from "@/utils/main";
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

  function AddSocialInfo(e) {
    e.preventDefault();

    const socialType = socialTypeRef.current.value;
    const socialValue = socialValueRef.current.value;
  }

  return (
    <>
      <form className="form-control" onSubmit={AddSocialInfo}>
        <div className="">
          <div className="block md:flex join mb-2 gap-2">
            <div className="w-full md:w-fit join-item">
              <select
                className="select input-bordered"
                onSelect={(e) => alert(e.target.value)}
              >
                {socials.map((social, index) => (
                  <>
                    <option value={social.value}>
                      {_ucfirst(social.name)}
                    </option>
                  </>
                ))}
              </select>
            </div>
            <div className="w-full join-item">
              <input
                className="input input-bordered w-full"
                type={selected == "email" ? "email" : selected == "phone_number" ? "text" : "url"}
                placeholder={selected == "email" ? "Your Email" : selected == "phone_number" ? "Phone Number" : _ucfirst(selected)+ " Url"}
              />
            </div>
          </div>
          <button className="w-full app-bg-primary duration-300 hover:app-bg-primary-dark btn btn-md text-white">
            Add
          </button>
        </div>
      </form>
    </>
  );
};

export default AddSocialInfo;
