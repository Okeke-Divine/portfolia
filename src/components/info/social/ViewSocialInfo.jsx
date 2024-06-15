"use client";
import prisma from "@/app/db";
import SkillSkeleton from "@/components/skeleton/skills/SkillSkeleton";
import { getIconClass } from "@/utils/main";
import axios from "axios";
import { useState, useEffect } from "react";

const ViewSocialInfo = () => {
  const [socials, setSocials] = useState([]);
  const [loading, setLoading] = useState(false);

  function deleteSocialInfo(social_id) {
    Swal.fire({
      title: "Warning",
      icon: "warning",
      text: "Are you certain you want to delete this link? Please note: This action is irreversible. The link will also be removed from any portfolios or resumes where it has been listed.",
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
            "/api/info/socials/delete",
            { social_id },
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
                "social_" + social_id
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

  const channel = new BroadcastChannel("user-socials-channel");

  useEffect(() => {
    channel.onmessage = (event) => {
      setLoading(true);
      const newSocial = event.data.data;
      setSocials((prevSocials) => [...prevSocials, newSocial]);
      setLoading(false);
    };

    return () => {
      channel.close();
    };
  }, [channel]);

  useEffect(function () {
    axios
      .get("/api/info/socials")
      .then((response) => setSocials(response.data.data));
  }, []);

  return (
    <>
      {loading ? <SkillSkeleton /> : ""}
      <div>
        {socials.map((social, index) => (
          <div
            id={"social_" + social.id}
            key={index}
            className={`flex gap-2 items-center mb-2 p-2 ${
              index % 2 === 0 ? "bg-white" : "bg-gray-200"
            }`}
          >
            <div className="w-fit">
              <i className={`${getIconClass(social.name)} flaticon-offset`}></i>
            </div>
            <div className="grow">{social.value}</div>
            <div className="w-fit flex gap-2">
              <button className="btn btn-sm">
                <i className="fi fi-tr-pen-circle flaticon-offset"></i>
              </button>
              <button
                className="btn btn-sm"
                onClick={() => deleteSocialInfo(social.id)}
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

export default ViewSocialInfo;
