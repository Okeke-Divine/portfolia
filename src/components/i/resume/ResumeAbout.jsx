const ResumeAbout = ({ user }) => {
  return (
    <>
      <div className="app-resume-padding">
        <div className="divider divider-start">
          <h3 className="uppercase">About Me</h3>
          <div>
            <p className="whitespace-pre-line">{user?.userDetails?.about}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResumeAbout;
