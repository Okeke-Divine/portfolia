"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { app_color_primary } from "@/constants/shared/color";
import Swal from "sweetalert2";
import SkillSkeleton from "@/components/skeleton/skills/SkillSkeleton";

const ViewExperience = () => {

  const [experiences, setExperiences] = useState([]);
  const [loading, setLoading] = useState(false);

  const channel = new BroadcastChannel("user-newExperience-channel");

  useEffect(() => {
    channel.onmessage = (event) => {
      setLoading(true);
      const newExperience = event.data.data;
      setExperiences((prevExperiences) => [...prevExperiences, newExperience]);
      setLoading(false);
    };

    return () => {
      channel.close();
    };
  }, [channel]);


  useEffect(function () {
    setLoading(true);
    axios.get("/api/info/experience").then((response) => {
      setExperiences(response.data.data);
      setLoading(false);
    });
  }, []);

  function deleteExperience(experience_id) {
    Swal.fire({
      title: "Warning",
      icon: "warning",
      text: "Are you certain you want to delete this experience? Please note: This action is irreversible. This experience will also be removed from any portfolios or resumes where it has been listed.",
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
            "/api/info/experience/delete",
            { experience_id },
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
                text: "Delete successfull",
                confirmButtonColor: app_color_primary,
              });
              const parent_container = document.getElementById(
                "experience_" + experience_id
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

  return (
    <>
      {loading ? (
        <>
          <SkillSkeleton />
        </>
      ) : (
        ""
      )}
      <div>
        {experiences.map((experience, index) => (
          <div
            id={"experience_" + experience.id}
            key={index}
            className={`mb-2 p-2 ${index % 2 === 0 ? "bg-white" : "bg-gray-200"
              }`}
          >
            <div className="flex gap-2 items-center">
              <div className="w-full">
                <div>
                  <b>{experience.position}</b> - {experience.company}
                </div>
              </div>
              <div className="w-fit flex gap-2">
                <button
                  className="btn btn-sm"
                  onClick={() => deleteExperience(experience.id)}
                >
                  <i className="fi fi-rr-trash flaticon-offset"></i>
                </button>
              </div>
            </div>
            <div className="text-gray-600">
              {experience.description}
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default ViewExperience