import { _ucfirst } from "@/utils/main";
import React from "react";

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
  return (
    <>
      <div className="">
        <div className="block md:flex join mb-2">
          <div className="w-full md:w-fit join-item">
            <select className="select input-bordered">
              {socials.map((social, index) => (
                <>
                  <option value={social.value}>{_ucfirst(social.name)}</option>
                </>
              ))}
            </select>
          </div>
          <div className="w-full join-item">
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
