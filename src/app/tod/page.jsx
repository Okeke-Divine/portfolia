import CustomLayout1 from "@/components/shared/CustomLayout1"

const tacs = [
  {
    title: "Introduction",
    message: "By using Portfoliia, you confirm your acceptance of, and agree to be bound by, these terms and conditions."
  },
  {
    title: "Agreement to Terms and Conditions",
    message: "This Agreement takes effect on the date on which you first use the Portfoliia platform."
  },
  {
    title: "Software License and Termination Rights",
    message: "The Portfoliia Software License grants users unrestricted and perpetual access to its comprehensive functionalities through a single, free purchase. Tailored for independent creators, entrepreneurs, and small businesses, Portfoliia empowers users to create compelling resumes and online portfolios. This license entails a straightforward and flexible arrangement, exempting users from recurring fees or subscriptions. However, it is important to acknowledge that the licensor retains the right to terminate the license without conditions or prerequisites. This termination provision enables the licensor to exercise control over software distribution and utilization. Opting for the Portfoliia Software License enables users to enjoy the benefits of the software while recognizing the licensor's unrestricted termination rights, which provide adaptability and address potential unforeseen circumstances."
  },
  {
    title: "Disclaimer",
    message: "It is not warranted that Portfoliia will meet your requirements or that its operation will be uninterrupted or error-free. All express and implied warranties or conditions not stated in this Agreement (including without limitation, loss of profits, loss or corruption of data, business interruption or loss of contracts), so far as such exclusion or disclaimer is permitted under the applicable law, are excluded and expressly disclaimed. This Agreement does not affect your statutory rights."
  },
  {
    title: "Warranties and Limitation of Liability",
    message: "Portfoliia does not give any warranty, guarantee, or other term as to the quality, fitness for purpose, or otherwise of the software. Portfoliia shall not be liable to you by reason of any representation (unless fraudulent), or any implied warranty, condition, or other term, or any duty at common law, for any loss of profit or any indirect, special, or consequential loss, damage, costs, expenses, or other claims (whether caused by Portfoliia's negligence or the negligence of its servants or agents or otherwise) which arise out of or in connection with the provision of any goods or services by Portfoliia. Portfoliia shall not be liable or deemed to be in breach of contract by reason of any delay in performing, or failure to perform, any of its obligations if the delay or failure was due to any cause beyond its reasonable control. Notwithstanding contrary clauses in this Agreement, in the event that Portfoliia is deemed liable to you for breach of this Agreement, you agree that Portfoliia's liability is limited to the amount actually paid by you for your services or software, which amount is calculated in reliance upon this clause. You hereby release Portfoliia from any and all obligations, liabilities, and claims in excess of this limitation."
  },
  {
    title: "Responsibilities",
    message: "Portfoliia is not responsible for what the user does with the user-generated content."
  },
  {
    title: "Data Security",
    message: "We take the security of your data seriously. All personal information and user data provided on the Portfoliia platform are stored securely and used in accordance with our Privacy Policy."
  },
  {
    title: "General Terms and Law",
    message: "This Agreement is governed by the laws of [Your Country]. You acknowledge that no joint venture, partnership, employment, or agency relationship exists between you and Portfoliia as a result of your use of these services. You agree not to hold yourself out as a representative, agent, or employee of Portfoliia. You agree that Portfoliia will not be liable by reason of any representation, act, or omission to act by you."
  },
  {
    title: "Changes to Terms and Conditions",
    message: "Portfoliia reserves the right to modify these terms and conditions at any time. Any changes will be posted on our website, and your continued use of the platform signifies your acceptance of the updated terms."
  },
  {
    title: "Last Updated",
    message: "[Current Date]"
  }
];


export const metadata = {
  title: "Terms of Sevice"
}

const TermsOfService = () => {
  return (
    <>
      <CustomLayout1>
        <h1>Terms and Conditions</h1>
        <div className="mt-1">
          {tacs.map((tac, index) => (
            <div key={index} className="mb-3">
              <div className="font-bold mb-1">{index + 1}{tac.title}</div>
              <div>{tac.message}</div>
            </div>
          ))}
        </div>
      </CustomLayout1>
    </>
  )
}

export default TermsOfService