"use client";
import prisma from "@/app/db";
import SkillSkeleton from "@/components/skeleton/skills/SkillSkeleton";
import { getIconClass } from "@/utils/main";
import axios from "axios";
import { useState, useEffect } from "react";

const ViewSocialInfo = () => {
  const [socials, setSocials] = useState([]);
  const [loading, setLoading] = useState(false);

  const channel = new BroadcastChannel("user-socials-channel");

  useEffect(() => {
    channel.onmessage = (event) => {
      setLoading(true);
      const newSocial = event.data.data;
      setSocials((prevSocials) => [...prevSocials, newSocial]);
      setLoading(false);
    };

    return () => {
      channel.close();
    };
  }, [channel]);

  useEffect(function () {
    axios
      .get("/api/info/socials")
      .then((response) => setSocials(response.data.data));
  }, []);

  return (
    <>
      {loading ? <SkillSkeleton /> : ""}
      <div>
        {socials.map((social, index) => (
          <div key={index}>
            <div>
              <i
                className={`${getIconClass(
                  social.name
                )} app-portfolio-navbar-icon`}
              ></i>
            </div>
            {social.value}
          </div>
        ))}
      </div>
    </>
  );
};

export default ViewSocialInfo;
