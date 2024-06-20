import AddLanguage from "@/components/info/language/AddLanguage";
import ViewLanguages from "@/components/info/language/ViewLanguages";

export const metadata = {
  title: "Language | Info",
};

const LanguageInfo = () => {
  return (
    <>
      <AddLanguage />
      <div className="divider"></div>
      <ViewLanguages />
    </>
  )
}

export default LanguageInfo