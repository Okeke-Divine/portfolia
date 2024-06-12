"use client";
import { useState, useRef } from "react";

const FeedBackForm = () => {
  const messageRef = useRef(null);
  const ratingRef = useRef(null);

  // sendFeedback
  function sendFeedback() {}

  return (
    <>
      <form className="form-control" onSubmit={sendFeedback}>
        <h3 className="font-bold text-xl">
          We read them all! How can we improve your experience?
        </h3>
        {/* rating */}
        <div className="mt-3">
          <div className="rating">
            <input
              type="radio"
              name="rating-1"
              className="mask mask-star"
              ref={ratingRef}
            />
            <input
              type="radio"
              name="rating-1"
              className="mask mask-star"
              ref={ratingRef}
            />
            <input
              type="radio"
              name="rating-1"
              className="mask mask-star"
              ref={ratingRef}
            />
            <input
              type="radio"
              name="rating-1"
              className="mask mask-star"
              ref={ratingRef}
              defaultChecked={true}
            />
            <input
              type="radio"
              name="rating-1"
              className="mask mask-star"
              ref={ratingRef}
            />
          </div>
        </div>
        {/* message */}
        <div className="my-2">
          <label htmlFor="msg" className="font-semibold">
            Message
          </label>
        </div>
        <div>
          <textarea
            rows={7}
            ref={messageRef}
            className="textarea textarea-bordered w-full"
            placeholder="Write your feedback..."
            required
          ></textarea>
        </div>
        {/* button */}
        <div className="mt-2">
          <button type="submit" className="app-primary-button">
            Send Feedback
          </button>
        </div>
      </form>
    </>
  );
};

export default FeedBackForm;
