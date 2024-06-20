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

  return (
    <div>ViewExperience</div>
  )
}

export default ViewExperience