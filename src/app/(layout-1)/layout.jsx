import ApplicationSidedar from "@/components/shared/ApplicationSidebar";
import React from "react";

const Layout1 = ({ children }) => {
  return (
    <>
      <div>
        <div>
          <ApplicationSidedar />
        </div>
        <div className="pl-[250px] bg-red-200 w-full">{children}</div>
      </div>
    </>
  );
};

export default Layout1;
