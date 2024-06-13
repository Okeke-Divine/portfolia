"use client";
import { useState } from "react";
import Link from "next/link";

const PortfolioBuilderPreview = ({ username }) => {
  const [preview, setPreview] = useState("desktop");

  return (
    <>
      <div className="join border-2">
        <Link
          href="#desktop-preview"
          className={`btn btn-ghost hover:app-bg-primary-dark hover:text-white join-item ${
            preview == "desktop" ? "app-bg-primary-dark text-white" : ""
          }`}
          onClick={() => setPreview("desktop")}
        >
          Desktop
        </Link>
        <Link
          href="#mobile-preview"
          className={`btn btn-ghost hover:app-bg-primary-dark hover:text-white join-item ${
            preview == "mobile" ? "app-bg-primary-dark text-white" : ""
          }`}
          onClick={() => setPreview("mobile")}
        >
          Mobile
        </Link>
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
                {process.env.NEXT_PUBLIC_BASE_URL}i/{username}
              </div>
            </div>
            <div className="">
              <iframe
                className="w-full min-h-[50vh]"
                src={"/i/" + username}
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
                  className="w-full min-h-[80vh]"
                  src={"/i/" + username}
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

export default PortfolioBuilderPreview;
