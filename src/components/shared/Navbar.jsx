"use client"
import config from "@/data/config.json"
import Link from "next/link"
import { usePathname } from "next/navigation"

const Navbar = () => {

  const pathname = usePathname();

  return (
    <>
      <div className="navbar border-b-2 landingPagePadx fixed top-0 left-0 bg-white z-50">
        <div className="navbar-start">
          <Link href="/">
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
          </Link>
        </div>
        <div className="hidden md:flex navbar-center overflow-x-auto w-fit">
          <ul className="menu menu-horizontal px-1 gap-1 w-fit">
            {pathname === "/" ? (<>
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
              </li></>) : (
              <>
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/tac">Terms and Conditions</Link>
                </li>
                <li>
                  <Link href="/privacy-policy">Privacy Policy</Link>
                </li>
              </>)}
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