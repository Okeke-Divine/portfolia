"use client"
import { _console_log } from '@/utils/console';
import html2canvas from 'html2canvas-pro';
import jsPDF from 'jspdf';
import { useRef } from "react"

const ResumeDownload = ({ username }) => {

    const meRef = useRef(null)

    const handlePrint = () => {
        const printContents = document.getElementById("resumeContainer").innerHTML;
        const originalContents = document.body.innerHTML;

        document.body.innerHTML = printContents;
        window.print();
        document.body.innerHTML = originalContents;

        // To avoid issues with component states and reactivity, use window.location.reload()
        window.location.reload();
    };


    const handleDownloadPdf = async () => {

        try {
            const element = document.getElementById("resumeContainer");
            const canvas = await html2canvas(element, {
                scale: 1,
                allowTaint: true,
                logging: true,
                useCORS: true,
            });
            const imgData = canvas.toDataURL("image/png");

            const pdf = new jsPDF({
                orientation: "portrait",
                unit: "px",
                format: "a4",
            });


            pdf.addImage(imgData, "PNG", 0, 0);
            pdf.save("resume.pdf")

        } catch (e) {
            _console_log(e)
        }
    };

    return (
        <>
            <button
                onClick={handleDownloadPdf}
                className="fixed bottom-5 right-16 app-bg-primary hover:app-bg-primary-dark shadow-md hover:shadow-lg text-white duration-300 z-[100] rounded-full w-10 h-10 flex items-center justify-center"
            >
                <i className="fi fi-tr-cloud-download-alt text-xl flaticon-offset"></i>
            </button>
            <button
                onClick={handlePrint}
                className="fixed bottom-5 right-5 app-bg-primary hover:app-bg-primary-dark shadow-md hover:shadow-lg text-white duration-300 z-[100] rounded-full w-10 h-10 flex items-center justify-center"
            >
                <i className="fi fi-tr-print text-xl flaticon-offset"></i>
            </button>
        </>
    );
};

export default ResumeDownload;
