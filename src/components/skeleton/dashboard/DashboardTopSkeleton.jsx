import React from "react";

const DashboardTopSkeleton = () => {
  return (
    <>
      <div>
        <div>
          <div className="skeleton h-6 w-1/4 mb-2"></div>
          <div className="skeleton h-4 w-32"></div>
        </div>
        <div className="divider"></div>
        <div>
          <div className="skeleton h-4 w-32 mb-2"></div>
          <div className="skeleton h-32 w-full"></div>
        </div>
        <div className="divider"></div>
        <div>
          <div className="skeleton h-4 w-1/4 mb-2"></div>
          <div className="skeleton h-32 w-full"></div>
        </div>
      </div>
    </>
  );
};

export default DashboardTopSkeleton;
