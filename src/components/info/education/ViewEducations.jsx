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