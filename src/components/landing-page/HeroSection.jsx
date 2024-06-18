import Link from "next/link"

const HeroSection = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 landingPagePadx py-5">
        <div>
          <h1 className="text-5xl">
            Make a beautiful portfolio + resume in <span className="app-text-primary">minutes</span> not days
          </h1>
          <Link className="app-primary-button" href="/signup">Get Started → It's free</Link>
        </div>
        <div></div>
      </div>
    </>
  )
}

export default HeroSection