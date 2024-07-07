"use client";
import { useState } from "react";
import Link from "next/link";

const ResumeBuilderPreview = ({ username, resumeIsViewable }) => {
  const [preview, setPreview] = useState("desktop");

  return (
    <>

      <div className="flex justify-between gap-2 flex-wrap items-center">
        <div className="join border-2">
          <Link
            href="#desktop-preview"
            className={`btn btn-ghost hover:app-bg-primary-dark hover:text-white join-item ${preview == "desktop" ? "app-bg-primary-dark text-white" : ""
              }`}
            onClick={() => setPreview("desktop")}
          >
            Desktop
          </Link>
          <Link
            href="#mobile-preview"
            className={`btn btn-ghost hover:app-bg-primary-dark hover:text-white join-item ${preview == "mobile" ? "app-bg-primary-dark text-white" : ""
              }`}
            onClick={() => setPreview("mobile")}
          >
            Mobile
          </Link>
        </div>
        <div>
          <input type="checkbox" className="toggle toggle-lg checked:toggle-success" defaultChecked={resumeIsViewable} />
        </div>
      </div>

      <div className="divider"></div>

      {preview == "desktop" ? (
        <>
          <div
            id="desktop-preview"
            className="mockup-browser border bg-base-300"
          >
            <div className="mockup-browser-toolbar">
              <div className="input text-center">
                {process.env.NEXT_PUBLIC_BASE_URL}/i/{username}/resume
              </div>
            </div>
            <div className="">
              <iframe
                className="w-full min-h-[80vh] md:min-h-[80vh]"
                src={"/i/" + username + "/resume"}
              ></iframe>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
      {preview == "mobile" ? (
        <>
          <div id="mobile-preview" className="flex justify-center">
            <div className="mockup-phone">
              <div className="camera"></div>
              <div className="display">
                <iframe
                  className="w-full min-h-[90vh] md:min-h-[80vh]"
                  src={"/i/" + username + "/resume"}
                ></iframe>
              </div>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default ResumeBuilderPreview;
