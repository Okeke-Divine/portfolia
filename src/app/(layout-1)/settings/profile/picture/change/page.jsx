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
            <i className="fi fi-ts-web-design titleIcon"></i> Info
          </h1>
          <p className="app-text-light">Write once, use anywhere</p>
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
