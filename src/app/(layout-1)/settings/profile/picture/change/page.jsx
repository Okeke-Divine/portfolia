import ChangeProfilePictureForm from "@/components/settings/profile/picture/ChangeProfilePictureForm";
import Link from "next/link";

export const metadata = {
  title: "Change Profile Picture | Info",
};

const SettingsProfilePicture = () => {
  return (
    <>
      <div>
        <div>
          <div className="text-sm breadcrumbs">
            <ul>
              <li>
                <Link href="/settings">Settings</Link>
              </li>
              <li>Profile</li>
              <li>Picture</li>
            </ul>
          </div>
          <h1 className="flex items-center gap-2">
            <i className="fi fi-rr-portrait titleIcon"></i>Profile Picture
          </h1>
          <p>
            <strong>Recommended:</strong> Profile picture should be square
            dimensions.
            <br />
            Profile picture must not be more than 3 MB.
          </p>
        </div>
        <div className="divider"></div>
        <div>
          <ChangeProfilePictureForm />
        </div>
      </div>
    </>
  );
};

export default SettingsProfilePicture;
