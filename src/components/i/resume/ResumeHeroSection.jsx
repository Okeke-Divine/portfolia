import ResumeSocialLink from "./ResumeSocialLink";

const ResumeHeroSection = ({ user }) => {
  return (
    <>
      <div className="app-resume-padding">
        <div className="block md:flex gap-2 md:gap-5 items-center">
          {user.profilePicture_url != "" ? (
            <>
              <div className="w-fit mb-2 md:mb-0">
                <div className="avatar">
                  <div className="mask mask-squircle bg-green-200 bg-opacity-20 w-20">
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
            <div>
              <h1 className="text-5xl">{user?.userDetails?.fullname}.</h1>
            </div>
            <div className="flex gap-2 items-center">
              <div className="w-fit text-xl">
                {user?.userDetails?.profession}
              </div>
              <div className="grow">
                <div className="divider"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* social links */}
      <ResumeSocialLink userId={user.id} user={user} />
    </>
  );
};

export default ResumeHeroSection;
