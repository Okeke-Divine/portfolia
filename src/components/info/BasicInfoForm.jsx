"use client";
import { useRef, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { SweetAlertError } from "@/utils/customSweetAlertFunction";

const BasicInfoForm = ({ userDetails }) => {
  const [loading, setLoading] = useState(false);
  //refs
  const fullnameRef = useRef(null);
  const heroTitleRef = useRef(null);
  const professionalTitleRef = useRef(null);
  const bioRef = useRef(null);
  const aboutRef = useRef(null);

  function updateDetails(e) {
    e.preventDefault();
    setLoading(true);

    const fullname = fullnameRef.current.value;
    const heroTitle = heroTitleRef.current.value;
    const professionalTitle = professionalTitleRef.current.value;
    const bio = bioRef.current.value;
    const about = aboutRef.current.value;

    if (!fullname || !heroTitle || !professionalTitle || !bio || !about) {
      SweetAlertError("All fields are required.");
      setLoading(false);
      return;
    }

    if (fullname.length < 3) {
      SweetAlertError("Full name cannot be less than 3 characters");
      setLoading(false);
      return;
    }

    if (heroTitle.length < 5) {
      SweetAlertError("Hero title cannot be less than 5 characters");
      setLoading(false);
      return;
    }

    if (professionalTitle.length < 3) {
      SweetAlertError("Profession cannot be less than 3 characters");
      setLoading(false);
      return;
    }

    if (bio.length < 5) {
      SweetAlertError("Bio cannot be less than 5 characters");
      setLoading(false);
      return;
    }

    if (bio.length > 25) {
      SweetAlertError("Bio cannot be greater than 25 characters");
      setLoading(false);
      return;
    }

    if (about.length < 10) {
      SweetAlertError("About cannot be less than 10 characters");
      setLoading(false);
      return;
    }

    const formData = {
      fullname,
      heroTitle,
      profession: professionalTitle,
      bio,
      about,
    };
    setLoading(false);
  }

  return (
    <>
      <form onSubmit={updateDetails} className="form-contro">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {/* name */}
          <div className="mb-3">
            <div>
              <label htmlFor="name" className="font-bold text-md">
                Full Name
              </label>
            </div>
            <div className="input input-bordered flex items-center gap-x-2 mt-1">
              <i className="fi fi-ts-circle-user flaticon-offset w-fit"></i>
              <input
                type="text"
                name="name"
                ref={fullnameRef}
                required
                className="w-full"
                placeholder="Enter Your Full Name"
              />
            </div>
          </div>
          {/* name */}
          <div className="mb-3">
            <div>
              <label htmlFor="heroTitle" className="font-bold text-md">
                Hero Title
              </label>
            </div>
            <div className="input input-bordered flex items-center gap-2 mt-1">
              <i className="fi fi-ts-circle-user flaticon-offset"></i>
              <input
                type="text"
                name="heroTitle"
                ref={heroTitleRef}
                placeholder="Hey there, i'm John"
                required
                className="w-full"
              />
            </div>
          </div>
          {/* name */}
          <div className="mb-3">
            <div>
              <label htmlFor="professionalTitle" className="font-bold text-md">
                Profession
              </label>
            </div>
            <div className="input input-bordered flex items-center gap-2 mt-1">
              <i className="fi fi-ts-circle-user flaticon-offset"></i>
              <input
                type="text"
                ref={professionalTitleRef}
                name="professionalTitle"
                required
                className="w-full"
                placeholder="What your do."
              />
            </div>
          </div>
          {/* name */}
          <div className="mb-3">
            <div>
              <label htmlFor="bio" className="font-bold text-md">
                Bio
              </label>
            </div>
            <div className="input input-bordered flex items-center gap-2 mt-1">
              <i className="fi fi-ts-circle-user flaticon-offset"></i>
              <input
                type="text"
                name="bio"
                ref={bioRef}
                required
                className="w-full"
                placeholder="A one/two line summary of yourself."
              />
            </div>
          </div>
        </div>
        {/* about */}
        <div className="mb-3">
          <div>
            <label htmlFor="about" className="font-bold text-md">
              About
            </label>
          </div>
          <textarea
            name="about"
            rows={5}
            required
            ref={aboutRef}
            placeholder="A more detailed summary of yourself and what you do."
            className="textarea input-bordered w-full"
          ></textarea>
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
  );
};

export default BasicInfoForm;
