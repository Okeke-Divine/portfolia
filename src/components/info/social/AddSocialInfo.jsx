import { _ucfirst } from "@/utils/main";
import React from "react";

const socials = [
  { name: "Email" },
  { name: "Instagram" },
  { name: "Twitter" },
  { name: "Facebook" },
  { name: "Dribble" },
  { name: "Linkedin" },
  { name: "github" },
  { name: "email" },
  { name: "Phone Number" },
  { name: "Other" },
];

const AddSocialInfo = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <div className="flex">
          <div className="w-fit">
            <select className="select">
              {socials.map((social, index) => (
                <>
                  <option>{_ucfirst(social.name)}</option>
                </>
              ))}
            </select>
          </div>
          <div className="w-full">
            <input type="text" className="input input-bordered w-full" placeholder="Enter..." />
          </div>
        </div>
        <button className="w-full app-bg-primary duration-300 hover:app-bg-primary-dark btn btn-md text-white">
          Add
        </button>
      </div>
    </>
  );
};

export default AddSocialInfo;
