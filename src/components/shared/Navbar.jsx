import config from "@/data/config.json"
import Link from "next/link"

const Navbar = () => {
  return (
    <>
      <div className="navbar border-b-2">
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
        <div className="navbar-end">
          <Link className="btn btn-neutrual" href="/signin">Signin</Link>
          <Link className="btn app-primary-button" href="/signin">Get Started</Link>
        </div>
      </div>
    </>
  )
}

export default Navbar