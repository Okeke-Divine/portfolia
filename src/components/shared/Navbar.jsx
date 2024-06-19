import config from "@/data/config.json"
import Link from "next/link"

const Navbar = () => {
  return (
    <>
      <div className="navbar border-b-2 landingPagePadx fixed top-0 left-0 bg-white z-50">
        <div className="navbar-start">
          <div className="flex gap-2 items-center">
            <div>
              <img
                className="w-12 mb-2 rounded-full shadow-lg"
                src="/images/logo/logo.png"
                alt={config.app_name + "'s logo"}
              />
            </div>
            <div className="text-xl font-bold">{config.app_name}</div>
          </div>
        </div>
        <div className="hidden md:flex navbar-center">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href="/#how">How it works</Link>
            </li>
            <li>
              <Link href="/#features">Features</Link>
            </li>
            <li>
              <Link href="/#reviews">Reviews</Link>
            </li>
            <li>
              <Link href="/#faqs">FAQs</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end flex gap-2">
          <Link className="btn btn-neutrual" href="/signin">Signin</Link>
          <Link className="btn app-primary-button w-fit" href="/signup">Get Started</Link>
        </div>
      </div>
      {/* space below */}
      <div className="mb-16"></div>
    </>
  )
}

export default Navbar