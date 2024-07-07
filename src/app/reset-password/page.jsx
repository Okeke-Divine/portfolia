import Link from "next/link"
import config from "@/data/config.json";
import ResetPasswordForm from "@/components/reset-password/ResetPasswordForm"
import { verifyResetToken } from "@/utils/main";


export const metadata = {
    title: "Reset Password"
}

const ResetPassword = async ({ params, searchParams }) => {

    const token = searchParams?.token;

    const verifyToken = await verifyResetToken(token);
    console.log(verifyToken);

    if (verifyToken.valid == false) {
        return (
            <>
                <div className="bg-base-200 flex justify-center items-center min-h-[100vh]">
                    <div className="w-[80%] capitalize font-bold text-xl md:max-w-[400px] bg-white p-5 md:p-10 rounded-lg shadow-sm">
                        <div>
                            {verifyToken.message}
                        </div>
                        <Link
                            className="app-text-primary duration-300 hover:app-text-primary-dark"
                            href="/">Home</Link>
                    </div>
                </div>
            </>
        )
    }


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
                    <h1>Reset Password</h1>
                    <div className="mt-2">
                        {/* form */}
                        <ResetPasswordForm />
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

export default ResetPassword