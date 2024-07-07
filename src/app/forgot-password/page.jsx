import config from "@/data/config.json";
export const metadata = {
    title: "Forgot Password"
}

const ForgotPassword = () => {
    return (
        <>

            <div className="bg-base-200 flex justify-center items-center min-h-[100vh]">
                <div className="w-[80%] md:w-[350px] bg-white p-5 md:p-10 rounded-lg shadow-sm">
                    <div className="flex justify-center">
                        <img
                            className="w-24 mb-2 rounded-full shadow-lg"
                            src="/images/logo/logo.png"
                            alt={config.app_name + "'s logo"}
                        />
                    </div>
                    <h1>Reset Password!</h1>
                </div>
            </div>
        </>
    )
}

export default ForgotPassword