"use client"
import { useRef, useState } from "react"
import axios from "axios"
import {
  SweetAlertError,
  SweetAlertSuccess,
} from "@/utils/customSweetAlertFunction";
import { generateMonthArray, generateYearsArray } from "@/utils/main";

const AddExperience = () => {

  //refs
  const positionRef = useRef(null)
  const companyRef = useRef(null)
  const startMonthRef = useRef(null)
  const startYearRef = useRef(null)
  const endMonthRef = useRef(null)
  const endYearRef = useRef(null)
  const desciptionRef = useRef(null)
  // end refs

  const years = generateYearsArray();
  const months = generateMonthArray();
  const channel = new BroadcastChannel("user-certificates-channel")
  const [loading, setLoading] = useState(false)

  function _addExperience(e) {
    e.preventDefault()
    setLoading(true);
  }

  return (
    <>
      <form onSubmit={_addExperience} className="form-control">
        {/* language */}
        <div className="mb-3">
          <div>
            <label className="font-bold text-md">Position</label>
          </div>
          <div className="input input-bordered flex items-center gap-2 mt-1">
            <input
              type="text"
              className="grow"
              placeholder="Position"
              required
              ref={positionRef}
            />
          </div>
        </div>
        {/* company */}
        <div className="mb-3">
          <div>
            <label className="font-bold text-md">Company</label>
          </div>
          <div className="input input-bordered flex items-center gap-2 mt-1">
            <input
              type="text"
              className="grow"
              placeholder="Company"
              required
              ref={companyRef}
            />
          </div>
        </div>
        <div className="grid gap-2 grid-cols-1 md:grid-cols-2 mb-3">

        </div>
        {/* Description */}
        <div className="mb-3">
          <div>
            <label htmlFor="about" className="font-bold text-md">
              Description
            </label>
          </div>
          <textarea
            rows={5}
            required
            ref={desciptionRef}
            placeholder="Description"
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
              "Add"
            )}
          </button>
        </div>
      </form>
    </>
  )
}

export default AddExperience