import ApplicationNavbar from "@/components/shared/ApplicationNavbar";
import ApplicationSidedar from "@/components/shared/ApplicationSidebar";
import MinorFooter from "@/components/shared/MinorFooter";
import React from "react";

const Layout1 = ({ children }) => {
  return (
    <>
      <div>
        <div>
          <ApplicationSidedar />
        </div>
        <div className="pl-0 md:pl-[260px] w-full">
          <div>
            <ApplicationNavbar />
          </div>
          <div>
            <div className="flex min-h-[100vh] flex-col justify-between">
              <div className="p-5 md:p-6">{children}</div>
              <div>
                <MinorFooter />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout1;
