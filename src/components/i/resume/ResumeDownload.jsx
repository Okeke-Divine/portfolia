"use client"
import React from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const ResumeDownload = ({ username }) => {

    const handleDownloadPdf = () => {
    };

    return (
        <>
            <button
                onClick={handleDownloadPdf}
                className="fixed bottom-5 right-5 app-bg-primary hover:app-bg-primary-dark shadow-md hover:shadow-lg text-white duration-300 z-[100] rounded-full w-10 h-10 flex items-center justify-center downsifn"
            >
                <i className="fi fi-tr-cloud-download-alt text-xl flaticon-offset"></i>
            </button>
        </>
    );
};

export default ResumeDownload;
