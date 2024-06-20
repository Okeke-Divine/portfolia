"use client"
import { useRef, useState } from "react"
import axios from "axios"
import {
    SweetAlertError,
    SweetAlertSuccess,
} from "@/utils/customSweetAlertFunction";
import { generateYearsArray } from "@/utils/main";


const AddCertificate = () => {

    const years = generateYearsArray();
    const channel = new BroadcastChannel("user-certificates-channel")
    const [loading, setLoading] = useState(false)


    function _addCertificate(e) {
        e.preventDefault()
        setLoading(true);
    }

    return (
        <>
            <form onSubmit={_addCertificate} className="form-control">
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
                            "Add"
                        )}
                    </button>
                </div>
            </form>
        </>
    )
}

export default AddCertificate