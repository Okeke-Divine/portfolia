"use client";
import { useState } from "react";
import axios from "axios";

const ListSkills = async () => {
  const [skills, setSkills] = useState([]);
  return (
    <>
      <div className="grid grid-cols-1 gap-2">
        {skills.map((skill, index) => (
          <div className="flex flex-wrap gap" key={index}>
            <div className="grow font-semibold">{skill.skill_name}</div>
            <div>
              <button className="button" type="submit">
                [x]
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ListSkills;
