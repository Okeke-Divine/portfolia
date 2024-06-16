"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import SkillSkeleton from "@/components/skeleton/skills/SkillSkeleton";
import { app_color_primary } from "@/constants/shared/color";
import Swal from "sweetalert2";

const ViewProjects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(function () {
    setLoading(true);
    axios.get("/api/info/project").then((response) => {
      setProjects(response.data.data);
      setLoading(false);
    });
  }, []);

  function deleteProject(project_id) {
    Swal.fire({
      title: "Warning",
      icon: "warning",
      text: "Are you certain you want to delete this project? Please note: This action is irreversible. The project will also be removed from any portfolios or resumes where it has been listed.",
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
            "/api/info/project/delete",
            { project_id },
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
                "project_" + project_id
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
      <div className="overflow-x-auto max-w-[100%]">
        <table className="table table-zebra w-full">
          <thead className="w-full">
            <tr>
              <th>S/N</th>
              <th>Title</th>
              <th>Tags</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody className="w-full">
            {projects.map((project, index) => (
              <tr key={index} id={"project_" + project.id}>
                <td>{index + 1}</td>
                <td>
                  <div className="flex gap-2 items-center">
                    {project.imgUrl != "" ? (
                      <>
                        <div class="h-[50px] w-[50px] overflow-hidden rounded-md">
                          <img
                            src={project.imageUrl}
                            alt={project.title}
                            class="object-cover w-full h-full"
                          />
                        </div>
                      </>
                    ) : (
                      ""
                    )}
                    <div className="font-bold">{project.title}</div>
                  </div>
                </td>
                <td>{project.tags != "" ? project.tags : "-"}</td>
                <td>{project.description != "" ? project.description : "-"}</td>
                <td className="">
                  <div className="flex gap-2 items-center">
                    <button
                      className="btn btn-sm"
                      onClick={() => alert("Coming soon")}
                    >
                      <i className="fi fi-tr-pen-circle flaticon-offset"></i>
                    </button>
                    <button
                      className="btn btn-sm"
                      onClick={() => deleteProject(project.id)}
                    >
                      <i className="fi fi-rr-trash flaticon-offset"></i>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {loading ? (
          <>
            <SkillSkeleton />
          </>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default ViewProjects;
