"use client"
import { _console_log } from '@/utils/console';
import html2canvas from 'html2canvas-pro';
import jsPDF from 'jspdf';


const ResumeDownload = ({ name }) => {

    const handlePrint = () => {
        const printContents = document.getElementById("resumeContainer").cloneNode(true);
        const printWindow = window.open('', '', 'height=800,width=800');

        printWindow.document.write('<html><head><title>Print Resume</title>');
        // Add styles for printing
        printWindow.document.write('<style>body{font-family: Arial, sans-serif;} a { color: blue; text-decoration: underline; } img { max-width: 100%; }</style>');
        printWindow.document.write('</head><body >');
        printWindow.document.write(printContents.outerHTML);
        printWindow.document.write('</body></html>');

        printWindow.document.close();
        printWindow.print();
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
            pdf.save(`(Portfoliia) - ${name} - Resume.pdf`)

        } catch (e) {
            _console_log(e)
        }
    };

    return (
        <>
            <button
                onClick={handleDownloadPdf}
                className="fixed bottom-5 right-16 app-bg-primary hover:app-bg-primary-dark shadow-md hover:shadow-lg text-white duration-300 z-[100] rounded-full w-10 h-10 flex items-center justify-center downsifn"
            >
                <i className="fi fi-tr-cloud-download-alt text-xl flaticon-offset"></i>
            </button>
            <button
                onClick={handlePrint}
                className="fixed bottom-5 right-5 app-bg-primary hover:app-bg-primary-dark shadow-md hover:shadow-lg text-white duration-300 z-[100] rounded-full w-10 h-10 flex items-center justify-center downsifn"
            >
                <i className="fi fi-tr-print text-xl flaticon-offset"></i>
            </button>
        </>
    );
};

export default ResumeDownload;
