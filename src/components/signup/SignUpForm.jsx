"use client";

import { useRef, useState } from "react";

const SignUpForm = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

    const [error,setError] = useState("");
    
    const [pswdVisible,setPswdVisible] = useState(false);
    function togglePswdVisible(){
        setPswdVisible(!pswdVisible)
    }

  return (
    <>
      <form>
        {/* name */}
        <div className="mb-3">
          <div>
            <label htmlFor="name" className="font-bold text-md">
              Your Name
            </label>
          </div>
          <div className="input border-2 border-gray-100 flex items-center gap-2 mt-1">
            <i className="fi fi-ts-circle-user flaticon-offset"></i>
            <input
              type="text"
              name="name"
              className="grow"
              placeholder="Enter Your Name"
            />
          </div>
        </div>
        {/* email */}
        <div className="mb-3">
          <div>
            <label htmlFor="email" className="font-bold text-md">
              Your Email
            </label>
          </div>
          <div className="input border-2 border-gray-100 flex items-center gap-2 mt-1">
            <i className="fi fi-tr-envelopes flaticon-offset"></i>
            <input
              type="email"
              name="email"
              className="grow"
              placeholder="Enter Your Email"
            />
          </div>
        </div>
        {/* username */}
        <div className="mb-3">
          <div>
            <label htmlFor="username" className="font-bold text-md">
              Your Username
            </label>
          </div>
          <div className="input border-2 border-gray-100 flex items-center gap-2 mt-1">
            <i className="fi fi-tr-at flaticon-offset"></i>
            <input
              type="text"
              name="username"
              className="grow"
              placeholder="Enter Your Username"
            />
          </div>
        </div>
        {/* password */}
        <div className="mb-3">
          <div>
            <label htmlFor="password" className="font-bold text-md">
              Your Password
            </label>
          </div>
          <div className="input border-2 border-gray-100 flex items-center gap-2 mt-1">
            <i className="fi fi-tr-padlock-check flaticon-offset"></i>
            <input
              type={pswdVisible ? "text" : "password"}
              name="password"
              className="grow"
              placeholder="Enter Your password"
            />
            <i className={`${pswdVisible ? "fi fi-rs-crossed-eye" : "fi fi-rr-eye"} cursor-pointer flaticon-offset`}></i>
          </div>
        </div>
        {/* submit button */}
        <div>
          <button
            className="w-full app-bg-primary duration-300 hover:app-bg-primary-dark btn btn-md text-white"
            type="submit"
          >
            Get Started
          </button>
        </div>
      </form>
    </>
  );
};

export default SignUpForm;
