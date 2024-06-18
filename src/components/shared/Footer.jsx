import config from "@/data/config.json"
import Link from "next/link"

const Footer = () => {
  return (
    <>
      <div className="footer bg-base-200 py-5 md:py-10 landingPagePadx">
        <div>
          <div className="flex justify-center">
            <img
              className="w-24 mb-2 rounded-full shadow-lg"
              src="/images/logo/logo.png"
              alt={config.app_name + "'s logo"}
            />
          </div>
          <div className="uppercase text-xl font-bold">{config.app_name}</div>
          <div className="text-gray-500">{config.summary}</div>
          <div className="text-gray-500">Copyright © 2024 - All right reserved</div>
        </div>
        <div>
          <h6 className="footer-title">Links</h6>
        </div>
        <div>
          <h6 className="footer-title">Legal</h6>
          <Link href="#">Terms of services</Link>
          <Link href="#">Privacy policy</Link>
        </div>
        <div>
          <h6 className="footer-title">Other</h6>

        </div>
      </div>
    </>
  )
}

export default Footer