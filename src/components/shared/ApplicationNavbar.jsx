import { defaultImgUrl } from "@/constants/shared/constant";
import config from "@/data/config.json"

export default function ApplicationNavbar() {
  return (
    <>
      <div className="navbar bg-base-200">
        <div className="navbar-start">
        </div>
        <div className="navbar-center font-bold uppercase">
            {config.app_name}
        </div>
        <div className="navbar-end">
            <div className="avatar">
                <div className="w-10 rounded-full ring ring-green-300">
                    <img src={defaultImgUrl} alt="User Profile Picture" />
                </div>
            </div>
        </div>
      </div>
    </>
  );
}
