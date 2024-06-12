"use client";
import {useState} from "react"

const PortfolioBuilderPreview = ({username}) => {

  const [preview,setPreview] = useState("desktop");

  return (
    <>
    <button onClick={() => setPreview('desktop')}>Desktop</button>
    <button onClick={() => setPreview('mobile')}>Mobile</button>

    <div className="divider"></div>

    {preview == "desktop" ? (<>
      <div className="mockup-browser border bg-base-300">
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
      </div></>) : (<></>)}
      {preview == "phone" ? (<>
        <div className="mockup-phone">
        <div className="camera"></div>
        <div className="display">
          <iframe
            className="w-full min-h-[80vh]"
            src={"/i/" + username}
          ></iframe>
        </div>
      </div></>) : (<></>)}
    </>
  )
}

export default PortfolioBuilderPreview