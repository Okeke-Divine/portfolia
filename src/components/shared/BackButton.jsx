"use client"
// components/shared/BackButton.js
import { useRouter } from "next/navigation";

const BackButton = () => {
    const router = useRouter();

    return (
        <button onClick={() => router.back()} className="btn btn-ghost">
            <i className="fi flaticon-offset fi-tr-angle-small-left"></i> Back
        </button>
    );
};

export default BackButton;
