import Layout1Loader from "../loading";

export const metadata = {
  title: "Dashboard",
};

export const dynamic = "force-dynamic";

const Dashboard = () => {
  return (
    <>
      <div>
        <div>
          <h1 className="flex items-center gap-2">
            <i className="fi fi-tr-house-chimney titleIcon"></i> Welcome,
            Divine
          </h1>
          <p>No code Portfolio & Resume builder.</p>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
