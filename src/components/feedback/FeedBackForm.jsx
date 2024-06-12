"use client"

const FeedBackForm = () => {
  return (
    <>
    <form className="form-control">
        <h3 className="font-bold text-xl">We read them all! How can we improve your experience?</h3>
        {/* message */}
        <div className="mb-2">
            <label htmlFor="msg" className="font-semibold">Message</label>
        </div>
        <div>
            <textarea rows={5} className="textarea textarea-bordered w-full" placeholder="Write your feedback..."></textarea>
        </div>
    </form>
    </>
    )
}

export default FeedBackForm