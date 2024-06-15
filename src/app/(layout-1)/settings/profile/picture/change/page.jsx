import ChangeProfilePictureForm from "@/components/settings/profile/picture/ChangeProfilePictureForm";

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
              <li>Settings </li>
              <li>Profile</li>
              <li>Picture</li>
            </ul>
          </div>
          <h1 className="flex items-center gap-2">
            <i className="fi fi-rr-portrait titleIcon"></i>Profile Picture
          </h1>
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
