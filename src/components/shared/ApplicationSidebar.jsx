"use client";
import { signOut } from "next-auth/react";
import Swal from "sweetalert2";
import config from "@/data/config.json";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { twitterAccUrl, buyMeACoffeUrl } from "@/constants/shared/constant";
import { app_color_primary } from "@/constants/shared/color";
import ComingSoonComponent from "./ComingSoonComponent";
import { useState, useEffect } from "react";

function confirmSignOut() {
  Swal.fire({
    title: "Logout",
    text: "Are you sure you want to logout?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Yes, logout!",
    confirmButtonColor: app_color_primary,
    cancelButtonText: "Cancel",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "Processing",
        icon: "info",
        text: "Please wait...",
        showConfirmButton: false,
        allowOutsideClick: false,
      });
      if (typeof localStorage !== "undefined") {
        localStorage.removeItem("user_imgUrl");
      }
      signOut();
    }
  });
}

export default function ApplicationSidedar() {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);

  useEffect(() => {
    // Check if window is defined (i.e., we are in the browser environment)
    if (typeof window !== "undefined") {
      const isLargeScreen = window.innerWidth >= 768;
      setIsSidebarExpanded(isLargeScreen);

      const handleResize = () => {
        setIsSidebarExpanded(window.innerWidth >= 768);
      };

      // Add event listener for window resize
      window.addEventListener("resize", handleResize);

      // Cleanup function to remove event listener
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };

  const links = [
    {
      name: "Dashboard",
      url: "/dashboard",
      icon: <i className="fi fi-tr-house-chimney"></i>,
      blank: false,
    },
    {
      name: "Info",
      url: "/info",
      icon: <i className="fi fi-rr-leaderboard-alt"></i>,
      blank: false,
    },
    {
      name: "Portfolio",
      url: "/portfolio/builder",
      icon: <i className="fi fi-ts-web-design"></i>,
      blank: false,
    },
    {
      name: "Resume",
      url: "/resume/builder",
      icon: <i className="fi fi-tr-poll-h"></i>,
      blank: false,
    },
    {
      name: "Feedback",
      url: "/feedback",
      icon: <i className="fi fi-ts-skill-user"></i>,
      blank: false,
    },
    {
      name: "Twitter",
      url: twitterAccUrl,
      icon: <i className="fi fi-brands-twitter-alt"></i>,
      blank: true,
    },
    {
      name: "Buy Me A Coffee",
      url: buyMeACoffeUrl,
      icon: <i className="fi fi-rs-cup-togo flaticon-offset"></i>,
      blank: true,
    },
  ];

  const pathname = usePathname();

  return (
    <>
      <div
        className={`fixed top-0 ${
          isSidebarExpanded ? "left-0" : "-left-full"
        } md:lemft-0 h-[100%] max-h-[100vh] overflow-y-auto bg-black w-[250px] flex justify-between flex-col text-white px-5 md:px-7 py-5 md:py-10 duration-300 z-50`}
      >
        <div className="text-2xl text-center font-bold uppercase">
          {config.app_name}
        </div>
        <div>
          {links.map((link, index) => (
            <Link
              href={link.url}
              key={index}
              target={link.blank ? "_blank" : "_self"}
              className={`btn btn-ghost w-full mb-2 text-left justify-start ${
                !pathname.toString().search(link.url)
                  ? "app-bg-primary hover:app-bg-primary-dark"
                  : ""
              }`}
            >
              {link.icon}
              {link.name}
              {link.blank ? (
                <>
                  <div className="grow flex justify-end">
                    <span>
                      <i className="fi fi-tr-arrow-up-right-from-square text-[10px]"></i>
                    </span>
                  </div>
                </>
              ) : (
                <></>
              )}
            </Link>
          ))}
          <button className="btn btn-ghost w-full mb-2 justify-start">
            <i className="fi fi-tr-customization-cogwheel"></i>
            Settings
            <ComingSoonComponent />
          </button>
          {/* <button className="btn btn-ghost w-full mb-2 justify-start">
            <i className="fi fi-tr-analyse-alt"></i>
            Analytics
            <ComingSoonComponent />
          </button> */}
        </div>
        <div className="">
          <button
            className="w-full btn text-white btn-ghost justify-start"
            onClick={confirmSignOut}
          >
            <i className="fi fi-tr-sign-out-alt flaticon-offset"></i> Logout
          </button>
        </div>
      </div>

      {/* expand buttton */}
      <button
        className={`btn btn-md rounded-full fixed bottom-4 ${
          isSidebarExpanded ? "left-[17rem]" : "left-5"
        } app-bg-primary hover:app-bg-primary-dark shadow-md duration-300 hover:shadow-lg text-white md:hidden`}
        onClick={toggleSidebar}
      >
        <i className="fi fi-tr-bars-staggered"></i>
      </button>
    </>
  );
}
