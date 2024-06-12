import DashboardTopSkeleton from "@/components/skeleton/dashboard/DashboardTopSkeleton";
import Layout1Loader from "../loading";
import { Suspense } from "react";
import DashboardTopComponent from "@/components/dashboard/DashboardTopComponent";

export const metadata = {
  title: "Dashboard",
};

export const dynamic = "force-dynamic";

const Dashboard = async () => {
  return (
    <>
      <Suspense fallback={<DashboardTopSkeleton />}>
        <DashboardTopSkeleton />
        <DashboardTopComponent />
      </Suspense>
    </>
  );
};

export default Dashboard;
