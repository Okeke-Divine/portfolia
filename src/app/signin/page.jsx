import SignInForm from "@/components/signin/SignInForm";
import Link from "next/link";

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
                  <h1>
                    Welcome Back!
                  </h1>
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
              <div className="bg-gray-900 min-h-[100vh]"></div>
            </div>
          </div>
        </>
      );
}

export default SignIn