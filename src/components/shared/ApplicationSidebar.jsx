"use client";
import { signOut } from "next-auth/react";
import Swal from "sweetalert2";
import config from "@/data/config.json";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { twitterAccUrl } from "@/constants/shared/constant";

function ComingSoonComponent() {
  return (
    <>
      <span className="badge app-bg-primary text-white border-none badge-sm">
        <div className="loading loading-dots loading-xs"></div>
      </span>
    </>
  );
}

function confirmSignOut() {
  Swal.fire({
    title: "Logout",
    text: "Are you sure you want to logout?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Yes, logout!",
    cancelButtonText: "Cancel",
  }).then((result) => {
    if (result.isConfirmed) {
      signOut();
    }
  });
}

export default function ApplicationSidedar() {
  const links = [
    {
      name: "Dashboard",
      url: "/dashboard",
      icon: <i className="fi fi-tr-house-chimney"></i>,
      blank:false
    },
    {
      name: "Portfolio Builder",
      url: "#",
      icon: <i className="fi fi-ts-web-design"></i>,
      blank:false
    },
    {
      name: "Feedback",
      url: "/feedback",
      icon: <i className="fi fi-ts-skill-user"></i>,
      blank:false
    },
    {
      name: "Twitter",
      url: twitterAccUrl,
      icon: <i className="fi fi-brands-twitter-alt"></i>,
      blank:true
    },
  ];

  const pathname = usePathname();

  return (
    <>
      <div className="fixed top-0 -left-full md:left-0 h-[100%] max-h-[100vh] overflow-y-auto bg-black w-[250px] flex justify-between flex-col text-white px-5 md:p-10 py-5 md:py-10">
        <div className="text-2xl text-center font-bold uppercase">
          {config.app_name}
        </div>
        <div>
          {links.map((link, index) => (
            <Link
              href={link.url}
              key={index}
              target={link.blank ? "_blank" : "_self"}
              className={`btn btn-ghost w-full mb-2 text-left justify-start ${pathname === link.url ? 'app-bg-primary hover:app-bg-primary-dark':''}`}
            >
              {link.icon}
              {link.name}
              {link.blank ? (<><span><i className="fi fi-tr-arrow-up-right-from-square"></i></span></>) : (<></>)}
            </Link>
          ))}
          <button className="btn btn-ghost w-full mb-2 justify-start">
            <i className="fi fi-tr-poll-h"></i>
            Resume
            <ComingSoonComponent />
          </button>
          <button className="btn btn-ghost w-full mb-2 justify-start">
            <i className="fi fi-tr-customization-cogwheel"></i>
            Settings
            <ComingSoonComponent />
          </button>
          <button className="btn btn-ghost w-full mb-2 justify-start">
            <i className="fi fi-tr-analyse-alt"></i>
            Analytics
            <ComingSoonComponent />
          </button>
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
    </>
  );
}
