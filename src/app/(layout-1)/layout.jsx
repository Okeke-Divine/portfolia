import ApplicationNavbar from "@/components/shared/ApplicationNavbar";
import ApplicationSidedar from "@/components/shared/ApplicationSidebar";
import React from "react";

const Layout1 = ({ children }) => {
  return (
    <>
      <div>
        <div>
          <ApplicationSidedar />
        </div>
        <div className="pl-0 md:pl-[250px] w-full">
          <div>
            <ApplicationNavbar />
          </div>
          <div>{children}</div>
        </div>
      </div>
    </>
  );
};

export default Layout1;
