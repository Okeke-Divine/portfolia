import config from "@/data/config.json";
import { _ucfirst } from "@/utils/main";

const PortfolioFooter = () => {
  return (
    <>
      <div className="footer p-5 bg-base-300">
        <div className="w-full">
          <div className="w-full font-bold text-xl text-center">Divine</div>
          <div className="w-full font-semibold text-center">Dev</div>
          <div className="w-full font-semibold text-center">
            &copy; 2024 - {_ucfirst(config.app_name)}
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioFooter;
