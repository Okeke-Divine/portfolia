"use client"
import { useRef, useState } from "react"
import axios from "axios"
import {
    SweetAlertError,
    SweetAlertSuccess,
} from "@/utils/customSweetAlertFunction";

const AddEducation = () => {
    //refs
    const fieldOfStudyRef = useRef(null)
    const schoolRef = useRef(null)
    const degreeRef = useRef(null)
    const startYearRef = useRef(null)
    const endYearRef = useRef(null)

    const channel = new BroadcastChannel("user-educations-channel")
    const [loading, setLoading] = useState(false)


    function _addEducation(e) {
        e.preventDefault()
        setLoading(true);
    }

    return (
        <>
            <form onSubmit={_addEducation} className="form-control">
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

export default AddEducation