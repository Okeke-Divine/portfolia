"use client";
import { useState, useEffect } from "react";
import axios from "axios";

const ViewProjects = () => {
  const [project, setProjects] = useState([]);

  useEffect(function () {
    axios.get("/api/info/project").then((response) => {
      setProjects(response.data.data);
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
        </table>
      </div>
    </>
  );
};

export default ViewProjects;
