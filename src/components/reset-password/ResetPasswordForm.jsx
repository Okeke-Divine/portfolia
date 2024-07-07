"use client"
import { SweetAlertError, SweetAlertSuccess } from "@/utils/customSweetAlertFunction"
import axios from "axios"
import { useRef, useState } from "react"


const ResetPasswordForm = () => {

  const [loading, setLoading] = useState(false);

  const [pswdVisible, setPswdVisible] = useState(false);
  function togglePswdVisible() {
    setPswdVisible(!pswdVisible);
  }

  //refs
  const emailRef = useRef(null)
  const passwordRef = useRef(null)

  function update(e) {
    e.preventDefault();
    setLoading(true);
  }

  return (
    <>
      <form onSubmit={update} className="form-control">
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
              className={`${pswdVisible ? "fi fi-rr-eye-crossed" : "fi fi-rr-eye"
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
              "Save"
            )}
          </button>
        </div>
      </form>
    </>
  )
}

export default ResetPasswordForm