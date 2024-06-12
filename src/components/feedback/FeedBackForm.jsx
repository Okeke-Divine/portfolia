"use client"

const FeedBackForm = () => {
  return (
    <>
    <form className="form-control">
        <h3>We read them all! How can we improve your experience?</h3>
        {/* message */}
        <div>
            <label htmlFor="msg">Message</label>
        </div>
        <div>
            <textarea cols="30" rows="10" className="textarea" placeholder="Write your feedback..."></textarea>
        </div>
    </form>
    </>
    )
}

export default FeedBackForm