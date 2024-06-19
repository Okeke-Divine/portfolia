import CustomLayout1 from "@/components/shared/CustomLayout1"

export const metadata = {
  title: "Privacy Policy"
}

const pps = [
  {
    title: "Introduction",
    message: "Your privacy is important to us. It is Portfoliia's policy to respect your privacy regarding any information we may collect from you across our website, and other sites we own and operate."
  },
  {
    title: "Information Collection",
    message: "We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we're collecting it and how it will be used."
  },
  {
    title: "Account Creation",
    message: "You can sign up with your email address, fullname, and username to create a Portfoliia account."
  },
  {
    title: "Data Retention",
    message: "We only retain collected information for as long as necessary to provide you with your requested service. What data we store, we'll protect within commercially acceptable means to prevent loss and theft, as well as unauthorized access, disclosure, copying, use, or modification."
  },
  {
    title: "Data Sharing",
    message: "We don't share any personally identifying information publicly or with third-parties, except when required to by law."
  },
  {
    title: "Data Controller and Processor",
    message: "We act in the capacity of a data controller and a data processor with regard to the personal data processed through Portfoliia and the services in terms of the applicable data protection laws, including the EU General Data Protection Regulation (GDPR)."
  },
  {
    title: "External Links",
    message: "Our website may link to external sites that are not operated by us. Please be aware that we have no control over the content and practices of these sites, and cannot accept responsibility or liability for their respective privacy policies."
  },
  {
    title: "Acceptance of Practices",
    message: "Your continued use of our website will be regarded as acceptance of our practices around privacy and personal information. If you have any questions about how we handle user data and personal information, feel free to contact us."
  },
  {
    title: "Effective Date",
    message: "This policy is effective as of 19th June 2024."
  }
];


const PrivacyPolicy = () => {
  return (
    <>
      <CustomLayout1>
        <h1>Privacy Policy</h1>
        <div className="mt-1">
        <div className="mt-1">
          {pps.map((pp, index) => (
            <div key={index} className="mb-3">
              <div className="font-bold mb-1">{index + 1}. {pp.title}</div>
              <div>{pp.message}</div>
            </div>
          ))}
        </div>
        </div>
      </CustomLayout1>
    </>
  )
}

export default PrivacyPolicy