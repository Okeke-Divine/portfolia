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

    //refs
    const nameRef = useRef(null)
    const issuerRef = useRef(null)
    const issueMonth = useRef(null)
    const issueYear = useRef(null)
    //end refs

    function _addCertificate(e) {
        e.preventDefault()
        setLoading(true);
    }

    return (
        <>
            <form onSubmit={_addCertificate} className="form-control">
                {/* name */}
                <div className="mb-3">
                    <div>
                        <label className="font-bold text-md">Certificate Name</label>
                    </div>
                    <div className="input input-bordered flex items-center gap-2 mt-1">
                        <input
                            type="text"
                            className="grow"
                            placeholder="Certificate name.."
                            required
                            ref={nameRef}
                        />
                    </div>
                </div>
                {/* issue month */}
                <div className="mb-2">
                    <select ref={issueMonth} required className="select input-bordered w-full">
                        <option disabled selected value="">Select month</option>

                    </select>
                </div>
                {/* issue year */}
                <div className="mb-2">
                    <select ref={issueYear} required className="select input-bordered w-full">
                        <option disabled selected value="">Select year</option>
                        {years.map((year, index) => (
                            <option key={index} value={year}>{year}</option>
                        ))}
                    </select>
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
                            "Add"
                        )}
                    </button>
                </div>
            </form>
        </>
    )
}

export default AddCertificate