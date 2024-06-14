"use client";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

const ListSkills = async () => {
  const [skills, setSkills] = useState([]);

  function deleteSkill(id) {
    alert(id);
  }

  useEffect(function () {
    axios.get("/api/skill/list").then((response) => {
      setSkills(response.data.data);
    });
  }, []);

  return (
    <>
      <div className="grid grid-cols-1 gap-2">
        {skills.map((skill, index) => (
          <div
            className={`flex flex-wrap gap ${
              index % 2 === 0 ? "bg-white" : "bg-gray-200"
            }`}
            key={index}
          >
            <div className="grow font-semibold">{skill.skill_name}</div>
            <div>
              <button className="button" onclick={() => deleteSkill(skill.id)}>
                <i className="fi fi-rr-trash flaticon-offset"></i>
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ListSkills;
