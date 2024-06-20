import prisma from "@/app/db";

const ResumeCertificates = async ({ userId }) => {

    const certificates = await prisma.userCertificate.findMany({
        where: { userId },
    });


    return (
        <>
            <div className="app-resume-padding app-resume-container-margin-top">
                <div className="divider divider-start">
                    <h3 className="uppercase">Certificates</h3>
                </div>
                <div className="flex flex-wrap gap-x-2 md:gap-x-3 gap-y-2">
                    {certificates.map((certificate, index) => (
                        <div key={index} className="">
                            <div><b> {certificate.name}</b> - {certificate.issuer}</div>
                            <div>{certificate.issueMonth} {certificate.issueYear}</div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default ResumeCertificates