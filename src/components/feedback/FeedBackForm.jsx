"use client";
import { useState, useRef } from "react";
import Swal from "sweetalert2";

const FeedBackForm = () => {
  const messageRef = useRef(null);
  const [rating, setRating] = useState(4);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // sendFeedback
  function sendFeedback(e) {
    e.preventDefault();
    setLoading(true);
    const message = messageRef.current.value;

    if (!message || message.length < 5) {
      Swal.fire({
        title: "Warning",
        icon: "warning",
        text: "Message has to be at least 5 characters",
      });
      setLoading(false);
      return;
    }
  }

  function _setRating(value) {
    setRating(parseInt(rating));
  }

  return (
    <>
      {success ? (
        <>
          <div>
            <div className="alert alert-success text-white">Thanks for your feedback.</div>
          </div>
        </>
      ) : (
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
                  onClick={(self) => _setRating(self.target.value)}
                  disabled={loading}
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star"
                  value={2}
                  onClick={(self) => _setRating(self.target.value)}
                  disabled={loading}
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star"
                  value={3}
                  onClick={(self) => _setRating(self.target.value)}
                  disabled={loading}
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star"
                  defaultChecked={true}
                  value={4}
                  onClick={(self) => _setRating(self.target.value)}
                  disabled={loading}
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star"
                  value={5}
                  onClick={(self) => _setRating(self.target.value)}
                  disabled={loading}
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
                disabled={loading}
              ></textarea>
            </div>
            {/* button */}
            <div className="mt-2">
              <button
                type="submit"
                className="app-primary-button"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <div className="loading loading-dots loading-sm"></div>
                  </>
                ) : (
                  "Send Feedback"
                )}
              </button>
            </div>
          </form>
        </>
      )}
    </>
  );
};

export default FeedBackForm;
