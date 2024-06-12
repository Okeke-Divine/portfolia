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
            <div className="join grid grid-cols-1 md:grid-cols-4 stats shadow">
              <div className="join-item stat">
                <div className="stat-figure">53.5k</div>
                <div className="stat-title">Page Views</div>
                <div className="stat-value">53.5k</div>
                <div className="stat-desc">0% more than last month</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardTopComponent;
