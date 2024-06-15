import AddSocialInfo from "@/components/info/social/AddSocialInfo";
import ViewSocialInfo from "@/components/info/social/ViewSocialInfo";

export const metadata = {
  title: "Social | Info",
};

const SocialInfo = () => {
  return (
    <>
      <AddSocialInfo />
      <div className="divider"></div>
      <ViewSocialInfo />
    </>
  );
};

export default SocialInfo;
