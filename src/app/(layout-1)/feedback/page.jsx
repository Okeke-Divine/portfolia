import FeedBackForm from "@/components/feedback/FeedBackForm";

export const metadata = {
  title: "Send Feedback",
};

const FeedBack = () => {
  return (
    <>
      <div>
        <div>
          <h1 className="flex items-center gap-2">
            <i className="fi fi-tr-comment-alt-middle titleIcon"></i>Send
            Feedback
          </h1>
          <p className="app-text-light">Shape your experience</p>
        </div>
        {/* divider */}
        <div className="divider"></div>
        {/* feedback form */}
        <div>
          <FeedBackForm />
        </div>
      </div>
    </>
  );
};

export default FeedBack;
