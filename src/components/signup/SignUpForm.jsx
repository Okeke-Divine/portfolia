"use client";
import { useRef, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { signIn } from "next-auth/react";
import { app_color_primary } from "@/constants/shared/color";

async function _signIn(email,password){
  const login = await signIn("credentials", {
    redirect: false,
    email,
    password,
  });
  if (login.error) {
    document.location = "/signin";
  } else {
    document.location = "/dashboard";
    setLoading(false);
  }
}

const SignUpForm = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [regIsSuccessful, setRegIsSuccessful] = useState(false);

  const [pswdVisible, setPswdVisible] = useState(false);
  function togglePswdVisible() {
    setPswdVisible(!pswdVisible);
  }

  function createUser(e) {
    e.preventDefault();

    setError("");
    setLoading(true);

    const fullname = nameRef.current.value;
    const email = emailRef.current.value;
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;

    if (fullname == "" || email == "" || username == "" || password == "") {
      setError("All fields are required");
      setLoading(false);
      return;
    }

    if (fullname.length < 3) {
      setError("Name must be at lest 3 charaters");
      setLoading(false);
      return;
    }

    if (username.length < 3) {
      setError("Username must be at lest 3 charaters");
      setLoading(false);
      return;
    }
    if (password.length < 6) {
      setError("Password must be at lest 6 charaters");
      setLoading(false);
      return;
    }

    const formData = {
      fullname,
      email,
      username,
      password,
    };

    axios
      .post("/api/signup", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        if (response) {
          if (response.status == 201) {
            setRegIsSuccessful(true);
            Swal.fire({
              title: "Success",
              icon: "success",
              text: "Your account has been created successfully. You'll be logged in automatically...",
              confirmButtonColor: app_color_primary
            });
            setTimeout(function () {
             _signIn(email,password)
            }, 3000);
          }
          setLoading(false);
        }
      })
      .catch((e) => {
        if (e) {
          if (e.response && e.response.status) {
            if (e.response.status.toString().startsWith("4")) {
              setError(e.response.data.reason);
            } else {
              setError(
                "An error occurred. Please check your form and try again."
              );
            }
          } else {
            setError(
              "An error occurred. Please check your form and try again."
            );
          }
          setLoading(false);
        }
      });
  }

  return (
    <>
      {regIsSuccessful ? (
        <>
          <div className="py-5">
            <div className="alert alert-success text-white">
              <div>
              <span className="mb-2 font-semibold">Logging in...</span><br />
                <span>Your account has been created successfully</span>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <form onSubmit={createUser}>
            {/* name */}
            <p className="my-2 text-red-500 font-semibold">{error}</p>
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
                  ref={nameRef}
                  required
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
                  required
                  ref={emailRef}
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
                  required
                  ref={usernameRef}
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
                  required
                  ref={passwordRef}
                  className="grow"
                  placeholder="Enter Your password"
                />
                <i
                  onClick={togglePswdVisible}
                  className={`${
                    pswdVisible ? "fi fi-rr-eye-crossed" : "fi fi-rr-eye"
                  } cursor-pointer flaticon-offset`}
                ></i>
              </div>
            </div>
            {/* submit button */}
            <div>
              <button
                className="w-full app-bg-primary duration-300 hover:app-bg-primary-dark btn btn-md text-white"
                type="submit"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <span className="loading loading-dots loading-xs"></span>
                  </>
                ) : (
                  "Get Started"
                )}
              </button>
            </div>
          </form>
        </>
      )}
    </>
  );
};

export default SignUpForm;
