"use client";
import { useRef, useState } from "react";
import axios from "axios";

const BasicInfoForm = (props) => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <>
      <form className="form-contro">
        <p className="my-2 text-red-500 font-semibold">{error}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap 2">
          {/* name */}
          <div className="mb-3">
            <div>
              <label htmlFor="name" className="font-bold text-md">
                Full Name
              </label>
            </div>
            <div className="input input-bordered flex items-center gap-2 mt-1">
              <i className="fi fi-ts-circle-user flaticon-offset"></i>
              <input
                type="text"
                required
                className="grow"
                placeholder="Enter Your Full Name"
              />
            </div>
          </div>
          {/* name */}
          <div className="mb-3">
            <div>
              <label htmlFor="name" className="font-bold text-md">
                Full Name
              </label>
            </div>
            <div className="input input-bordered flex items-center gap-2 mt-1">
              <i className="fi fi-ts-circle-user flaticon-offset"></i>
              <input
                type="text"
                required
                className="grow"
                placeholder="Enter Your Full Name"
              />
            </div>
          </div>
          {/* name */}
          <div className="mb-3">
            <div>
              <label htmlFor="name" className="font-bold text-md">
                Full Name
              </label>
            </div>
            <div className="input input-bordered flex items-center gap-2 mt-1">
              <i className="fi fi-ts-circle-user flaticon-offset"></i>
              <input
                type="text"
                required
                className="grow"
                placeholder="Enter Your Full Name"
              />
            </div>
          </div>
          {/* about */}
          <div className="mb-3">
            <div>
              <label htmlFor="about" className="font-bold text-md">
                Full Name
              </label>
            </div>
            <div className="input input-bordered flex items-center gap-2 mt-1">
              <i className="fi fi-ts-circle-user flaticon-offset"></i>
              <textarea
                name="about"
                rows={5}
                className="textaread textarea-bordered"
              ></textarea>
            </div>
          </div>
        </div>
        {/* name */}
        <div className="mb-3">
          <div>
            <label htmlFor="name" className="font-bold text-md">
              Full Name
            </label>
          </div>
          <div className="input input-bordered flex items-center gap-2 mt-1">
            <i className="fi fi-ts-circle-user flaticon-offset"></i>
            <input
              type="text"
              required
              className="grow"
              placeholder="Enter Your Full Name"
            />
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
  );
};

export default BasicInfoForm;
