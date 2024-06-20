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
  

    function _addCertificate(e){
        e.preventDefault()
        setLoading(true);
    }

    return (
        <>
      <form onSubmit={_addCertificate} className="form-control">
        
        </form>
        </>
    )
}

export default AddCertificate