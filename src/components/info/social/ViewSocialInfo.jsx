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
          <div key={index} className="flex gap-2 items-center">
            <div className="w-fit">
              <i
                className={`${getIconClass(
                  social.name
                )} app-portfolio-navbar-icon`}
              ></i>
            </div>
            <div className="w-full">{social.value}</div>
            <div className="w-fit flex flex-wrap gap-2">
              <button className="btn btn sm">e</button>
              <button className="btn btn sm">
                <i className="fi fi-rr-trash flaticon-offset"></i>
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ViewSocialInfo;
