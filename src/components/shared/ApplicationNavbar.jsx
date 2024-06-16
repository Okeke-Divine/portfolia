import config from "@/data/config.json";
import Link from "next/link";
import UserProfilePictureComponent from "./UserProfilePictureComponent";

export default function ApplicationNavbar() {
  return (
    <>
      <div className="navbar bg-base-200 px-5 md:px-10">
        <div className="navbar-start">
          <img
            className="w-10"
            src="/images/logo/logo.png"
            alt={config.app_name + "'s logo"}
          />
        </div>
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
