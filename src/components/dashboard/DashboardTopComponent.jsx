import { getCurrentSession } from "@/utils/session";
import Link from "next/link";
import CopyContent from "../shared/CopyContent";

function NoContent() {
  return (
    <>
      -
    </>
  )
}

const DashboardTopComponent = async ({ userAnalytics }) => {
  const session = await getCurrentSession();

  // Calculate conversion percentage
  const portfolioViews = userAnalytics?.portfolioViewCount || 0;
  const portfolioClicks = userAnalytics?.portfolioClickCount || 0;
  const portfolioConversion = portfolioViews > 0 ? ((portfolioClicks / portfolioViews) * 100).toFixed(2) : 0;


  return (
    <>
      <div>
        <div>
          <h1 className="flex items-center gap-2">
            <i className="fi fi-tr-house-chimney titleIcon"></i> Welcome,{" "}
            <span className="capitalize">{session.user.name}</span>
          </h1>
        </div>
        {/* portfolio analytics */}
        <div className="divider"></div>
        {/* welcome */}
        <div className="text-black bg-green-100 p-5 rounded-md">
          <span className="text-2xl font-bold">Welcome to Portfoliia!</span><br />
          <span className="text-md">
            You’re just a few clicks away from creating a stunning portfolio and resume.    </span><br />
          <span className="text-md">
            All you need to do is enter your information, and your portfolio and resume will be generated with a live link.
          </span>
          <div className="divider"></div>
          <div className="flex items-center gap-2">
            <Link className="btn app-primary-button w-fit" href="/info">Get Started</Link>
            <Link className="btn btn-neutrual" href="https://www.youtube.com/watch?v=mWDAljdhhKk" target="_blank">Watch A Demo</Link>
          </div>
        </div>
        {/* end welcome */}
        <div className="divider"></div>
        <div>
          <p className="app-text-light">Analytics (Resume / Portfolio)</p>
          <h3>Portfolio</h3>
          <div>
            <div className="join stats-vertical lg:stats-horizontal w-full stats shadow-md duration-100 hover:shadow-lg">
              <div className="join-item stat">
                <div className="stat-figure">
                  <i className="fi fi-tr-overview text-4xl"></i>
                </div>
                <div className="stat-title">Page Views</div>
                <div className="stat-value font-semibold">
                  {(userAnalytics?.portfolioViewCount && userAnalytics?.portfolioViewCount != 0) ? userAnalytics?.portfolioViewCount : <NoContent />}
                </div>
                {/* <div className="stat-desc app-text-primary">
                  0% more than last month
                </div> */}
              </div>
              <div className="join-item stat">
                <div className="stat-figure">
                  <i className="fi fi-tr-bullseye-pointer text-4xl"></i>
                </div>
                <div className="stat-title">Page Clicks</div>
                <div className="stat-value font-semibold">
                  {(userAnalytics?.portfolioClickCount && userAnalytics?.portfolioClickCount != 0) ? userAnalytics?.portfolioClickCount : <NoContent />}
                </div>
              </div>
              <div className="join-item stat">
                <div className="stat-figure">
                  <i className="fi fi-tr-rotate-reverse text-4xl"></i>
                </div>
                <div className="stat-title">Coversion</div>
                <div className="stat-value font-semibold">{portfolioConversion}%</div>
              </div>
              {/* <div className="join-item stat">
                <div className="stat-figure">
                  <i className="fi fi-tr-diamond-turn-right text-4xl"></i>
                </div>
                <div className="stat-title">Bounce Rate</div>
                <div className="stat-value font-semibold">0%</div>
                <div className="stat-desc">0% more than last month</div>
                <div className="stat-desc mt-2">
                </div>
              </div> */}
            </div>
          </div>
        </div>
        {/* resume analytics */}
        <div className="divider"></div>
        <div>
          <h3>Resume</h3>
          <div>
            <div className="join stats-vertical lg:stats-horizontal w-full stats shadow-md duration-100 hover:shadow-lg">
              <div className="join-item stat">
                <div className="stat-figure">
                  <i className="fi fi-tr-overview text-4xl"></i>
                </div>
                <div className="stat-title">Views</div>
                <div className="stat-value font-semibold">
                  {(userAnalytics?.resumeViewCount && userAnalytics?.resumeViewCount != 0) ? userAnalytics?.resumeViewCount : <NoContent />}
                </div>
              </div>
              <div className="join-item stat">
                <div className="stat-figure">
                  <i className="fi fi-tr-bullseye-pointer text-4xl"></i>
                </div>
                <div className="stat-title">Clicks</div>
                <div className="stat-value font-semibold">
                  {(userAnalytics?.resumeClickCount && userAnalytics?.resumeClickCount != 0) ? userAnalytics?.resumeClickCount : <NoContent />}
                </div>
              </div>
              <div className="join-item stat">
                <div className="stat-figure">
                  <i className="fi fi-tr-cloud-download-alt text-4xl"></i>
                </div>
                <div className="stat-title">Downloads</div>
                <div className="stat-value font-semibold">
                  {(userAnalytics?.resumeDownloadCount && userAnalytics?.resumeDownloadCount != 0) ? userAnalytics?.resumeDownloadCount : <NoContent />}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* copy links */}
        <div className="divider"></div>
        <div>
          <h3>Live Links</h3>
          <div className="mt-2">
            {/* portfolio link */}
            <div className="mb-2">
              <label className="font-bold text-md">
                Your Portfolio Link:
              </label>
              <CopyContent url="lol" />
            </div>
            {/* resume link */}
            <div className="mb-2">
              <label className="font-bold text-md">
                Your Portfolio Link:
              </label>
              <CopyContent url="lol" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardTopComponent;
