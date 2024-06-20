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

    return (
        <div>AddCertificate</div>
    )
}

export default AddCertificate