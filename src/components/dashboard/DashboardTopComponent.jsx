import { getCurrentSession } from "@/utils/session";

const DashboardTopComponent = async ({ userAnalytics }) => {
  const session = await getCurrentSession();

  return (
    <>
      <div>
        <div>
          <h1 className="flex items-center gap-2">
            <i className="fi fi-tr-house-chimney titleIcon"></i> Welcome,{" "}
            <span className="capitalize">{session.user.name}</span>
          </h1>
          <p className="app-text-light">Summary of last 30 days</p>
        </div>
        {/* portfolio analytics */}
        <div className="divider"></div>
        <div>
          <h3>Portfolio</h3>
          <div>
            <div className="join stats-vertical lg:stats-horizontal w-full stats shadow-md duration-100 hover:shadow-lg">
              <div className="join-item stat">
                <div className="stat-figure">
                  <i className="fi fi-tr-overview text-4xl"></i>
                </div>
                <div className="stat-title">Page Views</div>
                <div className="stat-value font-semibold">{userAnalytics?.portfolioViewCount || 0}</div>
                {/* <div className="stat-desc app-text-primary">
                  0% more than last month
                </div> */}
              </div>
              <div className="join-item stat">
                <div className="stat-figure">
                  <i className="fi fi-tr-bullseye-pointer text-4xl"></i>
                </div>
                <div className="stat-title">Page Clicks</div>
                <div className="stat-value font-semibold">0</div>
              </div>
              <div className="join-item stat">
                <div className="stat-figure">
                  <i className="fi fi-tr-rotate-reverse text-4xl"></i>
                </div>
                <div className="stat-title">Coversion</div>
                <div className="stat-value font-semibold">0%</div>
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
                <div className="stat-value font-semibold">0</div>
              </div>
              <div className="join-item stat">
                <div className="stat-figure">
                  <i className="fi fi-tr-bullseye-pointer text-4xl"></i>
                </div>
                <div className="stat-title">Clicks</div>
                <div className="stat-value font-semibold">0</div>
              </div>
              <div className="join-item stat">
                <div className="stat-figure">
                  <i className="fi fi-tr-cloud-download-alt text-4xl"></i>
                </div>
                <div className="stat-title">Downloads</div>
                <div className="stat-value font-semibold">0</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardTopComponent;
