import { buyMeACoffeUrl, skiyenUrl, twitterAccUrl } from "@/constants/shared/constant"
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
          <div className="text-xl font-bold">{config.app_name}</div>
          <div className="text-gray-600">{config.summary}</div>
          <div className="text-gray-600">Copyright © 2024 - All right reserved</div>
        </div>
        <div>
          <h6 className="footer-title">Links</h6>
          <div className="flex flex-col gap-2 app-footer-link">
            <Link href="/signin">Signin</Link>
            <Link href="/signup">Signup</Link>
          </div>
        </div>
        <div>
          <h6 className="footer-title">Legal</h6>
          <div className="flex flex-col gap-2 app-footer-link">
            <Link href="/tod">Terms and Conditions</Link>
            <Link href="/privacy-policy">Privacy policy</Link>
          </div>
        </div>
        <div>
          <h6 className="footer-title">Other</h6>
          <div className="flex flex-col gap-2 app-footer-link">
            <Link href={twitterAccUrl} target="_blank">Twitter</Link>
            <Link href={buyMeACoffeUrl} target="_blank">Buy me a coffee</Link>
            <Link href={skiyenUrl} target="_blank">Skiyen</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer