"use client"

const ResumeDownload = ({ username }) => {
    return (
        <>
            <button className="fixed bottom-5 left-5 app-bg-primary hover:app-bg-primary-dark shadow-md hover:shadow-lg text-white duration-300 z-[100] rounded-full w-10 h-10 flex items-center justify-center">
                <i class="fi fi-tr-cloud-download-alt text-xl flaticon-offset"></i>
            </button>
        </>
    )
}

export default ResumeDownload