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
                <label className="font-bold text-md">
                  Project Title <span className="text-red-600">*</span>
                </label>
              </div>
              <div className="input input-bordered flex items-center gap-2 mt-1">
                <input
                  type="text"
                  required
                  className="grow"
                  placeholder="Project Title"
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
              <div className="input input-bordered flex items-center gap-2 mt-1">
                <input
                  type="text"
                  className="grow"
                  placeholder="e.g. NextJs, Prisma, MySQL, Tailwind, .."
                />
              </div>
            </div>
            {/* url */}
            <div className="mb-3">
              <div>
                <label className="font-bold text-md">Preview Url</label>
              </div>
              <div className="input input-bordered flex items-center gap-2 mt-1">
                <input type="url" className="grow" placeholder="https://..." />
              </div>
            </div>
            {/* image */}
            <div className="mb-3">
              <div>
                <label className="font-bold text-md">Project Image</label>
              </div>
              <input type="file" accept="image/*" className="input" placeholder="https://..." />
            </div>
            {/* description */}
            <div className="mb-3">
              <div>
                <label className="font-bold text-md">Project Description</label>
              </div>
              <div className="mt-1">
                <textarea
                  rows={5}
                  className="textarea w-full input-bordered"
                ></textarea>
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
