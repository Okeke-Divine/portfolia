"use client";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import Swal from "sweetalert2";
import { app_color_primary } from "@/constants/shared/color";

const ListSkills = async () => {
  const [skills, setSkills] = useState([]);

  function deleteSkill(skill_name) {
    Swal.fire({
      title: "Warning",
      icon: "warning",
      text: "Are you certain you want to delete this skill? Please note: This action is irreversible. The skill will also be removed from any portfolios or resumes where it has been listed.",
      showCancelButton: true,
      confirmButtonText: "Yes, delete!",
      confirmButtonColor: app_color_primary,
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Processing",
          icon: "info",
          text: "Please wait...",
          showConfirmButton: false,
          allowOutsideClick: false,
        });
        setTimeout(function () {
          Swal.fire({
            title: "Success",
            icon: "success",
            text: "Delete success full",
            confirmButtonColor: app_color_primary,
          });
          const parent_container =document.getElementById("skill"+skill_name);
          console.log(parent_container);
          parent_container.classList.add("hidden");
          console.log(document.getElementById("skill"+skill_name));
        }, 20);
      }
    });
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
            id={"skill" + skill.skill_name}
            className={`flex flex-wrap items-center gap p-2 ${
              index % 2 === 0 ? "bg-white" : "bg-gray-200"
            }`}
            key={index}
          >
            <div className="grow font-semibold">{skill.skill_name}</div>
            <div>
              <button
                className="btn btn-sm"
                onClick={() => deleteSkill(skill.skill_name)}
              >
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
