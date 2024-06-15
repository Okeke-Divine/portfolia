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
        <div className="join w-full">
          <div className="join-item">
            <select name="" id="">
              {socials.map((social, index) => (
                <>
                  <option>{_ucfirst(social.name)}</option>
                </>
              ))}
            </select>
          </div>
          <div>
            <input type="text" className="input input-bordered" />
          </div>
        </div>
      </div>
    </>
  );
};

export default AddSocialInfo;
