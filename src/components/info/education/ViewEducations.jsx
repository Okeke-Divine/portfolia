"use client"
import { useState, useEffect } from "react";
import axios from "axios";
import { app_color_primary } from "@/constants/shared/color";
import Swal from "sweetalert2";
import SkillSkeleton from "@/components/skeleton/skills/SkillSkeleton";

const ViewEducations = () => {

  const [educations, setEducations] = useState([]);
  const [loading, setLoading] = useState(false);

  const channel = new BroadcastChannel("user-educations-channel");

  useEffect(() => {
    channel.onmessage = (event) => {
      setLoading(true);
      const newEducation = event.data.data;
      setEducations((prevEducations) => [...prevEducations, newEducation]);
      setLoading(false);
    };

    return () => {
      channel.close();
    };
  }, [channel]);


  function deleteEducation(education_id) {
    Swal.fire({
      title: "Warning",
      icon: "warning",
      text: "Are you certain you want to delete this education? Please note: This action is irreversible. The education will also be removed from any portfolios or resumes where it has been listed.",
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
            "/api/info/education/delete",
            { education_id },
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
                "education_" + education_id
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
    axios.get("/api/info/education").then((response) => {
      setEducations(response.data.data);
      setLoading(false);
    });
  }, []);

  return (
    <div>ViewEducations</div>
  )
}

export default ViewEducations