"use client";

const FeedBackForm = () => {
  return (
    <>
      <form className="form-control">
        <h3 className="font-bold text-xl">
          We read them all! How can we improve your experience?
        </h3>
        {/* rating */}
        <div className="my-2">
          <div className="rating rating-lg">
            <input type="radio" name="rating-9" className="rating-hidden" />
            <input type="radio" name="rating-9" className="mask mask-star-2" />
            <input type="radio" name="rating-9" className="mask mask-star-2" />
            <input type="radio" name="rating-9" className="mask mask-star-2" />
            <input
              type="radio"
              name="rating-9"
              className="mask mask-star-2"
              defaultChecked={true}
            />
            <input type="radio" name="rating-9" className="mask mask-star-2" />
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
