"use client";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import Swal from "sweetalert2";
import { app_color_primary } from "@/constants/shared/color";
import SkillSkeleton from "@/components/skeleton/skills/SkillSkeleton";

const ListSkills = async () => {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(false);
  const channel = new BroadcastChannel("user-skills-channel");

  useEffect(() => {
    channel.onmessage = (event) => {
      setLoading(true);
      const newSkill = event.data.data;
      setSkills((prevSkills) => [...prevSkills, newSkill]);
      setLoading(false);
    };

    return () => {
      channel.close();
    };
  }, [channel]);

  function deleteSkill(skill_id) {
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
        axios
          .post(
            "/api/skill/delete",
            { skill_id },
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          )
          .then((response) => {
            if (response.status == 200) {
              Swal.fire({
                title: "Success",
                icon: "success",
                text: "Delete success full",
                confirmButtonColor: app_color_primary,
              });
              const parent_container = document.getElementById(
                "skill_" + skill_id
              );
              parent_container.classList.add("hidden");
            } else {
              Swal.fire({
                title: "Error",
                icon: "error",
                text: "An error occured. Please try again 1",
              });
            }
          })
          .catch((error) => {
            if (error) {
              Swal.fire({
                title: "Error",
                icon: "warning",
                text: "An error occured. Please try again",
              });
            }
          });
      }
    });
  }

  useEffect(function () {
    setLoading(true);
    axios.get("/api/skill/list").then((response) => {
      setSkills(response.data.data);
    });
    setLoading(false);
  }, []);

  return (
    <>
      <div className="grid grid-cols-1 gap-2">
        {loading ? (
          <>
            <SkillSkeleton />
          </>
        ) : (
          ""
        )}
        {skills.map((skill, index) => (
          <div
            id={"skill_" + skill.id}
            className={`flex flex-wrap items-center gap p-2 ${
              index % 2 === 0 ? "bg-white" : "bg-gray-200"
            }`}
            key={index}
          >
            <div className="grow font-semibold">{skill.skill_name}</div>
            <div>
              <button
                className="btn btn-sm"
                onClick={() => deleteSkill(skill.id)}
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
