"use client";
import { signOut } from "next-auth/react";
import Swal from "sweetalert2";

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
      <div className="fixed top-0 left-0 h-[100%] bg-black w-[250px] flex justify-between flex-col text-white p-5">
        <div className="">
          <button className="btn text-white btn-ghost" onClick={confirmSignOut}>
            <i className="fi fi-tr-sign-out-alt flaticon-offset"></i> Logout
          </button>
        </div>
      </div>
    </>
  );
}
