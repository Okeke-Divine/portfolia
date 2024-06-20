"use client"
import React from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const ResumeDownload = ({ username }) => {
    const handleDownloadPdf = () => {
        const element = document.getElementById('resumeContainer');
        if (!element) {
            console.error('Element with id "resumeContainer" not found.');
            return;
        }

        // Use html2canvas to capture the content of the div as an image
        html2canvas(element, { scale: 2 }).then(canvas => {
            // Create a new jsPDF instance
            const pdf = new jsPDF('p', 'mm', 'a4');

            // Calculate dimensions to fit the content on the PDF
            const imgWidth = 210; // A4 width in mm
            const imgHeight = canvas.height * imgWidth / canvas.width;

            // Add the captured image to the PDF
            const imgData = canvas.toDataURL('image/png');
            pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);

            // Save the PDF with a specific name
            pdf.save(`${username}_resume.pdf`);
        });
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
