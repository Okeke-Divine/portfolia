"use client";

const AddProject = () => {
  function _addProject(e) {
    e.preventDefault();
  }

  return (
    <>
      <div className="collapse bg-base-200">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">Add Project</div>
        <div className="collapse-content">
          <form onSubmit={_addProject} className="form-control"></form>
        </div>
      </div>
    </>
  );
};

export default AddProject;
