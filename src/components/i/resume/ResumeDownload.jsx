"use client"
import { _console_log } from '@/utils/console';
import html2canvas from 'html2canvas-pro';
import jsPDF from 'jspdf';


const ResumeDownload = ({ name }) => {

    const handlePrint = () => {
        const element = document.getElementById("resumeContainer").cloneNode(true);
        const printWindow = window.open('', '', 'height=800,width=800');
    
        // Inject Tailwind CSS and DaisyUI into the new window
        const stylesheets = Array.from(document.querySelectorAll('link[rel="stylesheet"], style'))
            .map((node) => node.outerHTML)
            .join('\n');
    
        printWindow.document.write(`
            <html>
            <head>
                <title>(Portfoliia) - ${name} - Resume</title>
                ${stylesheets}
                <style>
                    @page { margin: 0; }
                    body { margin: 0; }
                    img { max-width: 100%; }
                    a { color: blue; text-decoration: underline; }
                </style>
            </head>
            <body>
                ${element.outerHTML}
            </body>
            </html>
        `);
    
        printWindow.document.close();
    
        // Ensure stylesheets are fully loaded before printing
        printWindow.onload = () => {
            printWindow.focus();
            printWindow.print();
            printWindow.close();
        };
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
                title="Download static image"
            >
                <i className="fi fi-tr-down-to-line text-xl flaticon-offset"></i>
            </button>
            <button
                onClick={handlePrint}
                className="fixed bottom-5 right-5 app-bg-primary hover:app-bg-primary-dark shadow-md hover:shadow-lg text-white duration-300 z-[100] rounded-full w-10 h-10 flex items-center justify-center downsifn"
                title="Print dynamic resume"
            >
                <i className="fi fi-tr-print text-xl flaticon-offset"></i>
            </button>
        </>
    );
};

export default ResumeDownload;
