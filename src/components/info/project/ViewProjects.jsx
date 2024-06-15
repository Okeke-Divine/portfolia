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
        <table></table>
      </div>
    </>
  );
};

export default ViewProjects;
