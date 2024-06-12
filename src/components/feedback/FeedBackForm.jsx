"use client";

const FeedBackForm = () => {
  return (
    <>
      <form className="form-control">
        <h3 className="font-bold text-xl">
          We read them all! How can we improve your experience?
        </h3>
        {/* message */}
        <div className="mb-2">
          <label htmlFor="msg" className="font-semibold">
            Message
          </label>
        </div>
        <div>
          <textarea
            rows={7}
            className="textarea textarea-bordered w-full"
            placeholder="Write your feedback..."
          ></textarea>
        </div>
        {/* button */}
        <div className="mt-2">
          <button className="app-primary-button">Send Feedback</button>
        </div>
      </form>
    </>
  );
};

export default FeedBackForm;
