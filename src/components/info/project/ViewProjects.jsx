"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import SkillSkeleton from "@/components/skeleton/skills/SkillSkeleton";

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
    alert(project_id);
    const parent_container = document.getElementById("project_" + project_id);
    parent_container.classList.add("hidden");
  }

  return (
    <>
      <div className="overflow-x-auto w-full">
        <table className="table table-zebra w-full">
          <thead className="w-full">
            <tr>
              <th></th>
              <th>Title</th>
              <th>Tags</th>
              <th>Description</th>
              <th>Url</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody className="w-full">
            {projects.map((project, index) => (
              <tr key={index} id={"project_" + project.id}>
                <td>{index + 1}</td>
                <td>
                  <div className="flex gap-2">
                    {project.imgUrl != "" ? (
                      <>
                        <div class="w-full h-[50px] overflow-hidden">
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
                    <div>{project.title}</div>
                  </div>
                </td>
                <td>
                  <button
                    className="btn btn-sm"
                    onClick={() => deleteProject(project.id)}
                  >
                    <i className="fi fi-rr-trash flaticon-offset"></i>
                  </button>
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
