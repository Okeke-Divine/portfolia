"use client"
import { useRef, useState } from "react"
import axios from "axios"
import {
  SweetAlertError,
  SweetAlertSuccess,
} from "@/utils/customSweetAlertFunction";


const AddLanguage = () => {

  const languageRef = useRef(null)
  const proficiencyRef = useRef(null)

  const channel = new BroadcastChannel("user-languages-channel")

  const [loading, setLoading] = useState(false)

  function _addLanguage(e) {
    e.preventDefault()
    setLoading(true);

    //get the values
    const language = languageRef.current.value;
    const proficiency = proficiencyRef.current.value;

    if (!language || !proficiency) {
      SweetAlertError("All fields are required.");
      setLoading(false);
      return;
    }

    proficiencyRef.current.value = "";
    return;
    axios
      .post("/api/info/language", { language, proficiency }, { headers: { "Content-Type": "application/json" } })
      .then((response) => {
        if (response) {
          SweetAlertSuccess("Your project has been successfully added.");
          setLoading(false);
          languageRef.current.value = "";
          proficiencyRef.current.value = "";

          //broadcast the project info
          const broadcast_message = {
            type: "NEW_LANGUAGE",
            data: response.data.data
          }
          channel.postMessage(broadcast_message);
        }
      })
      .catch((error) => {
        if (error) {
          if (error?.response?.status == 400) {
            SweetAlertError(error.response.data.reason);
          } else {
            SweetAlertError("An error occured. Please try again");
          }
          setLoading(false);
        }
      });
  }

  return (
    <>
      <form onSubmit={_addLanguage} className="form-control">
        {/* language */}
        <div className="mb-3">
          <div>
            <label className="font-bold text-md">Language</label>
          </div>
          <div className="input input-bordered flex items-center gap-2 mt-1">
            <input
              type="text"
              className="grow"
              placeholder="Language"
              required
              ref={languageRef}
            />
          </div>
        </div>
        {/* proficiency */}
        <div className="mb-3">
          <div>
            <label className="font-bold text-md">Proficiency</label>
          </div>
          <div>
            <select ref={proficiencyRef} required className="select input-bordered w-full">
              <option disabled selected value="">Select proficiency</option>
              <option value="Beginner">Beginner</option>
              <option value="Elementary">Elementary</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
              <option value="Proficient">Proficient</option>
            </select>

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
              "Add"
            )}
          </button>
        </div>
      </form>
    </>
  )
}

export default AddLanguage