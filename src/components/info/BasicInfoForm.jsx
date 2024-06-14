"use client";
import { useRef, useState } from "react";
import axios from "axios";

const BasicInfoForm = ({userDetails}) => {
  const [error, setError] = useState("");
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
    setError("");

    const fullname = fullnameRef.current.value;
    const heroTitle = heroTitleRef.current.value;
    const professionalTitle = professionalTitleRef.current.value;
    const bio = bioRef.current.value;
    const about = aboutRef.current.value;

    console.log(fullname,heroTitle,professionalTitle,bio,about);

  }

  return (
    <>
      <form onSubmit={updateDetails} className="form-contro">
        <p className="my-2 text-red-500 font-semibold">{error}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {/* name */}
          <div className="mb-3">
            <div>
              <label htmlFor="name" className="font-bold text-md">
                Full Name
              </label>
            </div>
            <div className="input input-bordered flex items-center gap-x-2 mt-1">
              <i className="fi fi-ts-circle-user flaticon-offset"></i>
              <input
                type="text"
                name="name"
                ref={fullnameRef}
                required
                className="grow"
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
                className="grow"
              />
            </div>
          </div>
          {/* name */}
          <div className="mb-3">
            <div>
              <label htmlFor="professionalTitle" className="font-bold text-md">
                Professional Title
              </label>
            </div>
            <div className="input input-bordered flex items-center gap-2 mt-1">
              <i className="fi fi-ts-circle-user flaticon-offset"></i>
              <input
                type="text"
                ref={professionalTitleRef}
                name="professionalTitle"
                required
                className="grow"
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
                className="grow"
                placeholder="A one line summary of yourself."
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
