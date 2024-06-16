// import { twitterAccUrl } from "@/constants/shared/constant";
import config from "@/data/config.json";
import Link from "next/link";

const MinorFooter = () => {
  return (
    <>
      <div className="footer p-5 md:p-10 bg-base-300">
        <div className="w-full">
          <div className="w-full text-center text-[18px] font-semibold">
            <b>{config.app_name}</b> - a product of{" "}
            <Link href={"#"} className="app-link-primary font-bold">
              Skiyen
            </Link>
          </div>
          {/* <div className="w-full text-center  text-[18px] font-semibold">
            Designed, Built and Marketed by{" "}
            <Link
              href={twitterAccUrl}
              target="_blank"
              className="app-link-primary font-bold"
            >
              Dev Divine
            </Link>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default MinorFooter;
