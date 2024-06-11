"use client";
import { signOut } from "next-auth/react";
import Swal from "sweetalert2";
import config from "@/data/config.json";

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
          <button className="btn btn-ghost w-full mb-2">
            Analytics
            <span className="badge badge-info badge-sm">coming soon</span>
          </button>
          <button className="btn btn-ghost w-full mb-2">
            Settings
          </button>
        </div>
        <div className="">
          <button className="w-full btn text-white btn-ghost" onClick={confirmSignOut}>
            <i className="fi fi-tr-sign-out-alt flaticon-offset"></i> Logout
          </button>
        </div>
      </div>
    </>
  );
}
