import DashboardTopSkeleton from "@/components/skeleton/dashboard/DashboardTopSkeleton";
import { Suspense } from "react";
import DashboardTopComponent from "@/components/dashboard/DashboardTopComponent";
import prisma from "@/app/db";
import { getUserId } from "@/utils/session";

export const metadata = {
  title: "Dashboard",
};

export const dynamic = "force-dynamic";

const Dashboard = async () => {

  const userId = await getUserId()

  const userAnalytics = await prisma.UserAnalytics.findFirst({where: {
    userId
  }})

  return (
    <>
      <Suspense fallback={<DashboardTopSkeleton />}>
        <DashboardTopComponent />
      </Suspense>
    </>
  );
};

export default Dashboard;
