"use client"
import { error_msg } from "@/constants/shared/constant"
import { SweetAlertError, SweetAlertSuccess } from "@/utils/customSweetAlertFunction"
import axios from "axios"
import { useRef, useState } from "react"

const ForgotPasswordForm = () => {

    const [loading, setLoading] = useState(false);
    const [sent, setSent] = useState(false);

    //refs
    const emailRef = useRef(null)

    function send(e) {
        e.preventDefault();
        setLoading(true);

        const email = emailRef.current.value;

        if (!email || email.length < 1) {
            setLoading(false);
            return
        }

        axios.post("/api/forgot-password", { email }, { headers: { "Content-Type": "application/json" } }).then((response) => {
            if (response) {
                setLoading(false);
                if (response.status == 201) {
                    setSent(true);
                    SweetAlertSuccess("A password reset email has been sent to your email address. ")
                }
            }
        }).catch((e) => {
            if (e) {
                setLoading(false);
                if (e.response.status == 400) {
                    SweetAlertError(e.response.data.reason || error_msg)
                } else {
                    SweetAlertError(error_msg)
                }
            }
        })

    }

    return (
        <>
            {sent ? (<>
                <div className="text-white p-5 bg-green-500 rounded-lg">
                    A password reset email has been sent to your email address. Please check your inbox and follow the instructions to reset your password.
                    <br />-----<br />
                    If you do not see the email, please check your spam or junk folder.
                    <br />-----<br />
                    The reset link will expire in 5 minutes.
                </div>
            </>) : (<>
                <form onSubmit={send} className="form-control">
                    {/* email */}
                    <div className="mb-3">
                        <div>
                            <label htmlFor="email" className="font-bold text-md">
                                Your Email
                            </label>
                        </div>
                        <div className="input border-2 border-gray-100 flex items-center gap-2 mt-1">
                            <i className="fi fi-tr-envelopes flaticon-offset"></i>
                            <input
                                type="email"
                                name="email"
                                required
                                ref={emailRef}
                                className="grow"
                                placeholder="Enter Your Email"
                            />
                        </div>
                    </div>
                    {/* submit button */}
                    <div>
                        <button
                            className="w-full app-bg-primary duration-300 hover:app-bg-primary-dark btn btn-md text-white"
                            type="submit"
                            disabled={loading}
                        >
                            {loading ? (
                                <>
                                    <span className="loading loading-dots loading-xs"></span>
                                </>
                            ) : (
                                "Send"
                            )}
                        </button>
                    </div>
                </form></>)}
        </>
    )
}

export default ForgotPasswordForm