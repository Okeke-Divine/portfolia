import DashboardTopSkeleton from "@/components/skeleton/dashboard/DashboardTopSkeleton";
import { Suspense } from "react";
import DashboardTopComponent from "@/components/dashboard/DashboardTopComponent";
import prisma from "@/app/db";
import { getCurrentSession, getUserId } from "@/utils/session";

export const metadata = {
  title: "Dashboard",
};

export const dynamic = "force-dynamic";

const Dashboard = async () => {

  const userId = await getUserId()

  const userAnalytics = await prisma.UserAnalytics.findFirst({where: {
    userId
  }})

  const session = await getCurrentSession();


  return (
    <>
      <Suspense fallback={<DashboardTopSkeleton />}>
        <DashboardTopComponent userAnalytics={userAnalytics} username={session.user.username} />
      </Suspense>
    </>
  );
};

export default Dashboard;
