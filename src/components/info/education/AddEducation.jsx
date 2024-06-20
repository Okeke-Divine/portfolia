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
                {/* field of study */}
                <div className="mb-3">
                    <div>
                        <label className="font-bold text-md">Field of Study</label>
                    </div>
                    <div className="input input-bordered flex items-center gap-2 mt-1">
                        <input
                            type="text"
                            className="grow"
                            placeholder="Field of Study"
                            required
                            ref={fieldOfStudyRef}
                        />
                    </div>
                </div>
                {/* school */}
                <div className="mb-3">
                    <div>
                        <label className="font-bold text-md">School</label>
                    </div>
                    <div className="input input-bordered flex items-center gap-2 mt-1">
                        <input
                            type="text"
                            className="grow"
                            placeholder="School"
                            required
                            ref={schoolRef}
                        />
                    </div>
                </div>
                {/* degree */}
                <div className="mb-3">
                    <div>
                        <label className="font-bold text-md">Degree</label>
                    </div>
                    <div className="input input-bordered flex items-center gap-2 mt-1">
                        <input
                            type="text"
                            className="grow"
                            placeholder="Degree"
                            required
                            ref={degreeRef}
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
                            "Add"
                        )}
                    </button>
                </div>
            </form>
        </>
    )
}

export default AddEducation