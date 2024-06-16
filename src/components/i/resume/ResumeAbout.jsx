const ResumeAbout = ({ user }) => {
  return (
    <>
      <div className="app-resume-padding">
        <div className="divider divider-start">
          <h3 className="uppercase">About Me</h3>
        </div>
        <div className="flex gap-2 md:gap-5">
          {user.profilePicture_url != "" ? (
            <>
              <div className="w-fit">
                <div className="avatar">
                  <div className="mask mask-squircle bg-green-200 bg-opacity-20 w-52 lg:w-96">
                    <img
                      src={
                        user?.profilePicture_url != ""
                          ? user.profilePicture_url
                          : defaultImgUrl
                      }
                      alt="User Profile Picture"
                    />
                  </div>
                </div>
              </div>
            </>
          ) : (
            ""
          )}
          <div className="grow">
            <p className="whitespace-pre-line">{user?.userDetails?.about}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResumeAbout;
