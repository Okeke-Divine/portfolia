"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { app_color_primary } from "@/constants/shared/color";
import Swal from "sweetalert2";

const ViewLanguages = () => {

  const [languages, setLanguages] = useState([]);
  const [loading, setLoading] = useState(false);

  const channel = new BroadcastChannel("user-languages-channel");

  useEffect(() => {
    channel.onmessage = (event) => {
      setLoading(true);
      const newLanguage = event.data.data;
      setLanguages((prevLanguages) => [...prevLanguages, newLanguage]);
      setLoading(false);
    };

    return () => {
      channel.close();
    };
  }, [channel]);


  return (
    <div>ViewLanguages</div>
  )
}

export default ViewLanguages