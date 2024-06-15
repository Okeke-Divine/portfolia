"use client";
import { useState, useRef } from "react";
import axios from "axios";
import { SweetAlertError } from "@/utils/customSweetAlertFunction";

const AddProject = () => {
  const [loading, setLoading] = useState(false);

  //refs
  const projectTitleRef = useRef(null);
  const projectTagsRef = useRef(null);
  const projectUrlRef = useRef(null);
  const projectDescRef = useRef(null);
  const projectImageRef = useRef(null);

  function _addProject(e) {
    e.preventDefault();
    setLoading(true);

    //get the values
    const projectTitle = projectTitleRef.current.value;
    const projectTags = projectTagsRef.current.value;
    const projectUrl = projectUrlRef.current.value;
    const projectDesc = projectDescRef.current.value;
    const projectImage = projectImageRef.current.files[0];

    if (!projectTitle) {
      SweetAlertError("Project title is required.");
      setLoading(false);
      eturn;
    }

    if (!projectDesc) {
      SweetAlertError("Project description is required.");
      setLoading(false);
      return;
    }

    const formData = new FormData();
    formData.append("projectTitle", projectTitle);
    formData.append("projectTags", projectTags);
    formData.append("projectUrl", projectUrl);
    formData.append("projectDesc", projectDesc);
    formData.append("projectImage", projectImage);

    axios
      .post("/api/info/project/", formData)
      .then((response) => {
        if (response) {
          setLoading(false);
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

    console.log(formData);
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
                  ref={projectTitleRef}
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
                  ref={projectTagsRef}
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
                <input
                  type="url"
                  className="grow"
                  placeholder="https://..."
                  ref={projectUrlRef}
                />
              </div>
            </div>
            {/* image */}
            <div className="mb-3">
              <div>
                <label className="font-bold text-md">Project Image</label>
              </div>
              <input
                type="file"
                accept="image/*"
                ref={projectImageRef}
                className="file-input w-full mt-1 file-input-bordered"
              />
            </div>
            {/* description */}
            <div className="mb-3">
              <div>
                <label className="font-bold text-md">
                  Project Description <span className="text-red-600">*</span>
                </label>
              </div>
              <div className="mt-1">
                <textarea
                  rows={5}
                  required
                  ref={projectDescRef}
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
