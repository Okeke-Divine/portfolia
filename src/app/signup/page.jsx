import Link from "next/link";
import config from "@/data/config.json";
import SignUpForm from "@/components/signup/SignUpForm";
import SignUpFormSkeleton from "@/components/skeleton/SignUpFormSkeleton";
import { Suspense } from "react";

export const metadata = {
  title: "Create an Account",
};

export default function SignUp() {
  return (
    <>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="min-h-[100vh] flex items-center justify-center bg-gray-100">
            <div className="bg-white shadow-sm px-5 py-10 md:px-[50px] md:py-[50px]  rounded-md">
              <h1>
                Hi, Welcome to{" "}
                <Link href="/" className="app-text-primary">
                  {config.app_name}
                </Link>
              </h1>
              <div className="mt-5">
                <Suspense fallback={<SignUpFormSkeleton />}>
                  <SignUpForm />
                </Suspense>
                <p className="my-2">
                  Already have an account?{" "}
                  <Link
                    href="/signin"
                    className="app-text-primary duration-300 hover:app-text-primary-dark"
                  >
                    Sign In
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
