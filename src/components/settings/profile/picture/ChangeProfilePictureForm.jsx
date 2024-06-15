"use client";

const ChangeProfilePictureForm = () => {
  return (
    <>
      <form>
        <div className="mb-2">
          <label className="font-bold text-md">Select a picture</label>
        </div>
        <input type="file" accept="image/*" className="file-input" />
      </form>
    </>
  );
};

export default ChangeProfilePictureForm;
