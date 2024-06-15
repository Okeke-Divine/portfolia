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

  return (
    <>
      <div className="overflow-x-auto w-full">
        <table className="table table-zebra">
          <thead>
            <tr>
              <th></th>
              <th>Image</th>
              <th>Title</th>
              <th>Tags</th>
              <th>Description</th>
              <th>Url</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
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
