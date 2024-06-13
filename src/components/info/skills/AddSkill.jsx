"use client";
import { useRef } from "react";
import Swal from "sweetalert2";
import axios from "axios";

const AddSkill = () => {
  const skillRef = useRef(null);

  function _addSkill() {
    const skill = skillRef.current.value;
    if (!skill || skill.length < 3) {
      Swal.fire({
        title: "Error",
        icon: "error",
        text: "Skill can not be less than three characters",
      });
      return;
    }

    //pass
  }

  return (
    <>
      <form onSubmit={_addSkill}>
        <div className="join flex">
          <input
            ref={skillRef}
            type="text"
            className="join-item grow input input-borderd"
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
