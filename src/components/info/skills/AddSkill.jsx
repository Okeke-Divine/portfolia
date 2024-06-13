"use client";
import { useRef, useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";

const AddSkill = () => {
  const [laading, setLoading] = useState(false);
  const skillRef = useRef(null);

  function _addSkill(e) {
    e.preventDefault();
    setLoading(true);
    const skill_name = skillRef.current.value;
    if (!skill_name || skill_name.length < 3) {
      Swal.fire({
        title: "Error",
        icon: "error",
        text: "Skill can not be less than three characters",
      });
      setLoading(false);
      return;
    }

    //pass

    axios
      .post(
        "/api/skill/add",
        { skill_name },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        if (response) {
          setLoading(false);
        }
        if (response.status == 201) {
          skillRef.current.value = "";
          Swal.fire({
            title: "Success",
            icon: "success",
            text: "Your skill has been added",
          });
        }
      })
      .catch((error) => {
        if (error) {
          setLoading(false);
          Swal.fire({
            title: "Error",
            icon: "error",
            text: "An error occured while trying to add your skill. Please try again",
          });
        }
      });
  }

  return (
    <>
      <form onSubmit={_addSkill}>
        <div className="join flex">
          <input
            ref={skillRef}
            disabled={laading}
            type="text"
            className="join-item grow input input-bordered"
            placeholder="Skill Name"
          />
          <button
            disabled={laading}
            className="join-item btn app-bg-primary text-white duration-300 hover:app-bg-primary-dark"
          >
            {laading ? (
              <>
                <span className="loading loading-dots loading-sm"></span>
              </>
            ) : (
              "Add"
            )}
          </button>
        </div>
      </form>
    </>
  );
};

export default AddSkill;
