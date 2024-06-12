"use client";
import { useState, useRef } from "react";

const FeedBackForm = () => {
  const messageRef = useRef(null);
  const [rating, setRating] = useState(4);

  // sendFeedback
  function sendFeedback(e) {
    e.preventDefault();

    console.log(rating);
    console.log(messageRef.current);
  }

  function _setRating(value) {
    console.log(value);
  }

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
              value={1}
              onClick={(self) => _setRating(self)}
            />
            <input
              type="radio"
              name="rating-1"
              className="mask mask-star"
              value={2}
            />
            <input
              type="radio"
              name="rating-1"
              className="mask mask-star"
              value={3}
            />
            <input
              type="radio"
              name="rating-1"
              className="mask mask-star"
              defaultChecked={true}
              value={4}
            />
            <input
              type="radio"
              name="rating-1"
              className="mask mask-star"
              value={5}
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
