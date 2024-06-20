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
                <div className="">
                    {certificates.map((certificate, index) => (
                        <div key={index} className="mb-2">
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