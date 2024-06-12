"use client";
import { signOut } from "next-auth/react";
import Swal from "sweetalert2";
import config from "@/data/config.json";

function ComingSoonComponent() {
  return (
    <>
      <span className="badge app-bg-primary text-white border-none badge-sm">
        <div className="loading loading-dots loading-xs"></div>
      </span>
    </>
  );
}

export default function ApplicationSidedar() {
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

  return (
    <>
      <div className="fixed top-0 left-0 h-[100%] max-h-[100vh] overflow-y-auto bg-black w-[250px] flex justify-between flex-col text-white p-5">
        <div className="text-2xl text-center font-bold uppercase">
          {config.app_name}
        </div>
        <div>
          <button className="btn btn-ghost w-full mb-2 text-left justify-start">
            Portfolio
          </button>
          <button className="btn btn-ghost w-full mb-2 text-left justify-start">
            Feedback
          </button>
          <button className="btn btn-ghost w-full mb-2 justify-start">
            Resume
            <ComingSoonComponent />
          </button>
          <button className="btn btn-ghost w-full mb-2 justify-start">
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
