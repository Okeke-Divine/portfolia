import config from "@/data/config.json"

const Footer = () => {
  return (
    <>
      <div className="footer bg-base-200 py-2 md:py-5 landingPagePadx">
        <div>
          <div className="flex justify-center">
            <img
              className="w-24 mb-2 rounded-full shadow-lg"
              src="/images/logo/logo.png"
              alt={config.app_name + "'s logo"}
            />
          </div>
          <div className="uppercase text-xl font-bold">{config.app_name}</div>
        </div>
        <div>
          <h6 className="footer-title">Links</h6>
        </div>
        <div>
          <h6 className="footer-title">Links</h6>

        </div>
        <div>
          <h6 className="footer-title">Other</h6>

        </div>
      </div>
    </>
  )
}

export default Footer