import AddCertificate from "@/components/info/certificates/AddCertificate";
import ViewCertificates from "@/components/info/certificates/ViewCertificates";

export const metadata = {
  title: "Certificate | Info",
};

const CertificateInfo = () => {
  return (
    <>
      <AddCertificate />
      <div className="divider"></div>
      <ViewCertificates />
    </>
  )
}

export default CertificateInfo