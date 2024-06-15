"use client";
import { useRef, useState } from "react";
import Swal from "sweetalert2";

const ChangeProfilePictureForm = () => {
  const [loading, setLoading] = useState(true);
  const profilePictureRef = useRef(null);

  return (
    <>
      <form>
        <div className="mb-2">
          <label className="font-bold text-md">Select a picture</label>
        </div>
        <input type="file" accept="image/*" className="file-input" />
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
              "Upload"
            )}
          </button>
        </div>
      </form>
    </>
  );
};

export default ChangeProfilePictureForm;
