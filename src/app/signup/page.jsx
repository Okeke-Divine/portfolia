import Link from "next/link";
import config from "@/data/config.json";

export const metadata = {
  title: "Create an Account",
};

export default function SignUp() {
  return (
    <>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div>
            <div className="px-5 py-10 md:px-[50px] md:py-[50px]">
              <h1>
                Hi, Welcome to{" "}
                <Link href="/" className="app-text-primary">
                  {config.app_name}
                </Link>
              </h1>
              <div className="mt-5">
                <form>
                  {/* name */}
                  <div className="mb-3">
                    <div>
                      <label htmlFor="name" className="font-bold text-md">
                        Your Name
                      </label>
                    </div>
                    <div className="input border-2 border-gray-100 flex items-center gap-2 mt-1">
                      <i className="fi fi-ts-circle-user font-bold text-md flaticon-offset"></i>
                      <input
                        type="text"
                        name="name"
                        className="grow"
                        placeholder="Enter Your Name"
                      />
                    </div>
                  </div>
                  {/* email */}
                  <div className="mb-3">
                    <div>
                      <label htmlFor="email" className="font-bold text-md">
                        Your Email
                      </label>
                    </div>
                    <div className="input border-2 border-gray-100 flex items-center gap-2 mt-1">
                      <i className="fi fi-ts-circle-user font-bold text-md flaticon-offset"></i>
                      <input
                        type="email"
                        name="email"
                        className="grow"
                        placeholder="Enter Your Email"
                      />
                    </div>
                  </div>
                  {/* username */}
                  <div className="mb-3">
                    <div>
                      <label htmlFor="username" className="font-bold text-md">
                        Your Username
                      </label>
                    </div>
                    <div className="input border-2 border-gray-100 flex items-center gap-2 mt-1">
                      <i className="fi fi-ts-circle-user font-bold text-md flaticon-offset"></i>
                      <input
                        type="text"
                        name="username"
                        className="grow"
                        placeholder="Enter Your Username"
                      />
                    </div>
                  </div>
                  {/* password */}
                  <div className="mb-3">
                    <div>
                      <label htmlFor="password" className="font-bold text-md">
                        Your Password
                      </label>
                    </div>
                    <div className="input border-2 border-gray-100 flex items-center gap-2 mt-1">
                      <i className="fi fi-ts-circle-user font-bold text-md flaticon-offset"></i>
                      <input
                        type="password"
                        name="password"
                        className="grow"
                        placeholder="Enter Your password"
                      />
                    </div>
                  </div>
                  {/* submit button */}
                  <div>
                    <button
                      className="w-full app-bg-primary btn btn-md text-white"
                      type="submit"
                    >
                      Get Started
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="bg-gray-900 min-h-[100vh]"></div>
        </div>
      </div>
    </>
  );
}
