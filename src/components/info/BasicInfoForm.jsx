"use client";
import { useRef, useState } from "react";
import axios from "axios";

const BasicInfoForm = (props) => {
  const [error, setError] = useState("");

  return (
    <>
      <form className="form-contro">
        <p className="my-2 text-red-500 font-semibold">{error}</p>
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
      </form>
    </>
  );
};

export default BasicInfoForm;
