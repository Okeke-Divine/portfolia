import SignInForm from "@/components/signin/SignInForm";
import Link from "next/link";
import config from "@/data/config.json";
import SitePreviewCarousel from "@/components/shared/SitePreviewCarousel";

export const metadata = {
  title: "Sign in",
};

const SignIn = () => {
  return (
    <>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="min-h-[100vh] flex items-center justify-center bg-gray-100">
            <div className="bg-white shadow-md hover:shadow-lg duration-100 px-5 py-10 md:px-[50px] md:py-[50px]  rounded-md">
              <div className="flex justify-center">
                <img
                  className="w-24 mb-2 rounded-full shadow-lg"
                  src="/images/logo/logo.png"
                  alt={config.app_name + "'s logo"}
                />
              </div>
              <h1>Welcome Back!</h1>
              <div className="mt-2">
                <SignInForm />
                <p className="my-2 text-center">
                  Don't have an account?{" "}
                  <Link
                    href="/signup"
                    className="app-text-primary duration-300 hover:app-text-primary-dark"
                  >
                    Sign Up
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="bg-green-400 min-h-[100vh] flex justify-center items-center">
            <SitePreviewCarousel />
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
