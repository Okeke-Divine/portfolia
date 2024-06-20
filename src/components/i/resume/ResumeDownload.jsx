"use client"
import React from 'react';
import jsPDF from 'jspdf';

const ResumeDownload = ({ username }) => {
    const handleDownloadPdf = () => {
        // Get the text content of the resume container
        const resumeContent = document.getElementById('resumeContainer').innerText;

        // Create a new jsPDF instance
        const pdf = new jsPDF();

        // Set font size and text color
        pdf.setFontSize(12);
        pdf.setTextColor(0, 0, 0);

        // Add text to the PDF
        pdf.text(resumeContent, 10, 10);

        // Save the PDF with a specific name
        pdf.save(`${username}_resume.pdf`);
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
