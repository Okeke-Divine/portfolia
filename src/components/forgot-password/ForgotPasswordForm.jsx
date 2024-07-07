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
        </>
    )
}

export default ForgotPasswordForm