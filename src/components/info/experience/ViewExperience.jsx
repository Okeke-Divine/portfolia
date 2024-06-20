"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { app_color_primary } from "@/constants/shared/color";
import Swal from "sweetalert2";
import SkillSkeleton from "@/components/skeleton/skills/SkillSkeleton";

const ViewExperience = () => {

  const [certificates, setCertificates] = useState([]);
  const [loading, setLoading] = useState(false);

  const channel = new BroadcastChannel("user-certificates-channel");

  useEffect(() => {
    channel.onmessage = (event) => {
      setLoading(true);
      const newExperience = event.data.data;
      setCertificates((prevExperiences) => [...prevExperiences, newExperience]);
      setLoading(false);
    };

    return () => {
      channel.close();
    };
  }, [channel]);


  useEffect(function () {
    setLoading(true);
    axios.get("/api/info/experience").then((response) => {
      setCertificates(response.data.data);
      setLoading(false);
    });
  }, []);

  return (
    <div>ViewExperience</div>
  )
}

export default ViewExperience