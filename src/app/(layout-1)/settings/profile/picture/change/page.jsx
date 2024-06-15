import ChangeProfilePictureForm from "@/components/settings/profile/picture/ChangeProfilePictureForm";

export const metadata = {
  title: "Change Profile Picture | Info",
};

const SettingsProfilePicture = () => {
  return (
    <>
      <div>
        <div>
          <h1 className="flex items-center gap-2">
            <i class="fi fi-rr-portrait titleIcon"></i>Profile Picture
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
