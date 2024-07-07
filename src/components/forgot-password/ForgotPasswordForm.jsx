"use client"
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
    }

    return (
        <>
            <form onSubmit={send} className="form-control">
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
            </form>
        </>
    )
}

export default ForgotPasswordForm