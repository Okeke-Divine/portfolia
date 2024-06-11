"use client";
import { useRef, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const SignInForm = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const [pswdVisible, setPswdVisible] = useState(false);
  function togglePswdVisible() {
    setPswdVisible(!pswdVisible);
  }

  function createUser(e) {
    e.preventDefault();

    setError("");
    setLoading(true);

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    if ( email == "" || password == "") {
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
            });
            setTimeout(function () {
              // signIn
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
   
          <form onSubmit={createUser}>
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
                  "Login"
                )}
              </button>
            </div>
          </form>
        </>
  );
};

export default SignInForm;
