import BackButton from "@/components/shared/BackButton";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";

export const metadata = {
  title: "404 Not Found",
};
const NotFound = () => {
  return (
    <>
      <Navbar />
      <div className="w-full min-h-[50vh] flex justify-center items-center">
        <div>
          <div className="font-bold text-4xl text-center">
            We've lost this page
          </div>
          <p className="text-center">
            Sorry, the page you're looking for doesn't exist or has been moved.
          </p>
          <div className="flex justify-center mt-2">
            <BackButton />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NotFound;
