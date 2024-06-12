import { getCurrentSession } from "@/utils/session";

const DashboardTopComponent = async () => {
  const session = await getCurrentSession();

  return (
    <>
      <div>
        <div>
          <h1 className="flex items-center gap-2">
            <i className="fi fi-tr-house-chimney titleIcon"></i> Welcome,{" "}
            <span className="capitalize">{session.user.name}</span>
          </h1>
          <p>No code Portfolio & Resume builder.</p>
        </div>
        <div className="divider"></div>
        <div>
          <h3>Portfolio</h3>
          <div>
            <div className="join stats-vertical lg:stats-horizontal w-full stats shadow-md duration-100 hover:shadow-lg">
              <div className="join-item stat">
                <div className="stat-figure">53.5k</div>
                <div className="stat-title">Page Views</div>
                <div className="stat-value">0k</div>
                <div className="stat-desc">0% more than last month</div>
                <div className="stat-desc mt-2"><span className="badge app-bg-primary border-none text-white">coming soon</span></div>
              </div>
              <div className="join-item stat">
                <div className="stat-figure">53.5k</div>
                <div className="stat-title">Page Clicks</div>
                <div className="stat-value">0k</div>
                <div className="stat-desc">0% more than last month</div>
                <div className="stat-desc mt-2"><span className="badge app-bg-primary border-none text-white">coming soon</span></div>
              </div>
              <div className="join-item stat">
                <div className="stat-figure">53.5k</div>
                <div className="stat-title">Coversion</div>
                <div className="stat-value">0%</div>
                <div className="stat-desc">0% more than last month</div>
                <div className="stat-desc mt-2"><span className="badge app-bg-primary border-none text-white">coming soon</span></div>
              </div>
              <div className="join-item stat">
                <div className="stat-figure">53.5k</div>
                <div className="stat-title">Bounce Rate</div>
                <div className="stat-value">0%</div>
                <div className="stat-desc">0% more than last month</div>
                <div className="stat-desc mt-2"><span className="badge app-bg-primary border-none text-white">coming soon</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardTopComponent;
