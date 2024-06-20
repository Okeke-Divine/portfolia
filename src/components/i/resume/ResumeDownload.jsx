"use client"
import React from 'react';
import html2pdf from 'html2pdf.js';

const ResumeDownload = ({ username }) => {
    const handleDownloadPdf = () => {
        const element = document.getElementById('resumeContainer');
        if (!element) {
            console.error('Element with id "resumeContainer" not found.');
            return;
        }

        // Configure the options for html2pdf
        const options = {
            filename: `${username}_resume.pdf`,
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
        };

        // Use html2pdf to generate PDF from HTML element
        html2pdf().from(element).set(options).save();
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
