import { defaultImgUrl } from "@/constants/shared/constant";
import config from "@/data/config.json";
import Link from "next/link";
import UserProfilePictureComponent from "./UserProfilePictureComponent";



export default function ApplicationNavbar() {
  return (
    <>
      <div className="navbar bg-base-200 px-5 md:px-10">
        <div className="navbar-start"></div>
        <div className="navbar-center font-bold uppercase">
          {config.app_name}
        </div>
        <div className="navbar-end">
          <Link href="/settings/profile/picture/change">
            <div className="avatar cursor-pointer">
              <div className="w-10 rounded-full ring ring-green-300">
                <UserProfilePictureComponent />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
