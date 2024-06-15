import InfoSideNav from "@/components/info/InfoSideNav";

export default function InfoLayout({ children }) {
  return (
    <>
      <div>
        <div>
          <h1 className="flex items-center gap-2">
            <i className="fi fi-ts-web-design titleIcon"></i> Info
          </h1>
          <p className="app-text-light">Write once, use anywhere</p>
        </div>
        <div className="divider"></div>
        <div>
          <div className="flex flex-col md:flex-row gap-2">
            <div className="w-[250px]">
              <div className="join join-horizontal md:join-vertical border-2">
                <InfoSideNav />
              </div>
            </div>
            {/* <div className="divider divider-vertical"></div> */}
            <div className="w-full">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
}
