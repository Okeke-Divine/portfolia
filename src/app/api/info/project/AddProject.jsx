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
        <input type="checkbox" checked />
        <div className="collapse-title text-xl font-medium">Add Project</div>
        <div className="collapse-content">
          <form onSubmit={_addProject} className="form-control">
            {/* title */}
            <div className="mb-3">
              <div>
                <label className="font-bold text-md">Title</label>
              </div>
              <div className="input border-2 border-gray-100 flex items-center gap-2 mt-1">
                <input
                  type="text"
                  required
                  className="grow"
                  placeholder="Project Titlre"
                />
              </div>
            </div>
            {/* tags */}
            <div className="mb-3">
              <div>
                <label className="font-bold text-md">
                  Tags (Seperated by comma)
                </label>
              </div>
              <div className="input border-2 border-gray-100 flex items-center gap-2 mt-1">
                <input
                  type="text"
                  required
                  className="grow"
                  placeholder="e.g. NextJs, Prisma, MySQL, Tailwind, .."
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
