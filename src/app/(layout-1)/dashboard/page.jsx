import DashboardTopSkeleton from "@/components/skeleton/dashboard/DashboardTopSkeleton";
import Layout1Loader from "../loading";
import { Suspense } from "react";

export const metadata = {
  title: "Dashboard",
};

export const dynamic = "force-dynamic";

const Dashboard = async () => {
  return (
    <>
    <Suspense fallback={<DashboardTopSkeleton />}>
    <div>
        <div>
          <DashboardTopSkeleton />
          <h1 className="flex items-center gap-2">
            <i className="fi fi-tr-house-chimney titleIcon"></i> Welcome,
            Divine
          </h1>
          <p>No code Portfolio & Resume builder.</p>
        </div>
      </div>
    </Suspense>
    </>
  );
};

export default Dashboard;
