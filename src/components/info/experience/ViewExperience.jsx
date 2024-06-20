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


  return (
    <div>ViewExperience</div>
  )
}

export default ViewExperience