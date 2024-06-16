import ResumeSocialLink from "./ResumeSocialLink";

const ResumeAbout = ({ user }) => {
  return (
    <>
      <div className="app-resume-padding">
        <div className="divider divider-start">
          <h3 className="uppercase">About Me</h3>
        </div>
        <div className="">
          <p className="whitespace-pre-line">{user?.userDetails?.about}</p>
        </div>
      </div>
      {/* social links */}
      <ResumeSocialLink userId={user.id} user={user} />
    </>
  );
};

export default ResumeAbout;
