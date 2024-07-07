import config from "@/data/config.json";
export const metadata = {
    title: "Forgot Password"
}

const ForgotPassword = () => {
    return (
        <>

            <div className="bg-base-200 flex justify-center items-center min-h-[100vh]">
                <div className="w-[80%] md:max-w-[400px] bg-white p-5 md:p-10 rounded-lg shadow-sm">
                    <div className="flex justify-center">
                        <img
                            className="w-24 mb-2 rounded-full shadow-lg"
                            src="/images/logo/logo.png"
                            alt={config.app_name + "'s logo"}
                        />
                    </div>
                    <h1>Forgot Password!</h1>
                    <div className="mt-2">
                        {/* form */}
                        <p className="my-2 text-center">
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
        </>
    )
}

export default ForgotPassword