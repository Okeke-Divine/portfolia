"use client";
import { useRef } from "react";
import Swal from "sweetalert2";
import axios from "axios";

const AddSkill = () => {
  const skillRef = useRef(null);

  function _addSkill(e) {
    e.preventDefault();
    const skill_name = skillRef.current.value;
    if (!skill_name || skill_name.length < 3) {
      Swal.fire({
        title: "Error",
        icon: "error",
        text: "Skill can not be less than three characters",
      });
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
        if (response.status == 201) {
          Swal.fire({
            title: "Success",
            icon: "success",
            text: "Your skill has been added",
          });
        }
      })
      .catch((error) => {
        Swal.fire({
          title: "Error",
          icon: "error",
          text: "An error occured while trying to add your skill. Please try again",
        });
      });
  }

  return (
    <>
      <form onSubmit={_addSkill}>
        <div className="join flex">
          <input
            ref={skillRef}
            type="text"
            className="join-item grow input input-bordered"
            placeholder="Skill Name"
          />
          <button className="join-item btn app-bg-primary text-white duration-300 hover:app-bg-primary-dark">
            Add
          </button>
        </div>
      </form>
    </>
  );
};

export default AddSkill;
