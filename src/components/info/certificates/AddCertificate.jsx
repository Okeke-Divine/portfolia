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
                            placeholder="Certificate name"
                            required
                            ref={nameRef}
                        />
                    </div>
                </div>
                {/* issuere */}
                <div className="mb-3">
                    <div>
                        <label className="font-bold text-md">Issuer</label>
                    </div>
                    <div className="input input-bordered flex items-center gap-2 mt-1">
                        <input
                            type="text"
                            className="grow"
                            placeholder="Issuer"
                            required
                            ref={issuerRef}
                        />
                    </div>
                </div>
                {/* issue month */}
                <div className="mb-2">
                    <select ref={issueMonth} required className="select input-bordered w-full">
                        <option disabled selected value="">Select month</option>
                        <option value="January">January</option>
                        <option value="February">February</option>
                        <option value="March">March</option>
                        <option value="April">April</option>
                        <option value="May">May</option>
                        <option value="June">June</option>
                        <option value="July">July</option>
                        <option value="August">August</option>
                        <option value="September">September</option>
                        <option value="October">October</option>
                        <option value="November">November</option>
                        <option value="December">December</option>
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