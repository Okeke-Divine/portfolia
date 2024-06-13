"use client";

const AddSkill = () => {
  return (
    <>
      <form>
        <div className="join flex">
          <input
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
