"use client";
import { SweetAlertError } from "@/utils/customSweetAlertFunction";
import { useRef, useState } from "react";
import Swal from "sweetalert2";

const ChangeProfilePictureForm = () => {
  const [loading, setLoading] = useState(false);
  const profilePictureRef = useRef(null);

  function uploadProfilePicture(e) {
    e.preventDefault();
    setLoading(true);

    const picture = profilePictureRef.current.files[0];

    if (!picture) {
      SweetAlertError("Picture is required.");
      setLoading(false);
      return;
    }

    const formData = new FormData();
    formData.append("picture", picture);

    axios
      .post("/api", formData)
      .then((response) => {
        if (response) {
          setLoading(false);
        }
      })
      .catch((error) => {
        if (error) {
          setLoading(false);
        }
      });
  }

  return (
    <>
      <form onSubmit={uploadProfilePicture}>
        <div className="mb-2">
          <label className="font-bold text-md">Select a picture</label>
        </div>
        <input
          type="file"
          accept="image/*"
          className="file-input w-full"
          ref={profilePictureRef}
          required
        />
        {/* submit button */}
        <div className="mt-2">
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
              "Upload"
            )}
          </button>
        </div>
      </form>
    </>
  );
};

export default ChangeProfilePictureForm;
