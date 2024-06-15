"use client";
import { useState, useRef } from "react";

const AddProject = () => {
  const [loading, setLoading] = useState(false);

  function _addProject(e) {
    e.preventDefault();
  }

  return (
    <>
      <div className="collapse collapse-arrow rounded-md bg-base-200">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">Add Project</div>
        <div className="collapse-content">
          <form onSubmit={_addProject} className="form-control">
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
        </div>
      </div>
    </>
  );
};

export default AddProject;
