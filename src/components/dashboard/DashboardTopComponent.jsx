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
            
        </div>
      </div>
    </>
  );
};

export default DashboardTopComponent;
