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
    const issueMonthRef = useRef(null)
    const issueYearRef = useRef(null)
    //end refs

    function _addCertificate(e) {
        e.preventDefault()
        setLoading(true);

        //get the values
        const name = nameRef.current.value;
        const issuer = issurerRef.current.value;
        const issueMonth = issueMonthRef.current.value
        const issuerYear = issueYearRef.current.value

        if (!name || !issuer || !issueMonth || !issuerYear) {
            SweetAlertError("All fields are required.");
            setLoading(false);
            return;
        }

        axios
            .post("/api/info/certificates", { name, issuer, issueMonth, issuerYear }, { headers: { "Content-Type": "application/json" } })
            .then((response) => {
                if (response) {
                    SweetAlertSuccess("Your certificate has been successfully added.");
                    setLoading(false);
                    nameRef.current.value = "";
                    issuerRef.current.value = "";
                    issueMonthRef.current.value = "";
                    issueYearRef.current.value = "";
                    //broadcast the project info
                    const broadcast_message = {
                        type: "NEW_CERTIFICATE",
                        data: response.data.data
                    }
                    channel.postMessage(broadcast_message);
                }
            })
            .catch((error) => {
                if (error) {
                    if (error?.response?.status == 400) {
                        SweetAlertError(error.response.data.reason);
                    } else {
                        SweetAlertError("An error occured. Please try again");
                    }
                    setLoading(false);
                }
            });

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
                            ref={issuerRef}
                            type="text"
                            className="grow"
                            placeholder="Issuer"
                            required
                        />
                    </div>
                </div>
                {/* issue month */}
                <div className="mb-3">
                    <div>
                        <label className="font-bold text-md">Issue Month</label>
                    </div>
                    <select ref={issueMonthRef} required className="select input-bordered w-full">
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
                <div className="mb-3">
                    <div>
                        <label className="font-bold text-md">Issue Year</label>
                    </div>
                    <select ref={issueYearRef} required className="select input-bordered w-full">
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